import LineChart from "./LineChart";
import useGenreData from "./UseGenreData";

const AnalisisComponent = () => {
  const { data, genres, selectedGenre, setSelectedGenre } = useGenreData();

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
