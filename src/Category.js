import React from "react";

const handleBtnClick = (category) => {
  console.log(category.name);

  // const filteredCategories = categories.filter(
  //   (category) => category.categoryId.toString() === categoryId
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
