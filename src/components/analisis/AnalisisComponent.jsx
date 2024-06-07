import { useState, useEffect } from "react";
import { getGenres } from "../../services/api";
import LineChart from "./LineChart";
import useGenreData from "./UseGenreData";
import Histograma from "./Histograma";

const AnalisisComponent = () => {
  const { data, data2, selectedGenre, setSelectedGenre } = useGenreData();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedGenres = await getGenres();
      setGenres(fetchedGenres);
    };

    fetchData(); // Fetch genres data on component mount
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="genre-select">Select Genre:</label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Select a genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <LineChart data={data} />
      <Histograma datos={data2} />
    </div>
  );
};

export default AnalisisComponent;
