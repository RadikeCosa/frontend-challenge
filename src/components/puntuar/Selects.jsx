import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import PuntuarTable from "./PuntuarTable";
import SelectGenreComponent from "./SelectGenreComponent";
import SearchButtonComponent from "./SearchButtonComponent";
import SelectYearComponent from "./SelectYearComponent";

const Selects = ({
  data,
  genero,
  genres,
  loading,
  handleGeneroChange,
  handleSearch,
  year,
  handleYearChange,
  years,
}) => {
  return (
    <div className="container mt-5">
      <SelectGenreComponent
        genero={genero}
        handleGeneroChange={handleGeneroChange}
        genres={genres}
      />

      <SearchButtonComponent handleSearch={handleSearch} />
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

const years = [
  { id: 70, year: "1947" },
  { id: 71, year: "1932" },
  { id: 72, year: "1926" },
];
