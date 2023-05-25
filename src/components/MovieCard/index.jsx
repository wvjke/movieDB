/* eslint-disable react/prop-types */
import "./index.scss";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";
import { useState } from "react";
import Stars from "../../layouts/Stars";
const MovieCard = ({ id, title, year, vote, imageUrl, genres }) => {
  const [color, setColor] = useState("primary");

  return (
    <article className="card swiper-lazy swiper-lazy-loading">
      <div className="card_img">
        <img src={imageUrl || "noImg.png"} alt="" loading="lazy" />
      </div>
      <div className="card_descr">
        <h2 className="card_descr_title">{title}</h2>
        <ul className="card_descr_details">
          <li>{year}</li>
          <li>{`${genres[0]} / ${genres[1]}`}</li>
        </ul>
        <div className="card_descr_stars">
          <Stars vote={Math.round(vote)} />
        </div>
        <Link className="card_descr_link" to={`/movie/${id}`}>
          Read more
        </Link>
        <div
          className="card_descr_favorite"
          onMouseEnter={() => setColor("secondary")}
          onMouseLeave={() => setColor("primary")}
        >
          <BookmarkAddIcon className="card_descr_favorite_icon" color={color} />
          <span>ADD TO FAVORITE</span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
