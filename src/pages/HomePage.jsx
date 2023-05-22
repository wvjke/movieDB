import "./homePage.scss";
import getPopularMovies from "../utils/api";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    getPopularMovies().then((res) => setPopularMovies(res));
  }, []);

  return <MoviesList movies={popularMovies} />;
};

export default HomePage;
