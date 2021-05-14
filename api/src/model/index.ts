import { getModelForClass } from "@typegoose/typegoose";
import { PersonalInfo, User, UserToken } from "../types/userInfo.type";

export const UserModel = getModelForClass(User); // UserModel is a regular Mongoose Model with correct types
export const UserTokenModel = getModelForClass(UserToken);
export const PersonalInfoModel = getModelForClass(PersonalInfo);
