import { Field, ID, ObjectType, InputType } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType()
export default class UserInfo {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class AuthenticationInfo {
  @Field()
  userId: string;

  @Field()
  authToken: string;
}

@ObjectType()
export class User {
  @Field()
  @prop()
  userName: string;

  @Field()
  @prop()
  encryptedPassword: string;
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

@ObjectType()
export class UserToken {
  @Field()
  @prop()
  userName: string;

  @Field()
  @prop()
  authToken: string;
}

@InputType()
export class AuthenticationInput {
  @Field()
  userName: string;

  @Field()
  password: string;
}
