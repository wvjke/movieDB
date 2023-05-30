/* eslint-disable react/prop-types */
import "./index.scss";
import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton";
import Stars from "../../layouts/Stars";

const MovieCard = ({ id, title, year, vote, imageUrl, genres }) => {
  const genresView = () => {
    if (genres.length === 0) {
      return "No genres data";
    } else if (genres.length > 0 && genres.length < 2) {
      return genres[0].name;
    }
    return `${genres[0].name} / ${genres[1].name}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="card swiper-lazy swiper-lazy-loading">
      <div className="card_img">
        <Link
          className="card_descr_link"
          to={`/movie/${id}`}
          onClick={scrollToTop}
        >
          <img src={imageUrl || "noImg.png"} alt="" loading="lazy" />
        </Link>
      </div>
      <div className="card_descr">
        <h2 className="card_descr_title">
          {title.length < 35 ? title : `${title.slice(0, 35)}...`}
        </h2>
        <ul className="card_descr_details">
          <li>{year}</li>
          <li>{genresView()}</li>
        </ul>
        <div className="card_descr_stars">
          <Stars vote={Math.round(vote)} />
        </div>
        <Link
          className="card_descr_link"
          to={`/movie/${id}`}
          onClick={scrollToTop}
        >
          Read more
        </Link>
        <FavoriteButton id={id} />
      </div>
    </article>
  );
};

export default MovieCard;
