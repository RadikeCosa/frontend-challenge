import { useState, useEffect } from "react";
import FlexibleSelectComponent from "../../components/puntuar/FlexibleSelectComponent";
const scores = ["0", "1", "2", "3", "4", "5"];
import { fetchYears, getGenres } from "../../services/api";

const FilterSection = ({
  genero,
  score,
  name,
  year,
  handleGeneroChange,
  handleScoreChange,
  handleNameChange,
  handleYearChange,
}) => {
  const [years, setYears] = useState([]); // State to store fetched years data
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedYears = await fetchYears();
      const fetchedGenres = await getGenres();
      setYears(fetchedYears);
      setGenres(fetchedGenres);
    };

    fetchData(); // Fetch years data on component mount
  }, []);
  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <FlexibleSelectComponent
          value={genero}
          handleChange={handleGeneroChange}
          options={genres}
          placeholder="Seleccionar género"
        />
      </div>
      <div className="col-md-3 mb-3">
        <FlexibleSelectComponent
          value={score}
          handleChange={handleScoreChange}
          options={scores.map((score, index) => ({ id: index, name: score }))}
          placeholder="Seleccionar puntaje"
        />
      </div>
      <div className="col-md-3 mb-3">
        <FlexibleSelectComponent
          value={name}
          handleChange={handleNameChange}
          placeholder="Buscar por nombre"
          type="input"
        />
      </div>
      <div className="col-md-3 mb-3">
        <FlexibleSelectComponent
          value={year}
          handleChange={handleYearChange}
          options={years}
          placeholder="Seleccionar año"
        />
      </div>
    </div>
  );
};

export default FilterSection;
