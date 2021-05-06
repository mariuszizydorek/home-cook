import { Arg, Mutation, Query, Resolver } from "type-graphql";
import UserInfo, {
  AuthenticationInput,
  PersonalInfo,
  PersonalInfoInput,
  User,
} from "../types/userInfo.type";
import AuthenticationInfo from "../types/userInfo.type";
import { UserService } from "../services/userService";
import { Service } from "typedi";
import { PromiseOrValue } from "graphql/jsutils/PromiseOrValue";

@Service()
@Resolver((of) => UserInfo)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async Test(): Promise<String> {
    return Promise.resolve("test");
  }

  @Query((returns) => UserInfo)
  async userInfo(
    @Arg("token", { nullable: false }) token: string
  ): Promise<UserInfo> {
    const userInfo: UserInfo = {
      userName: token + " zzz",
      firstName: token + " ppp",
      lastName: token + " bla",
    };
    return Promise.resolve(userInfo);
  }

  @Query(() => AuthenticationInfo)
  async login(
    @Arg("authentication") authenticationInput: AuthenticationInput
  ): Promise<AuthenticationInfo> {
    const authInfo: AuthenticationInfo = {
      userName: "test",
      firstName: "ss",
      lastName: "sda",
    };
    return Promise.resolve(authInfo);
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
    //test bla sda sdfsa
    return personalInfoReturn;
  }
}
