import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Movie = ({ movie, category }) => {
  const rate = Math.round((Number(movie.vote_average) / 2) * 2) / 2;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <li>
      <div className="w-[500px] h-[281px] rounded-2xl pr-6">
        <img
          src={`${imageBaseUrl}${movie.backdrop_path}`}
          alt={`${movie.title} poster`}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      {/* <div className="absolute bottom-0 w-full p-2 bg-[#a6adbb] rounded-2xl">
        <div className="flex justify-between items-center ">
          <p className="text-xl font-semibold text-black">{movie.title}</p>
          <div className="flex items-center justify-center p-1 opacity-80">
            <span className={rate > 0 ? "text-black" : "text-white"}>
              &#9733;
            </span>
            <span className={rate > 1 ? "text-black" : "text-white"}>
              &#9733;
            </span>
            <span className={rate > 2 ? "text-black" : "text-white"}>
              &#9733;
            </span>
            <span className={rate > 3 ? "text-black" : "text-white"}>
              &#9733;
            </span>
            <span className={rate > 4 ? "text-black" : "text-white"}>
              &#9733;
            </span>
          </div>
        </div>
        <p>{category.name}</p>
      </div> */}
    </li>
  );
};

export default Movie;
