/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserInfo
// ====================================================

export interface GetUserInfo_userInfo {
  __typename: "UserInfo";
  userName: string;
  firstName: string;
  lastName: string;
}

export interface GetUserInfo {
  userInfo: GetUserInfo_userInfo;
}

export interface GetUserInfoVariables {
  token: string;
}
