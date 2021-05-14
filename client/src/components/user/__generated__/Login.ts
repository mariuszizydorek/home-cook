/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login {
  __typename: "UserToken";
  userName: string;
  authToken: string;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  loginInput: LoginInput;
}
