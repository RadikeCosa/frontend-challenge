import { API } from "./apiConfig";
import { apiRequest } from "./apiUtils";

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

export const fetchByGenre = async (genre) => {
  return apiRequest("get", API.movies.byGenre(genre));
};

export const fetchByName = async (name) => {
  return apiRequest("get", API.movies.byName(name));
};

export const fetchByScore = async (score) => {
  return apiRequest("get", API.movies.byScore(score));
};

export const fetchByYear = async (year) => {
  return apiRequest("get", API.movies.byYear(year));
};

export const fetchYears = async () => {
  return apiRequest("get", API.getReleaseYears);
};
