import React, { useState } from "react";
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
  const [isClicked, setIsClicked] = useState(false);

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
    <section className="max-w-[375px]">
      <div className="flex justify-between items-baseline gap-4 font-semibold">
        <h2>Categories</h2>
        <span
          className="text-xs cursor-pointer"
          onClick={() => setIsClicked(true)}
        >
          View All
        </span>
      </div>
      <ul
        className={`flex justify-start gap-1 max-w-[375px] my-2 ${
          isClicked ? "overflow-auto" : "overflow-hidden"
        }`}
      >
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ul>
    </section>
  );
};

export default ApiCategories;
