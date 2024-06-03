import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import PuntuarTable from "./PuntuarTable";

const PuntuarComponent = () => {
  const [data, setData] = useState(null);
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNombreChange = (event) => setNombre(event.target.value);
  const handleGeneroChange = (event) => setGenero(event.target.value);
  const handleAnoChange = (event) => setAno(event.target.value);
  const handleRatingChange = (event) => setRating(event.target.value);

  const fetchData = (url) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  };

  const handleSearch = (type) => {
    let url = "";
    switch (type) {
      case "nombre":
        url = `http://localhost:3000/api/peliculas/name/${nombre}`;
        break;
      case "genero":
        url = `http://localhost:3000/api/peliculas/genre/${genero}`;
        break;
      case "ano":
        url = `http://localhost:3000/api/peliculas/ano/${ano}`;
        break;
      case "rating":
        url = `http://localhost:3000/api/peliculas/rating/${rating}`;
        break;
      default:
        break;
    }
    fetchData(url);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Buscar por nombre"
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            value={genero}
            onChange={handleGeneroChange}
            placeholder="Buscar por género"
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            value={ano}
            onChange={handleAnoChange}
            placeholder="Buscar por año"
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            value={rating}
            onChange={handleRatingChange}
            placeholder="Buscar por puntaje"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-block"
            onClick={() => handleSearch("nombre")}
          >
            Buscar por nombre
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-block"
            onClick={() => handleSearch("genero")}
          >
            Buscar por género
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-block"
            onClick={() => handleSearch("ano")}
          >
            Buscar por año
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-block"
            onClick={() => handleSearch("rating")}
          >
            Buscar por puntaje
          </button>
        </div>
      </div>
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

export default PuntuarComponent;