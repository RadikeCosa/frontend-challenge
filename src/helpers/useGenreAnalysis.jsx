import { useEffect, useState } from "react";
import { getGenreAnalysis } from "../services/api";

const useGenreAnalysis = (selectedGenre) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState({});

  useEffect(() => {
    if (!selectedGenre) return;

    const fetchData = async () => {
      try {
        const response = await getGenreAnalysis(selectedGenre);
        const result = response.data;

        const { averageRatingByYear, votosPorRating } = result;
        setData(averageRatingByYear);
        setData2(votosPorRating);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, [selectedGenre]);

  return { data, data2 };
};

export default useGenreAnalysis;
