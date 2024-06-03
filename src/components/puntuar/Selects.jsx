import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import PuntuarTable from "./PuntuarTable";
import SelectGenreComponent from "./SelectGenreComponent";
import SearchButtonComponent from "./SearchButtonComponent";
import SelectYearComponent from "./SelectYearComponent";
import { useState } from "react";
import axios from "axios";

const Selects = () => {
  const [genero, setGenero] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const genres = [
    { id: 1, name: "Animation" },
    { id: 2, name: "Children's" },
    { id: 3, name: "Comedy" },
    { id: 4, name: "Action" },
    { id: 5, name: "Adventure" },
    { id: 6, name: "Thriller" },
  ];

  const years = [
    { id: 1, year: "1995" },
    { id: 2, year: "1996" },
    { id: 3, year: "1994" },
    { id: 4, year: "1967" },
    { id: 5, year: "1977" },
    { id: 6, year: "1993" },
    { id: 7, year: "1965" },
    { id: 8, year: "1982" },
    { id: 9, year: "1990" },
  ];

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
    setYear(""); // Resetear el año cuando se cambia el género
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setGenero(""); // Resetear el género cuando se cambia el año
  };

  const handleGenreSearch = async () => {
    if (!genero) {
      console.warn("Género no seleccionado");
      return;
    }
    setLoading(true);
    const url = `http://localhost:3000/api/peliculas/genre/${genero}`;

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleYearSearch = async () => {
    if (!year) {
      console.warn("Año no seleccionado");
      return;
    }
    setLoading(true);
    const url = `http://localhost:3000/api/peliculas/ano/${year}`;

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <SelectGenreComponent
            genero={genero}
            handleGeneroChange={handleGeneroChange}
            genres={genres}
          />
        </div>
        <div className="col-md-6">
          <SelectYearComponent
            year={year}
            handleYearChange={handleYearChange}
            years={years}
          />
        </div>
      </div>
      <SearchButtonComponent
        handleGenreSearch={handleGenreSearch}
        handleYearSearch={handleYearSearch}
        genero={genero}
        year={year}
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
