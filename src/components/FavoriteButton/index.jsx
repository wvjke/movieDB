/* eslint-disable react/prop-types */
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { useContext, useState } from "react";
import FavoriteMoviesContext from "../../context/FavoriteMoviesContext";

const FavoriteButton = ({ id }) => {
  const [color, setColor] = useState("primary");

  const { updateFavMovies } = useContext(FavoriteMoviesContext);

  const onFavoriteClicked = (e) => {
    const swiper = e.target.closest(".swiper");
    if (swiper) {
      swiper.classList.remove("swiper-show");
      swiper.classList.add("swiper-hide");
    }
    setTimeout(() => {
      updateFavMovies(id);
      if (swiper) {
        swiper.classList.remove("swiper-hide");
        swiper.classList.add("swiper-show");
      }
    }, 300);
  };

  const isFavorite = () => {
    const favoriteMoviesArray = localStorage.getItem("favorites")
      ? localStorage.getItem("favorites").split(",")
      : [];
    return favoriteMoviesArray.includes(id.toString());
  };

  return (
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
          <BookmarkAddIcon className="card_descr_favorite_icon" color={color} />
          <span>ADD TO FAVORITE</span>
        </>
      )}
    </div>
  );
};

export default FavoriteButton;
