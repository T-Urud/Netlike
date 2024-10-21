import { React, useRef, useEffect, useState } from "react";
import ApiMovie from "../api/ApiMovie";
import Movie from "../components/Movie";
import ApiCategories from "../api/ApiCategories";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import rightChevronSvg from "../svg/chevron-right.svg";
import leftChevronSvg from "../svg/chevron-left.svg";
import Carousel from "../components/Carousel";

const Home = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const carousel = useRef(null);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const updateScrollWidth = () => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);

      // Check if content can scroll left or right
      setCanScrollLeft(carousel.current.scrollLeft > 0);
      setCanScrollRight(
        carousel.current.scrollLeft < scrollWidth - offsetWidth
      );
    }
  };

  useEffect(() => {
    updateScrollWidth();
    window.addEventListener("resize", updateScrollWidth);

    return () => {
      window.removeEventListener("resize", updateScrollWidth);
    };
  }, []);

  const handleScroll = (direction) => {
    if (carousel.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carousel.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
        <Carousel />
        {movieCategories.map((category) => (
          <section key={category.slug} className="my-8">
            <h2 className="font-semibold text-xl">{category.title}</h2>
            <motion.div
              ref={carousel}
              className="mt-2 w-full flex cursor-grab overflow-hidden relative"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.ul
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="flex"
              >
                {category.items.map((movie) => (
                  <Movie key={movie.id} movie={movie} category={category} />
                ))}
              </motion.ul>
              {canScrollRight && (
                <div className="absolute z-20 right-0 bottom-1/2 translate-y-1/2">
                  <button onScroll={() => handleScroll("right")}>
                    <img src={rightChevronSvg} alt="" className="w-9 h-9" />
                  </button>
                </div>
              )}
              {canScrollLeft && (
                <div className="absolute z-20 left-0 bottom-1/2 translate-y-1/2">
                  <button onScroll={() => handleScroll("left")}>
                    <img src={leftChevronSvg} alt="" className="w-9 h-9" />
                  </button>
                </div>
              )}
            </motion.div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Home;
