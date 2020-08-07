import cors from "cors";
import dotenv from "dotenv"
import { AddressInfo } from "net";
import express from "express";
import routes from "./router";



const Twit = require("twit");

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

dotenv.config();

const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

app.use(routes);

const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



//top trends twitter
app.get("/toptrends", (request, response) => {
  T.get(
    "https://api.twitter.com/1.1/trends/place.json?id=1",
    (err: any , data: any, response: any) => {
      for (let eachData of data) console.log("comeco", eachData);
    }
  );
  response.sendStatus(200);
});

//
//  
// https://api.twitter.com/1.1/search/tweets.json?q=geocode=-22.912214,-43.230182,1km&lang=pt&result_type=recent
app.get("/search", (request, response) => {
  T.get(
    "https://api.twitter.com/1.1/search/tweets.json?q=%23aovivo&result_type=recent",
    (err: any, data: any, response: any) => {
      
      for (let tweet of data.statuses){
        console.log("TEXTO: ", tweet.text)
        console.log("USUÁRIO: ", tweet.user.screen_name)
      }  
      
    }
  );
  response.sendStatus(200);
});





