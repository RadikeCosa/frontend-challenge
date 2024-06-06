import FlexibleSelectComponent from "../../components/puntuar/FlexibleSelectComponent";
import { scores } from "../../helpers/useSearch";
import { years, genres } from "../../helpers/movieFiltersData";
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
