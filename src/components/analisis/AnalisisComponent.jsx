import LineChart from "./LineChart";
import useGenreData from "./UseGenreData";
import Histograma from "./Histograma";

const AnalisisComponent = () => {
  const { data, data2, selectedGenre, setSelectedGenre } = useGenreData();

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

const genres = [
  {
    id: 1,
    name: "Animation",
  },
  {
    id: 2,
    name: "Children's",
  },
  {
    id: 3,
    name: "Comedy",
  },
  {
    id: 4,
    name: "Action",
  },
  {
    id: 5,
    name: "Adventure",
  },
  {
    id: 6,
    name: "Thriller",
  },
  {
    id: 7,
    name: "Drama",
  },
  {
    id: 8,
    name: "Crime",
  },
  {
    id: 9,
    name: "Sci-Fi",
  },
  {
    id: 10,
    name: "War",
  },
  {
    id: 11,
    name: "Romance",
  },
  {
    id: 12,
    name: "Horror",
  },
  {
    id: 13,
    name: "Musical",
  },
  {
    id: 14,
    name: "Documentary",
  },
  {
    id: 15,
    name: "Western",
  },
  {
    id: 16,
    name: "Fantasy",
  },
  {
    id: 17,
    name: "Film-Noir",
  },
  {
    id: 18,
    name: "Mystery",
  },
];
