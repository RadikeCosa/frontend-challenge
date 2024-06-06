import PuntuarTable from "./PuntuarTable";

const Results = ({ loading, data }) => {
  return (
    <div className="mt-3">
      {loading ? (
        <div>Cargando...</div>
      ) : data ? (
        <PuntuarTable data={data} />
      ) : (
        <div>No hay resultados</div>
      )}
    </div>
  );
};

export default Results;
