import { useEffect, useState } from "react";
import { getGenreAnalysis } from "../services/api";

const useGenreAnalysis = (selectedGenre) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedGenre) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getGenreAnalysis(selectedGenre);
        const { averageRatingByYear, votosPorRating } = response;
        setData(averageRatingByYear);
        setData2(votosPorRating);
      } catch (error) {
        console.error("Error fetching the data", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedGenre]);

  return { data, data2, loading, error };
};

export default useGenreAnalysis;
