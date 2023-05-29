import { genres } from "./genres";
export const parseGenres = (list) => {
  let newMoviesObj = {};
  if (list) {
    newMoviesObj = list.map((item) => {
      const genresArray = [];
      for (let i = 0; i < item.genre_ids.length; i++) {
        for (let j = 0; j < 19; j++) {
          if (item.genre_ids[i] == genres[j].id) {
            genresArray.push({ id: genres[j].id, name: genres[j].name });
          }
        }
      }
      return { ...item, genres: genresArray };
    });
  }
  return newMoviesObj;
};
