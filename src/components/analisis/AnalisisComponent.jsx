import { useEffect, useState } from "react";
import LineChart from "./LineChart";

const AnalisisComponent = () => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getgenres");
        const result = await response.json();
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
        const response = await fetch(
          `http://localhost:3000/api/peliculas/analisis/${selectedGenre}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, [selectedGenre]);

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
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <LineChart data={data} />
    </div>
  );
};

export default AnalisisComponent;
