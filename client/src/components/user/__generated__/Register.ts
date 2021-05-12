/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AuthenticationInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  __typename: "UserInfo";
  userName: string;
  firstName: string;
  lastName: string;
}

export interface Register {
  register: Register_register;
}

export interface RegisterVariables {
  authentication: AuthenticationInput;
}
