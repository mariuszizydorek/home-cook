import { Field, ID, ObjectType, InputType } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType()
export default class UserInfo {
  @Field()
  userName: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  loggedIn?: boolean;
}

@ObjectType()
export class AuthenticationInfo {
  @Field()
  userId: string;

  @Field()
  authToken: string;
}

export class User {
  @prop()
  userName: string;

  @prop()
  encryptedPassword: string;

  @prop()
  firstName: string;

  @prop()
  lastName: string;
}

@ObjectType()
export class UserToken {
  @Field()
  @prop()
  userName: string;

  @Field()
  @prop()
  authToken: string;
}

@ObjectType()
export class PersonalInfo {
  @Field()
  @prop()
  userName: string;
  @Field()
  @prop()
  firstName: string;
  @Field()
  @prop()
  lastName: string;
  @Field()
  @prop()
  displayName: string;
}

@InputType()
export class PersonalInfoInput {
  @Field()
  @prop()
  userName: string;
  @Field()
  @prop()
  firstName: string;
  @Field()
  @prop()
  lastName: string;
  @Field()
  @prop()
  displayName: string;
}

@InputType()
export class AuthenticationInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
