import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tweets from "./tweets"


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tweets
  });