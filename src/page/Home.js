import { React, useRef, useEffect, useState } from "react";
import ApiMovie from "../ApiMovie";
import Movie from "../Movie";
import ApiCategories from "../ApiCategories";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Header from "../Header";

const Home = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data: movieCategories, isLoading, error } = ApiMovie();

  if (isLoading)
    return (
      <button className="btn">
        <span className="loading loading-spinner">Loading...</span>
      </button>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Header />
      <main>
        <ApiCategories />
        {movieCategories.map((category) => (
          <section key={category.slug} className="my-8">
            <h2 className="font-semibold text-xl">{category.title}</h2>
            <motion.div
              ref={carousel}
              className="mt-2 w-full flex cursor-grab overflow-hidden relative"
              // whileTap={{ cursor: "grabbing" }}
            >
              <motion.ul
                drag="x"
                // dragConstraints={{ right: 0 }}
                dragConstraints={{ right: 0, left: -width }}
                className="flex"
              >
                {category.items.map((movie) => (
                  <Movie key={movie.id} movie={movie} category={category} />
                ))}
              </motion.ul>
            </motion.div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Home;
