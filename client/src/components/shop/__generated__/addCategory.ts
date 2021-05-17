/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addCategory
// ====================================================

export interface addCategory_addCategory {
  __typename: "Category";
  category: string;
  icon: string;
}

export interface addCategory {
  addCategory: addCategory_addCategory;
}

export interface addCategoryVariables {
  categoryInput: CategoryInput;
}
