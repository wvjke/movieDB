import axios from "axios";

export const getPopularMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTNkODc0MjkxY2YyMzZjNTVjZDVmZjU4YjkyYTI2MyIsInN1YiI6IjY0NmEzOWMyYzM1MTRjMDEzYTU2MmQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gxgcI06TN8ycJ-CodHonyfTRzZPv399lJby05LLpzFc",
    },
  };

  const { data } = await axios.request(options);
  return await data.results;
};

export const getGenres = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list",
    params: { language: "en" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTNkODc0MjkxY2YyMzZjNTVjZDVmZjU4YjkyYTI2MyIsInN1YiI6IjY0NmEzOWMyYzM1MTRjMDEzYTU2MmQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gxgcI06TN8ycJ-CodHonyfTRzZPv399lJby05LLpzFc",
    },
  };

  const { data } = await axios.request(options);
  return await data.genres;
};
