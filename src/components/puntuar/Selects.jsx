import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import { useState } from "react";
import PuntuarTable from "./PuntuarTable";
import SelectComponent from "./SelectComponent";

const genres = [
  { id: 1, name: "Animation" },
  { id: 2, name: "Children's" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Action" },
  { id: 5, name: "Adventure" },
  { id: 6, name: "Thriller" },
  { id: 7, name: "Drama" },
  { id: 8, name: "Crime" },
  { id: 9, name: "Sci-Fi" },
  { id: 10, name: "War" },
  { id: 11, name: "Romance" },
  { id: 12, name: "Horror" },
  { id: 13, name: "Musical" },
  { id: 14, name: "Documentary" },
  { id: 15, name: "Western" },
  { id: 16, name: "Fantasy" },
  { id: 17, name: "Film-Noir" },
  { id: 18, name: "Mystery" },
];

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
