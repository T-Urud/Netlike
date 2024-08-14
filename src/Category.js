import React from "react";
import ApiCategories from "./ApiCategories";

const handleBtnClick = (category) => {
  console.log(category.name);

  // const filteredCategories = categories.filter(
  //   (uniqueCategory) => uniqueCategory.categoryId.toString() === categoryId
  // );
};

const Category = ({ category }) => {
  return (
    <li key={category.id}>
      <button onClick={() => handleBtnClick(category)}>{category.name}</button>
    </li>
  );
};

export default Category;
