import { useParams } from "react-router-dom";
import { getMovie, getCredits } from "../../utils/api";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import MovieDescription from "../../components/MovieDescription";
import { Link } from "react-router-dom";
import "./moviePage.scss";
import { getRecommendations, getSimilar } from "../../utils/api";
import Header from "../../layouts/Header";
import MoviesList from "../../components/MoviesList";
import { parseGenres } from "../../utils/parseGenres";
const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getMovie(+id).then((res) => setMovie(res));
    getCredits(+id).then((res) => setCredits(res));
    getRecommendations(+id).then((res) => setRecommendedMovies(res));
    getSimilar(+id).then((res) => setSimilarMovies(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const parsedRecommendedMovies = parseGenres(recommendedMovies);
  const parsedSimilarMovies = parseGenres(similarMovies);

  return movie && credits ? (
    <>
      <Header>Movie Info</Header>
      <Link to="/">
        <button className="btn_back">Back</button>
      </Link>
      <div className="movie_info">
        <img
          className="movie_info_img"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : null
          }
        />
        <MovieDescription
          title={movie.title}
          year={movie.release_date}
          genres={movie.genres.map((item) => item.name)}
          runtime={movie.runtime}
          rate={Math.round(movie.vote_average)}
          tagline={movie.tagline}
          overview={movie.overview}
          credits={credits.cast}
        />
      </div>
      <div className="recommended_movies">
        <Header className="recommended_movies_header">Recommendations</Header>
        {Object.keys(parsedRecommendedMovies).length === 0 ? (
          <LinearProgress />
        ) : (
          <MoviesList movies={parsedRecommendedMovies} />
        )}
      </div>
      <div className="similar_movies">
        <Header className="similar_movies_header">Similar</Header>
        {Object.keys(parsedSimilarMovies).length === 0 ? (
          <LinearProgress />
        ) : (
          <MoviesList movies={parsedSimilarMovies} />
        )}
      </div>
    </>
  ) : (
    <LinearProgress />
  );
};

export default MoviePage;
