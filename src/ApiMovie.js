import { useQuery } from "@tanstack/react-query";
import Movie from "./Movie";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async ({ queryKey }) => {
  const [, endpoint] = queryKey;

  const res = await fetch(
    `${API_URL}${endpoint}?language=en-US&api_key=${API_KEY}`
  );

  const data = await res.json();
  console.log(data);
  return data.results;
};

const fetchCategories = async ({ queryKey }) => {
  const [, endpoint] = queryKey;

  const res = await fetch(
    `${API_URL}${endpoint}?language=en-US&api_key=${API_KEY}`
  );

  const categoriesData = await res.json();
  console.log(categoriesData);
  return categoriesData.genres;
};

export const ApiCategories = () => {
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
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const ApiMovie = () => {
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", "movie/popular"],
    queryFn: fetchMovies,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies || !Array.isArray(movies)) {
    return <div>No movies found.</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};
