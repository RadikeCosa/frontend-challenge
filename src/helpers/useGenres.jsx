import { useEffect, useState } from "react";
import { getGenres } from "../services/api";

const useGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getGenres();
        const result = response.data;
        setGenres(result);
      } catch (error) {
        console.error("Error fetching genres", error);
      }
    };

    fetchGenres();
  }, []);

  return genres;
};

export default useGenres;
