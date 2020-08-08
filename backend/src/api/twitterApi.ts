import Twit from "twit";
import { Tweet } from "../models/Tweet";

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
  access_token: process.env.TWITTER_ACCESS_TOKEN as string,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

export class TwitterApi {

  public static getTweets(hashtag: string): Promise<Tweet[]> {
    return new Promise((resolve, reject) => {
      T.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=%23${hashtag}&result_type=recent`,
        (err: any, data: any, response: any) => {
          if (err) {
            reject(err);
          }
          const tweets = data.statuses.map((tweet: { user: { screen_name: any; }; text: any; id: any }) => {
            return {
              id: tweet.id,
              username: tweet.user.screen_name,
              tweet: tweet.text,

            };
          });
          resolve(tweets);
          console.log(data)
          
        }
      );
    });
  }
}
