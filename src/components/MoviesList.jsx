/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import "./moviesList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Arrows from "../layouts/Arrows";
import { Skeleton, Stack } from "@mui/material";
const MoviesList = ({ movies }) => {
  const [swiper, setSwiper] = useState(null);

  console.log(movies);

  return (
    <section className="list">
      {movies ? (
        <>
          <Arrows swiper={swiper} />
          <Swiper
            speed={1440}
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(s) => setSwiper(s)}
            onSlideChange={() => {}}
          >
            {movies.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <MovieCard
                    imageUrl={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    title={item.title}
                    year={item.release_date.slice(0, 4)}
                    vote={Math.round(item.vote_average)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : null}
    </section>
  );
};

export default MoviesList;
