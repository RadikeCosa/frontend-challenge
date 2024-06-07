import { apiRequest } from "./apiUtils";
import { API } from "./apiConfig";

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
