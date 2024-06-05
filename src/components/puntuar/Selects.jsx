import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/puntuar.css";
import PuntuarTable from "./PuntuarTable";
import SearchButtonComponent from "./SearchButtonComponent";

import FlexibleSelectComponent from "./FlexibleSelectComponent";

import { useState } from "react";
import {
  fetchByGenre,
  fetchByName,
  fetchByScore,
  fetchByYear,
} from "../../services/api";

const Selects = () => {
  const [genero, setGenero] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState("");
  const [name, setName] = useState("");
  const scores = ["0", "1", "2", "3", "4", "5"];

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
    setYear("");
  };
  const handleScoreChange = (event) => {
    setScore(event.target.value);
    setYear("");
    setGenero("");
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setGenero("");
    setScore("");
    setName("");
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
    setGenero("");
    setYear("");
    setScore("");
  };

  const handleGenreSearch = async () => {
    if (!genero) {
      console.warn("Género no seleccionado");
      return;
    }
    setLoading(true);

    try {
      const data = await fetchByGenre(genero);
      setData(data);
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleNameSearch = async () => {
    setLoading(true);

    try {
      const data = await fetchByName(name);
      setData(data);
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleScoreSearch = async () => {
    if (!score) {
      console.warn("Score no seleccionado");
      return;
    }
    setLoading(true);

    try {
      const data = await fetchByScore(score);
      setData(data);
    } catch (error) {
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

    try {
      const data = await fetchByYear(year);
      setData(data);
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

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
