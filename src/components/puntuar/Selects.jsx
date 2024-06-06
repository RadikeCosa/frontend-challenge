import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import SearchButtonComponent from "./SearchButtonComponent";
import Results from "./Results.jsx";

import useSearch from "../../helpers/useSearch";
import FilterSection from "./FilterSection.jsx";

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
      {/* Utilizamos el componente FilterSection para la sección de filtros */}
      <FilterSection
        genero={genero}
        score={score}
        name={name}
        year={year}
        handleGeneroChange={handleGeneroChange}
        handleScoreChange={handleScoreChange}
        handleNameChange={handleNameChange}
        handleYearChange={handleYearChange}
      />

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

      <Results loading={loading} data={data} />
    </div>
  );
};

export default Selects;
