import { useEffect, useState } from "react";
import { getGenres, getGenreAnalysis } from "../../services/api";

const useGenreData = () => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getGenres();
        const result = response.data;
        setGenres(result);
        if (result.length > 0) {
          setSelectedGenre(result[0].name); // Set default selected genre
        }
      } catch (error) {
        console.error("Error fetching genres", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    if (!selectedGenre) return;

    const fetchData = async () => {
      try {
        const response = await getGenreAnalysis(selectedGenre);
        const result = response.data;
        setData(result);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, [selectedGenre]);

  return { data, genres, selectedGenre, setSelectedGenre };
};

export default useGenreData;
