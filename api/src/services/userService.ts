import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Service } from "typedi";
import UserInfo, {
  AuthenticationInput,
  PersonalInfo,
  PersonalInfoInput,
  User,
  UserToken,
} from "../types/userInfo.type";
import { config } from "../configs/config";
import { PersonalInfoModel, UserModel, UserTokenModel } from "../model";
import { rejects } from "assert";

@Service()
export class UserService {
  async login(userName: string, password: string): Promise<UserToken> {
    const lowerCaseEmail = userName.toLowerCase().trim();
    return UserModel.findOne({ userName: lowerCaseEmail })
      .exec()
      .then((user) => {
        if (user?.userName === userName) {
          const { encryptedPassword } = user;
          return comparePassword(password, encryptedPassword);
        }
        return Promise.reject("Wrong user name or password");
      })
      .then((result) => {
        if (result) {
          return UserTokenModel.deleteMany({ userName: lowerCaseEmail });
        }
        return Promise.reject();
      })
      .then(() =>
        UserTokenModel.create({
          userName: lowerCaseEmail,
          authToken: getToken({ userName }),
        })
      );

    return Promise.reject();
  }

  validateToken(token: any) {
    return getPayload(token);
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
    return encryptPassword(password)
      .then((p) => {
        const user: User = {
          userName: lowerCaseEmail,
          encryptedPassword: p,
          firstName,
          lastName,
        };
        return user;
      })
      .then((user) => {
        return UserModel.create(user);
      })
      .then((user) => ({ userName: email, firstName, lastName }));
  }

  async saveUserDetails(
    personalInfo: PersonalInfoInput
  ): Promise<PersonalInfo> {
    return PersonalInfoModel.create(personalInfo);
  }

  async findUserToken(token: string): Promise<UserToken> {
    // @ts-ignore
    return UserTokenModel.findOne({ authToken: token });
  }

  async findUserInfo(userName: string): Promise<UserInfo> {
    return new Promise<UserInfo>((resolve, rejects) => {
      UserModel.findOne({ userName: userName }, (err, res) => {
        if (err) rejects(err);

        resolve({
          userName: res?.userName ?? "",
          firstName: res?.firstName ?? "",
          lastName: res?.lastName ?? "",
        });
      });
    });
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

export const getPayload = (token: any) => {
  try {
    const payload = jwt.verify(token, config.secret);
    return { loggedIn: true, payload };
  } catch (err) {
    // Add Err Message
    return { loggedIn: false };
  }
};
