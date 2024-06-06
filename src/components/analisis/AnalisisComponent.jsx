import LineChart from "./LineChart";
import useGenreData from "./UseGenreData";
import Histograma from "./Histograma";

const AnalisisComponent = () => {
  const { data, data2, genres, selectedGenre, setSelectedGenre } =
    useGenreData();

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
      <Histograma datos={data2} />
    </div>
  );
};

export default AnalisisComponent;
