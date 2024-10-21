import { useQuery } from "@tanstack/react-query";

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

const ApiMovie = () => {
  return useQuery({
    queryKey: ["movies", "home"],
    queryFn: async () => {
      const popularMovies = await fetchMovies({
        queryKey: ["movies", "movie/popular"],
      });
      const topratedMovies = await fetchMovies({
        queryKey: ["movies", "movie/top_rated"],
      });
      const upcomingMovies = await fetchMovies({
        queryKey: ["movies", "movie/upcoming"],
      });
      const popularSeries = await fetchMovies({
        queryKey: ["movies", "tv/popular"],
      });
      const ontheairSeries = await fetchMovies({
        queryKey: ["movies", "tv/on_the_air"],
      });
      const topratedSeries = await fetchMovies({
        queryKey: ["movies", "tv/top_rated"],
      });
      // const horrorMovies = await fetchMovies({
      //   queryKey: ["movies", "discover/movie?with_genres=27"],
      // });
      // const actionMovies = await fetchMovies({
      //   queryKey: ["movies", "movie?with_genres=28"],
      // });
      // const adventureMovies = await fetchMovies({
      //   queryKey: ["movies", "movie?with_genres=12"],
      // });
      // const comedyMovies = await fetchMovies({
      //   queryKey: ["movies", "movie?with_genres=35"],
      // });
      // const animationMovies = await fetchMovies({
      //   queryKey: ["movies", "movie?with_genres=16"],
      // });
      // const sfMovies = await fetchMovies({
      //   queryKey: ["movies", "movie?with_genres=878"],
      // });
      // const westernMovies = await fetchMovies({
      //   queryKey: ["movies", "movie?with_genres=37"],
      // });

      return [
        {
          slug: "popular",
          title: "Popular Movies",
          items: popularMovies,
        },
        {
          slug: "top-rated",
          title: "Top-rated Movies",
          items: topratedMovies,
        },
        {
          slug: "upcoming",
          title: "Upcoming Movies",
          items: upcomingMovies,
        },
        {
          slug: "popular series",
          title: "Popular TV shows",
          items: popularSeries,
        },
        {
          slug: "on-the-air",
          title: "On the air series",
          items: ontheairSeries,
        },
        {
          slug: "top-rated TV series",
          title: "Top-rated series",
          items: topratedSeries,
        },
        // {
        //   slug: "horror",
        //   title: "Horror",
        //   items: horrorMovies,
        // },
        // {
        //   slug: "action",
        //   title: "Action",
        //   items: actionMovies,
        // },
        // {
        //   slug: "adventure",
        //   title: "Adventure",
        //   items: adventureMovies,
        // },
        // {
        //   slug: "comedy",
        //   title: "Comedy",
        //   items: comedyMovies,
        // },
        // {
        //   slug: "animation",
        //   title: "Animation",
        //   items: animationMovies,
        // },
        // {
        //   slug: "science fiction",
        //   title: "Science fiction",
        //   items: sfMovies,
        // },
        // {
        //   slug: "western",
        //   title: "Western",
        //   items: westernMovies,
        // },
      ];
    },
  });
};

export default ApiMovie;
