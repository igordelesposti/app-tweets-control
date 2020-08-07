import BaseDataBase from "./BaseDataBase";
import { User } from "../models/User";

export default class UserDataBase extends BaseDataBase {
  public static readonly TABLE_NAME: string = "tweetControl_users";

  public async signup(user: User) {
    await this.getConnection()
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into(BaseDataBase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .where({ email })
      .from(UserDataBase.TABLE_NAME);
    return result[0];
  }
}
