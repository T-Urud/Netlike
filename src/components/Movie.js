import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
const Movie = ({ movie, category }) => {
  const [isHover, setIsHover] = useState("false");
  // const rate = Math.round((Number(movie.vote_average) / 2) * 2) / 2;

  return (
    <motion.li
      className="relative mr-6"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <motion.div className="w-[500px] h-[281px] rounded-2xl">
        <img
          src={`${imageBaseUrl}${movie.backdrop_path}`}
          alt={`${movie.title} poster`}
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>
      <div className="absolute bottom-0 w-full py-2 px-6 bg-[#a6adbb00] rounded-b-2xl">
        <div className="flex justify-between items-baseline text-white">
          <p className="text-xl font-semibold">{movie.title || movie.name}</p>
          <p className="cursor-pointer text-sm">See More</p>
        </div>
      </div>
    </motion.li>
  );
};

export default Movie;
