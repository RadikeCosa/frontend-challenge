import { useEffect, useState } from "react";
import { getGenres, getGenreAnalysis } from "../../services/api";

const useGenreData = () => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [data2, setData2] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getGenres();
        const result = response.data;
        setGenres(result);
        if (result.length > 0) {
          setSelectedGenre(result[0].name);
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

        // Aquí accedes a averageRatingByYear si existe en result
        const { averageRatingByYear, votosPorRating } = result;
        setData(averageRatingByYear);
        setData2(votosPorRating);
        if (averageRatingByYear && Array.isArray(averageRatingByYear)) {
          console.log(votosPorRating);
          // Puedes hacer lo que necesites con el array averageRatingByYear
        }
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, [selectedGenre]);

  return { data, data2, genres, selectedGenre, setSelectedGenre };
};

export default useGenreData;
