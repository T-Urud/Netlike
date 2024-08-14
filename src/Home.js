import React from "react";
import ApiMovie from "./ApiMovie";
import Movie from "./Movie";
import ApiCategories from "./ApiCategories";

const Home = () => {
  const { data: movieCategories, isLoading, error } = ApiMovie();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ApiCategories />
      {movieCategories.map((category) => (
        <div key={category.slug}>
          <h2>{category.title}</h2>
          <ul className="movies-container">
            {category.items.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
