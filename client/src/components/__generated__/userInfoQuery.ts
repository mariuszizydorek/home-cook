/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userInfoQuery
// ====================================================

export interface userInfoQuery_userInfo {
  __typename: "UserInfo";
  userName: string;
  firstName: string;
  lastName: string;
  loggedIn: boolean;
}

export interface userInfoQuery {
  userInfo: userInfoQuery_userInfo;
}
