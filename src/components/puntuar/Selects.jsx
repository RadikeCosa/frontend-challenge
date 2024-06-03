import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import PuntuarTable from "./PuntuarTable";
import SelectComponent from "./SelectComponent";

const Selects = ({
  data,
  genero,
  genres,
  loading,
  handleGeneroChange,
  handleSearch,
}) => {
  return (
    <div className="container mt-5">
      <SelectComponent
        genero={genero}
        handleGeneroChange={handleGeneroChange}
        handleSearch={handleSearch}
        genres={genres}
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
