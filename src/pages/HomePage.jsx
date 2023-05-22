import "./homePage.scss";
import { getPopularMovies, getGenres } from "../utils/api";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    getPopularMovies().then((res) => {
      setPopularMovies(res);
      getGenres().then((res) => setGenres(res));
    });
  }, []);

  useEffect(() => {
    if (popularMovies && genres) {
      parseGenres();
    }
  }, [genres]);

  const parseGenres = () => {
    let newMoviesObj = {};
    if (genres && popularMovies) {
      newMoviesObj = popularMovies.map((item) => {
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

  const filterdMovies = parseGenres();

  return (
    <MoviesList
      movies={Object.keys(filterdMovies).length === 0 ? null : filterdMovies}
    />
  );
};

export default HomePage;
