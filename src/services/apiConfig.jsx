export const API = {
  baseURL: "http://localhost:3000/api",
  vote: "/voto",
  checkVote: (userId, movieId) => `/checkvote/${userId}/${movieId}`,
  genres: "/getgenres",
  genreAnalysis: (genre) => `/peliculas/analisisvotosyrating/${genre}`,
  movies: {
    byGenre: (genre) => `/peliculas/genre/${genre}`,
    byName: (name) => `/peliculas/name/${name}`,
    byScore: (score) => `/peliculas/rating/${score}`,
    byYear: (year) => `/peliculas/ano/${year}`,
  },
};
