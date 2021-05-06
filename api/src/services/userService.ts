import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Service } from "typedi";
import UserInfo, {
  AuthenticationInput,
  PersonalInfo,
  PersonalInfoInput,
  User,
} from "../types/userInfo.type";
import { config } from "../configs/config";
import { PersonalInfoModel, UserModel } from "../model";

@Service()
export class UserService {
  async login(email: string, password: string): Promise<UserInfo> {
    return Promise.reject();
  }

  async register({
    firstName,
    lastName,
    email,
    password,
  }: AuthenticationInput): Promise<UserInfo | undefined> {
    const lowerCaseEmail = email.toLowerCase().trim();

    const exist = await UserModel.findOne({ userName: lowerCaseEmail }).exec();
    if (exist) {
      return Promise.reject("User already exist");
    }
    await encryptPassword(password).then((p) => {
      const user: User = {
        userName: lowerCaseEmail,
        encryptedPassword: p,
        firstName,
        lastName,
      };
      return UserModel.create(user);
    });

    return Promise.resolve(undefined);
  }

  async saveUserDetails(
    personalInfo: PersonalInfoInput
  ): Promise<PersonalInfo> {
    return PersonalInfoModel.create(personalInfo);
  }
}

const encryptPassword = (password: string): Promise<string> =>
  new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err: Error, salt: string) => {
      if (err) {
        reject(err);
        return false;
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(hash);
        return true;
      });
      return false;
    });
  });

const comparePassword = (password: string, hash: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const isMatch = await bcrypt.compare(password, hash);
      resolve(isMatch);
      return true;
    } catch (err) {
      reject(err);
      return false;
    }
  });

const getToken = (payload: any) => {
  const token = jwt.sign(payload, config.secret, {
    expiresIn: 604800, // 1 Week
  });
  return token;
};

const getPayload = (token: any) => {
  try {
    const payload = jwt.verify(token, config.secret);
    return { loggedIn: true, payload };
  } catch (err) {
    // Add Err Message
    return { loggedIn: false };
  }
};
