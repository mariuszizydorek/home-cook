import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  Authorized,
  AuthChecker,
} from "type-graphql";
import UserInfo, {
  AuthenticationInput,
  LoginInput,
  PersonalInfo,
  PersonalInfoInput,
  User,
  UserToken,
} from "../types/userInfo.type";
import { UserService } from "../services/userService";
import { Service } from "typedi";

@Service()
@Resolver((of) => UserInfo)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async Test(): Promise<String> {
    return Promise.resolve("test");
  }

  @Authorized()
  @Query((returns) => UserInfo)
  async userInfo(
    @Ctx("payload") payload: any,
    @Ctx("token") token: string,
    @Ctx("loggedIn") loggedIn: boolean
  ): Promise<UserInfo> {
    return this.userService
      .findUserToken(token)
      .then((userToken) => {
        return this.userService.findUserInfo(userToken.userName);
      })
      .then((userInfo) => {
        const userI = { ...userInfo, loggedIn };
        return userI;
      });
  }

  @Mutation(() => UserToken)
  async login(@Arg("loginInput") loginInput: LoginInput): Promise<UserToken> {
    return this.userService.login(loginInput.email, loginInput.password);
  }

  @Mutation((returns) => UserInfo)
  async register(@Arg("authentication") authentication: AuthenticationInput) {
    const user = await this.userService.register(authentication);
    return user;
  }

  @Mutation((returns) => PersonalInfo)
  async updateDetails(@Arg("personalInfo") personalInfo: PersonalInfoInput) {
    const personalInfoReturn = await this.userService.saveUserDetails(
      personalInfo
    );
    return personalInfoReturn;
  }
}
