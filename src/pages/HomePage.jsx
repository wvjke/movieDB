import "./homePage.scss";
import { getPopularMovies, findMovie } from "../utils/api";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { genres } from "../utils/genres";
import SearchPanel from "../components/SearchPanel";
const HomePage = () => {
  const [movies, setMovies] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getPopularMovies().then((res) => {
      setMovies(res);
    });
  }, []);

  useEffect(() => {
    if (searchValue !== "") {
      findMovie(searchValue).then((res) => {
        setMovies(res);
      });
    }
  }, [searchValue]);

  const parseGenres = (list) => {
    let newMoviesObj = {};
    if (list) {
      newMoviesObj = list.map((item) => {
        const genresArray = [];
        for (let i = 0; i < item.genre_ids.length; i++) {
          for (let j = 0; j < 19; j++) {
            if (item.genre_ids[i] == genres[j].id) {
              genresArray.push(genres[j].name + " ");
            }
          }
        }
        return { ...item, genres: genresArray };
      });
    }
    return newMoviesObj;
  };

  const filterdMovies = parseGenres(movies);

  return (
    <>
      <SearchPanel value={(value) => setSearchValue(value)} />
      <MoviesList
        movies={Object.keys(filterdMovies).length === 0 ? null : filterdMovies}
      />
    </>
  );
};

export default HomePage;
