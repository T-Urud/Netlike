import React from "react";

const Movie = ({ movie }) => {
  return (
    <li>
      <p>{movie.title}</p>
      <img src={movie.backdrop_path} alt="" width={100} height={100} />
      <p>{movie.vote_average}</p>
      <p>{movie.genres_name}</p>
    </li>
  );
};

export default Movie;
