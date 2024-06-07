import axios from "axios";
import { API } from "./apiConfig";

export const apiRequest = async (method, url, data = null) => {
  try {
    const response = await axios({
      method: method,
      url: `${API.baseURL}${url}`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error(`Error in API request to ${url}:`, error);
    throw error;
  }
};
