import React from "react";
import { useQuery } from "@tanstack/react-query";
import Category from "./Category";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchCategories = async ({ queryKey }) => {
  const [, endpoint] = queryKey;

  const res = await fetch(
    `${API_URL}${endpoint}?language=en-US&api_key=${API_KEY}`
  );

  const categoriesData = await res.json();
  console.log(categoriesData);
  return categoriesData.genres;
};

const ApiCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories", "genre/movie/list"],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!categories || !Array.isArray(categories)) {
    return <div>No categories found.</div>;
  }

  return (
    <div>
      <h2>Categories List</h2>
      <ul>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default ApiCategories;
