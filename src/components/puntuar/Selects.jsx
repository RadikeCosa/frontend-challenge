import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import { useState } from "react";
import PuntuarTable from "./PuntuarTable";
import SelectComponent from "./SelectComponent";

const genres = ["Action", "Comedy", "Drama"];

const Selects = () => {
  const [data, setData] = useState(null);
  const [genero, setGenero] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGeneroChange = (event) => setGenero(event.target.value);

  const fetchData = (url) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  };

  const handleSearch = () => {
    let url = `http://localhost:3000/api/peliculas/genre/${genero}`;
    fetchData(url);
  };

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
