import React from "react";

const handleBtnClick = (category) => {
  console.log(category.name);

  // const filteredCategories = categories.filter(
  //   (uniqueCategory) => uniqueCategory.categoryId.toString() === categoryId
  // );
};

const Category = ({ category }) => {
  return (
    <li key={category.id} className="">
      <button className="btn" onClick={() => handleBtnClick(category)}>
        {category.name}
      </button>
    </li>
  );
};

export default Category;
