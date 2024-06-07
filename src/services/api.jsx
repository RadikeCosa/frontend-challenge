import axios from "axios";

// Configuración de la API
const API = {
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
  getReleaseYears: "/peliculas/anos",
};

// Función auxiliar para realizar solicitudes HTTP
const apiRequest = async (method, url, data = null) => {
  try {
    const response = await axios({
      method: method,
      url: `${API.baseURL}${url}`,
      data: data,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error in API request to ${url}:`, error.response.data);
      throw new Error(
        `API responded with status ${error.response.status}: ${error.response.data}`
      );
    } else if (error.request) {
      console.error(
        `No response received from API request to ${url}:`,
        error.request
      );
      throw new Error("No response received from API");
    } else {
      console.error("Error setting up API request:", error.message);
      throw new Error(`Error setting up API request: ${error.message}`);
    }
  }
};

// Funciones de la API
export const registerVote = (userId, movieId, rating) => {
  return apiRequest("post", API.vote, {
    user_id: userId,
    movie_id: movieId,
    rating: rating,
  });
};

export const updateVote = (userId, movieId, rating) => {
  return apiRequest("put", API.vote, {
    user_id: userId,
    movie_id: movieId,
    rating: rating,
  });
};

export const checkVote = (userId, movieId) => {
  return apiRequest("get", API.checkVote(userId, movieId));
};

export const getGenres = () => {
  return apiRequest("get", API.genres);
};

export const getGenreAnalysis = (genre) => {
  return apiRequest("get", API.genreAnalysis(genre));
};

export const fetchByGenre = (genre) => {
  return apiRequest("get", API.movies.byGenre(genre));
};

export const fetchByName = (name) => {
  return apiRequest("get", API.movies.byName(name));
};

export const fetchByScore = (score) => {
  return apiRequest("get", API.movies.byScore(score));
};

export const fetchByYear = (year) => {
  return apiRequest("get", API.movies.byYear(year));
};

export const fetchYears = () => {
  return apiRequest("get", API.getReleaseYears);
};

// Probar la función getGenres
getGenres()
  .then((genres) => {
    console.log("Genres:", genres);
  })
  .catch((error) => {
    console.error("Failed to fetch genres:", error);
  });
