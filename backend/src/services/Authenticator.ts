import * as jwt from "jsonwebtoken";

export class Authenticator {
  public generateToken(input: AuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!): string {
    const token = jwt.sign(
      {
        id: input.id,
        type: input.type
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "1y",
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      type: payload.type,
      
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  type?: string;
  
}