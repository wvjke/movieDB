/* eslint-disable react/prop-types */
import "./index.scss";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Stars from "../../layouts/Stars";
import FavoriteMoviesContext from "../../context/FavoriteMoviesContext";

const MovieCard = ({ id, title, year, vote, imageUrl, genres }) => {
  const [color, setColor] = useState("primary");

  const { updateFavMovies } = useContext(FavoriteMoviesContext);

  const genresView = () => {
    if (genres.length === 0) {
      return "No genres data";
    } else if (genres.length > 0 && genres.length < 2) {
      return genres[0].name;
    }
    return `${genres[0].name} / ${genres[1].name}`;
  };

  const onFavoriteClicked = () => {
    const swiper = document.querySelector(".swiper");
    swiper.classList.remove("swiper-show");
    swiper.classList.add("swiper-hide");
    setTimeout(() => {
      updateFavMovies(id);
      swiper.classList.remove("swiper-hide");
      swiper.classList.add("swiper-show");
    }, 300);
  };

  const isFavorite = () => {
    const favoriteMoviesArray = localStorage.getItem("favorites")
      ? localStorage.getItem("favorites").split(",")
      : [];
    return favoriteMoviesArray.includes(id.toString());
  };

  return (
    <article className="card swiper-lazy swiper-lazy-loading">
      <div className="card_img">
        <img src={imageUrl || "noImg.png"} alt="" loading="lazy" />
      </div>
      <div className="card_descr">
        <h2 className="card_descr_title">
          {title.length < 45 ? title : `${title.slice(0, 45)}...`}
        </h2>
        <ul className="card_descr_details">
          <li>{year}</li>
          <li>{genresView()}</li>
        </ul>
        <div className="card_descr_stars">
          <Stars vote={Math.round(vote)} />
        </div>
        <Link className="card_descr_link" to={`/movie/${id}`}>
          Read more
        </Link>
        <div
          onClick={onFavoriteClicked}
          className="card_descr_favorite"
          onMouseEnter={() => setColor("secondary")}
          onMouseLeave={() => setColor("primary")}
        >
          {isFavorite() ? (
            <>
              <BookmarkRemoveIcon
                className="card_descr_favorite_icon"
                color={color}
              />
              <span>REMOVE FROM FAVORITE</span>
            </>
          ) : (
            <>
              <BookmarkAddIcon
                className="card_descr_favorite_icon"
                color={color}
              />
              <span>ADD TO FAVORITE</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
