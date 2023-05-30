/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import "./moviesList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useState } from "react";
import Arrows from "../layouts/Arrows";
const MoviesList = ({ movies }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="list">
      {movies ? (
        <>
          <Arrows swiper={swiper} />
          <Swiper
            className="swiper-container"
            speed={1440}
            spaceBetween={10}
            slidesPerView={3}
            lazyPreloadPrevNext={1}
            onSwiper={(s) => setSwiper(s)}
          >
            {movies.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <MovieCard
                    id={item.id}
                    imageUrl={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w400${item.poster_path}`
                        : null
                    }
                    title={item.title}
                    year={item.release_date.slice(0, 4)}
                    vote={Math.round(item.vote_average)}
                    genres={item.genres}
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
