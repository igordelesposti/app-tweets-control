import BaseDataBase from "./BaseDataBase";
import { Tweet } from "../models/Tweet";

export default class TweetDataBase extends BaseDataBase {
  public async getApprovedTweet(): Promise<Tweet[]> {
    const result = await this.getConnection()
      .select("*")
      .from(BaseDataBase.TABLE_TWEET);
    return result;
  }
}
