import axios from "axios";

// Configuración de la API
const API = {
  baseURL: "http://localhost:3000/api",
  genreAnalysis: (genre) => `/peliculas/analisisvotosyrating/${genre}`,
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

export const registerVote = (userId, movieId, rating) => {
  return axios.post(`http://localhost:3000/api/voto`, {
    user_id: userId,
    movie_id: movieId,
    rating: rating,
  });
};

export const updateVote = (userId, movieId, rating) => {
  return axios.put(`http://localhost:3000/api/voto`, {
    user_id: userId,
    movie_id: movieId,
    rating: rating,
  });
};

export const checkVote = (userId, movieId) => {
  return axios.get(`http://localhost:3000/api/checkvote/${userId}/${movieId}`);
};

export const getGenres = () => {
  return axios.get("http://localhost:3000/api/getgenres");
};

export const getGenreAnalysis = (genre) => {
  return apiRequest("get", API.genreAnalysis(genre));
};

const API_URL = "http://localhost:3000/api/peliculas";

export const fetchByGenre = async (genre) => {
  try {
    const response = await axios.get(`${API_URL}/genre/${genre}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by genre:", error);
    throw error;
  }
};

export const fetchByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by name:", error);
    throw error;
  }
};

export const fetchByScore = async (score) => {
  try {
    const response = await axios.get(`${API_URL}/rating/${score}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by score:", error);
    throw error;
  }
};

export const fetchByYear = async (year) => {
  try {
    const response = await axios.get(`${API_URL}/ano/${year}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by year:", error);
    throw error;
  }
};
