import express from "express";

import TweetController from "../controller/TweetController";

const tweetRouter = express.Router();

tweetRouter.get("/search", new TweetController().getTweetsByHashTag);
tweetRouter.post("/approve/:id", new TweetController().approveTweet);
tweetRouter.get("/getapprovedtweet", new TweetController().getApprovedTweet);

export default tweetRouter;