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

export default {
  getHomeMovies: async () => {
    return [
      {
        slug: "popular",
        title: "Popular Movies",
        items: await fetchMovies("movie/popular"),
      },
      {
        slug: "top-rated",
        title: "Top-rated Movies",
        items: await fetchMovies("movie/top_rated"),
      },
      {
        slug: "upcoming",
        title: "Upcoming Movies",
        items: await fetchMovies("movie/upcoming"),
      },
      {
        slug: "popular series",
        title: "Popular TV shows",
        items: await fetchMovies("tv/popular"),
      },
      {
        slug: "on-the-air",
        title: "On the air series",
        items: await fetchMovies("tv/on_the_air"),
      },
      {
        slug: "top-rated TV series",
        title: "Top-rated series",
        items: await fetchMovies("tv/top_rated"),
      },
    ];
  },
};

const ApiMovie = () => {
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
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

// export default ApiMovie;
