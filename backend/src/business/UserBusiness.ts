import { signUpDTO, User, loginDTO } from "../models/User";
import CustomError from "../err/CustomError";
import UserDB from "../data/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export default class UserBusiness {

  public async signUp({ name, email, password }: signUpDTO) {
    const userDatabase = new UserDB();

    const userExist = await userDatabase.getUserByEmail(email);

    if (userExist) throw new CustomError("Email já em uso.", 400);

    if (!name || !email || !password) {
      throw new CustomError("Preencha os campos para prosseguir.", 400);
    }
    if (email.indexOf("@") === -1) {
      throw new CustomError("Email inválido", 400);
    }

    if (!password || password.length < 6) {
      throw new CustomError(
        "Favor inserir no mínimo 6 caracteres para sua senha.",
        400
      );
    }

    const id = new IdGenerator().generate();

    const hashedPassword = await new HashManager().hash(password);

    const userData: User = {
      id,
      name,
      email,
      password: hashedPassword,
    };

    const accessToken = new Authenticator().generateToken({ id });

    await userDatabase.signup(userData);

    return { accessToken };
  }

  public async login({ email, password }: loginDTO) {
    const userDatabase = new UserDB();

    const user = await userDatabase.getUserByEmail(email);

    if (!user) throw new CustomError("Email ou password está incorreto", 400);

    const correctPassword = await new HashManager().compare(
      password,
      user.password
    );

    if (!correctPassword) throw new CustomError("Password está incorreto", 400);

    const accessToken = new Authenticator().generateToken({
      id: user.id,
    });

    return { accessToken };
  }
}
