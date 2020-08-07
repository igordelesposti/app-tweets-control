import { AddressInfo } from "net";

const express = require("express");
const Twit = require("twit");
const app = express();

var T = new Twit({
  consumer_key: "kRId3jXXJIjTKOlCX4RgZoxbT",
  consumer_secret: "XZt9EdeqjXAbpnKSAs5h8fjOrVaftKmCgNkoX0npzVxSOCMYaC",
  access_token: "1289027532-9c9ANBvBBHghej0L4aoVOuN5Byy2zY0lExahR4i",
  access_token_secret: "BO4WtJYczVOS90DV6mX6pcBq9QCvwNL15yAC5RTIlsUo0",
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

//top trends twitter
app.get("/toptrends", (request, response) => {
  T.get(
    "https://api.twitter.com/1.1/trends/place.json?id=1",
    (err, data, response) => {
      for (let eachData of data) console.log(eachData);
    }
  );
  response.sendStatus(200);
});

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
app.get("/search", (request, response) => {
  T.get(
    "https://api.twitter.com/1.1/search/tweets.json?q=%23libano&result_type=recent",
    (err, data, response) => {
      console.log(data);
    }
  );
  response.sendStatus(200);
});



const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
