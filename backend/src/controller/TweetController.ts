import { Request, Response } from "express";
import { TwitterApi } from "../api/twitterApi";
import TweetDataBase from "../data/TweetDataBase";
import UserDataBase from "../data/UserDatabase";
import CustomError from "../err/CustomError";
import { Authenticator } from "../services/Authenticator";

export default class TweetController {
  public async getTweetsByHashTag(request: Request, response: Response) {
    const hashTag = request.query.hashTag;

    if (typeof hashTag !== "string") {
      throw new CustomError("A hashtag é obrigatória.", 400);
    }
    try {
      const result = await TwitterApi.getTweets(hashTag);

      response.status(200).send({ result });
    } catch (err) {
      console.log(err);
    }
  }
  public async approveTweet(request: Request, response: Response) {
    try {
      const auth = request.headers.authorization as string;

      const authenticator = new Authenticator().getData(auth);

      const { user_tweet, content_tweet, tag } = request.body;

      const id = request.params.id;
      const dataTweet = {
        id,
        user_tweet,
        content_tweet,
        tag,
        approved_by: authenticator.id,
      };

      await new UserDataBase().approveTweet(dataTweet);
      if (!id) {
        throw new CustomError("Tweet não encontrado", 400);
      }
      response.status(200).send({ message: "Tweet aprovado com sucesso!" });
    } catch (err) {
      if (err instanceof CustomError)
        response.status(err.status).send({ error: err.message });
      else {
        response.status(500).send({ error: err });
      }
    }
  }

  public async getApprovedTweet(request: Request, response: Response) {
    try {
      const result = await new TweetDataBase().getApprovedTweet();

      response.status(200).send({ result });
    } catch (err) {
      if (err instanceof CustomError)
        response.status(err.status).send({ error: err.message });
      else {
        response.status(500).send({ error: err });
      }
    }
  }
}
