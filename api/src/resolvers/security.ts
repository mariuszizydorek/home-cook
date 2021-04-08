import { Arg, Mutation, Query, Resolver } from "type-graphql";
import UserInfo, { AuthenticationInput, User } from "../types/userInfo.type";
import AuthenticationInfo from "../types/userInfo.type";
import { UserService } from "../services/userService";
import { Service } from "typedi";

@Service()
@Resolver((of) => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserInfo)
  async userInfo(
    @Arg("token", { nullable: false }) token: string
  ): Promise<UserInfo> {
    const userInfo: UserInfo = { name: "test", id: "1" };
    return Promise.resolve(userInfo);
  }

  @Query(() => AuthenticationInfo)
  async login(
    @Arg("authentication") authenticationInput: AuthenticationInput
  ): Promise<AuthenticationInfo> {
    const authInfo: AuthenticationInfo = {
      id: "test",
      name: "bla",
    };
    return Promise.resolve(authInfo);
  }

  @Mutation((returns) => UserInfo)
  async register(@Arg("authentication") authentication: AuthenticationInput) {
    const user = await this.userService.register(
      authentication.userName,
      authentication.password
    );
    return { id: "test", name: "bla" };
  }
}
