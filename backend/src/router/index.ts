import { Router } from "express";
import userRoute from "./user.routes";
import tweetRouter from "./tweets.routes";

const routes = Router();

routes.use("/user", userRoute);
routes.use("/tweets", tweetRouter);

export default routes;
