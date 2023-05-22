/* eslint-disable react/prop-types */
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import "./index.scss";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";
import { useState } from "react";

const MovieCard = ({ title, year, vote, imageUrl, genres }) => {
  const [color, setColor] = useState("primary");

  const starsCount = () => {
    const view = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= vote) {
        view.push(<StarIcon color="primary" key={i} />);
      } else {
        view.push(<StarBorderOutlinedIcon key={i} />);
      }
    }
    return view;
  };

  return (
    <article className="card">
      <div className="card_img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card_descr">
        <h2 className="card_descr_title">{title}</h2>
        <ul className="card_descr_details">
          <li>{year}</li>
          <li>{`${genres[0]} / ${genres[1]}`}</li>
        </ul>
        <div className="card_descr_stars">{starsCount()}</div>
        <Link className="card_descr_link" to="/">
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
