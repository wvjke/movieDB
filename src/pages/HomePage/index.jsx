import "./homePage.scss";
import { getPopularMovies, findMovie } from "../../utils/api";
import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList";
import SearchPanel from "../../components/SearchPanel";
import Nothing from "../../layouts/Nothing";
import Header from "../../layouts/Header";
import { Link } from "react-router-dom";
import { parseGenres } from "../../utils/parseGenres";
const HomePage = () => {
  const [movies, setMovies] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getPopularMovies().then((res) => {
      setMovies(res);
    });
  }, []);

  useEffect(() => {
    console.log(searchValue);
    if (searchValue !== "") {
      findMovie(searchValue).then((res) => {
        setMovies(res);
      });
    } else {
      getPopularMovies().then((res) => {
        setMovies(res);
      });
    }
  }, [searchValue]);

  const parsedMovies = parseGenres(movies);

  return (
    <>
      <Header>Movie DB</Header>
      <nav className="nav_panel">
        <SearchPanel value={(value) => setSearchValue(value)} />
        <Link to="/favorites">
          <button className="btn_back">Favorite Movies</button>
        </Link>
      </nav>
      {Object.keys(parsedMovies).length === 0 ? (
        <Nothing />
      ) : (
        <MoviesList movies={parsedMovies} />
      )}
    </>
  );
};

export default HomePage;
