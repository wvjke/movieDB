import { HomePage, MoviePage, FavoriteMovies } from "./pages";
import { Routes, Route } from "react-router-dom";
import FavoriteMoviesContext from "./context/FavoriteMoviesContext";
import { useState } from "react";
const App = () => {
  const [favMovies, setFavMovies] = useState(localStorage.getItem("favorites"));

  const updateFavMovies = (id) => {
    let favMoviesArray = favMovies ? favMovies.split(",") : [];
    if (favMoviesArray.includes(String(id))) {
      favMoviesArray = favMoviesArray.filter((item) => item !== String(id));
      localStorage.setItem("favorites", favMoviesArray.join(","));
      setFavMovies(localStorage.getItem("favorites"));
    } else {
      favMoviesArray.push(`${id}`);
      localStorage.setItem("favorites", favMoviesArray.join(","));
      setFavMovies(localStorage.getItem("favorites"));
    }
  };

  return (
    <FavoriteMoviesContext.Provider value={{ favMovies, updateFavMovies }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </FavoriteMoviesContext.Provider>
  );
};

export default App;
