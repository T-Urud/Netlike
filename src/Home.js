import React from "react";
import ApiMovie from "./ApiMovie";
import Movie from "./Movie";

const Home = () => {
  const { data: movieCategories, isLoading, error } = ApiMovie();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        {movieCategories.map((category) => (
          <div key={category.slug}>
            <h2>{category.title}</h2>
            <div className="">
              {category.items.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
