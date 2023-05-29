import { useParams } from "react-router-dom";
import { getMovie, getCredits } from "../../utils/api";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import MovieDescription from "../../components/MovieDescription";
import { Link } from "react-router-dom";
import "./moviePage.scss";
import Header from "../../layouts/Header";
const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getMovie(+id).then((res) => setMovie(res));
    getCredits(+id).then((res) => setCredits(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    </>
  ) : (
    <LinearProgress />
  );
};

export default MoviePage;
