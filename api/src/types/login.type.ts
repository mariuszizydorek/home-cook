import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Login {
  @Field()
  id: string;
}
