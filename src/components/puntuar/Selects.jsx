import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import PuntuarTable from "./PuntuarTable";
import SearchButtonComponent from "./SearchButtonComponent";

import FlexibleSelectComponent from "./FlexibleSelectComponent";
import useSearch, { scores, genres, years } from "../../helpers/useSearch"; // Importamos el hook y las constantes

const Selects = () => {
  const {
    genero,
    year,
    data,
    loading,
    score,
    name,
    handleGeneroChange,
    handleScoreChange,
    handleYearChange,
    handleNameChange,
    handleGenreSearch,
    handleNameSearch,
    handleScoreSearch,
    handleYearSearch,
  } = useSearch();

  return (
    <div className="container mt-5">
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
      <SearchButtonComponent
        handleGenreSearch={handleGenreSearch}
        handleYearSearch={handleYearSearch}
        handleScoreSearch={handleScoreSearch}
        handleNameSearch={handleNameSearch}
        genero={genero}
        year={year}
        score={score}
        name={name}
      />

      {loading ? (
        <div className="mt-3">Cargando...</div>
      ) : data ? (
        <PuntuarTable data={data} />
      ) : (
        <div className="mt-3">No hay resultados</div>
      )}
    </div>
  );
};

export default Selects;
