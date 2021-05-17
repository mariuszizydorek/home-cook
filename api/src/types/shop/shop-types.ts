import { Field, InputType, ObjectType } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType()
export class Category {
  @Field()
  @prop()
  category: string;

  @Field()
  @prop()
  icon: string;
}

@InputType()
export class CategoryInput {
  @Field()
  @prop()
  category: string;

  @Field()
  @prop()
  icon: string;
}

@ObjectType()
export class Product {
  @Field()
  @prop()
  name: string;

  @Field()
  @prop()
  description: string;

  @Field()
  @prop()
  category: string;

  @Field()
  @prop()
  icon: string;
}

@InputType()
export class ProductInput {
  @Field()
  @prop()
  name: string;

  @Field()
  @prop()
  description: string;

  @Field()
  @prop()
  category: string;

  @Field()
  @prop()
  icon: string;
}
