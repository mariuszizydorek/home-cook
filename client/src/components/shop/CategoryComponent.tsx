import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { getCategory_categories } from "./__generated__/getCategory";
import { addCategory_addCategory } from "./__generated__/addCategory";
import { Button, TextField } from "@material-ui/core";

const GET_CATEGORIES = gql`
  query getCategory {
    categories {
      category
      icon
    }
  }
`;
const ADD_CATEGORY = gql`
  mutation addCategory($categoryInput: CategoryInput!) {
    addCategory(categoryInput: $categoryInput) {
      category
      icon
    }
  }
`;

export function CategoryContainer({}: any) {
  let { loading, error, data, refetch } = useQuery(GET_CATEGORIES, {
    variables: {},
  });

  const [add, { data: dataCategory }] = useMutation(ADD_CATEGORY, {
    onCompleted(d) {
      if (d) {
        data = refetch();
      }
    },
    onError(error) {
      debugger;
    },
  });

  if (loading) return <span>Loading</span>;

  const handleAddCategory = (category: any) => {
    console.log(category);
    add({
      variables: {
        categoryInput: {
          ...category,
        },
      },
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <AddCategory add={handleAddCategory} />
      <CategoryList categories={data?.categories} />;
    </>
  );
}

interface CategoryListParams {
  categories: getCategory_categories[];
}

export function CategoryList({ categories }: CategoryListParams) {
  console.log(categories);
  return (
    <ul>
      {categories?.map((cat) => (
        <li>
          <span>{cat.category}</span>
          <span>.....</span>
          <span>{cat.icon}</span>
        </li>
      ))}
    </ul>
  );
}

export function AddCategory(params: { add: any }) {
  const [category, setCategory] = useState({ category: "", icon: "" });

  const updateProps = ({ target }: any) => {
    console.log(target);
    const value = target?.value;
    setCategory({
      ...category,
      [target.id]: value,
    });
  };

  return (
    <div>
      <TextField label="Category" id="category" onChange={updateProps} />
      <TextField label="Icon" id="icon" onChange={updateProps} />
      <Button onClick={() => params.add(category as addCategory_addCategory)}>
        Add
      </Button>
    </div>
  );
}
