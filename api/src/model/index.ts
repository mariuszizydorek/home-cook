import { getModelForClass } from "@typegoose/typegoose";
import { User } from "../types/userInfo.type";

export const UserModel = getModelForClass(User); // UserModel is a regular Mongoose Model with correct types
