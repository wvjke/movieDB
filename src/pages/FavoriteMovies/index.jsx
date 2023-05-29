import { useContext, useEffect, useState } from "react";
import Header from "../../layouts/Header";
import { getMovie } from "../../utils/api";
import { Link } from "react-router-dom";
import MoviesList from "../../components/MoviesList";
import { LinearProgress } from "@mui/material";
import "./favoriteMovies.scss";
import FavoriteMoviesContext from "../../context/FavoriteMoviesContext";

const FavoriteMovies = () => {
  const { favMovies } = useContext(FavoriteMoviesContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([]);
    if (favMovies) {
      const lstMoviesArray = favMovies.split(",").reverse();
      for (let i = 0; i < lstMoviesArray.length; i++) {
        getMovie(+lstMoviesArray[i]).then((res) =>
          setMovies((state) => [...state, res])
        );
      }
    }
  }, [favMovies]);

  return (
    <>
      <Header>Favorite Movies</Header>
      <Link to="/">
        <button className="btn_back fav">Back</button>
      </Link>
      {favMovies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <LinearProgress />
      )}
    </>
  );
};

export default FavoriteMovies;
