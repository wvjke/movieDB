/* eslint-disable react/prop-types */
import Stars from "../../layouts/Stars";
import Actors from "../../layouts/Actors";
import "./movieDescription.scss";
import { CircularProgress } from "@mui/material";

const MovieDescription = ({
  title,
  year,
  genres,
  runtime,
  rate,
  tagline,
  overview,
  credits,
}) => {
  return (
    <div className="movie_descr">
      <h2 className="movie_descr_title">
        {title} ({year.slice(0, 4)})
      </h2>
      <ul className="movie_descr_subtitle">
        <li>{year.split("-").reverse().join("/")}</li>
        <li>
          {genres
            .map((item) => {
              return item;
            })
            .join(", ")}
        </li>
        <li>
          {Math.round(runtime / 60)}h {runtime % 60}m
        </li>
      </ul>
      <div className="movie_descr_vote">
        <div className="movie_descr_vote_rate">
          <CircularProgress
            value={100}
            variant="determinate"
            size={"65px"}
            thickness={5}
            color="inherit"
            className="movie_descr_vote_rate_fullCircle"
          />
          <CircularProgress
            value={rate * 10}
            variant="determinate"
            className="movie_descr_vote_rate_circle"
            size={"65px"}
            thickness={5}
          />
          <div className="movie_descr_vote_rate_number">{rate} / 10</div>
        </div>
        <div className="movie_descr_vote_stars">
          <div>&nbsp;User Score</div>
          <div>
            <Stars vote={rate} />
          </div>
        </div>
      </div>
      <div className="movie_descr_tagline">{tagline}</div>
      <div className="movie_descr_overview">
        <h2 className="movie_descr_overview_title">Overview</h2>
        <p className="movie_descr_overview_text">{overview}</p>
      </div>
      <div className="movie_descr_credits">
        <Actors credits={credits} />
      </div>
    </div>
  );
};

export default MovieDescription;
