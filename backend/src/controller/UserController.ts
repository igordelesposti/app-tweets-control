import { Request, Response } from "express";
import CustomError from "../err/CustomError";
import { Authenticator } from "../services/Authenticator";
import UserDatabase from "../data/UserDatabase";
import UserBusiness from "../business/UserBusiness";

export default class UserController {
  public async signUp(request: Request, response: Response) {
    const { name, email, password} = request.body;

    try {
      const accessToken = await new UserBusiness().signUp({
        name,
        email,
        password,
      });

      response.status(200).send({ accessToken });
    } catch (err) {
      if (err instanceof CustomError)
        response.status(err.status).send({ error: err.message });
      else {
        response.status(500).send({ error: err });
      }
    }
  }

  public async login(request: Request, response: Response) {
    const { email, password} = request.body;

    try {
      const accessToken = await new UserBusiness().login({
        email,
        password,
      });


      response.status(200).send({ accessToken });
    } catch (err) {
      if (err instanceof CustomError)
        response.status(err.status).send({ error: err.message });
      else {
        response.status(500).send({ error: err });
      }
    }
  }
}

