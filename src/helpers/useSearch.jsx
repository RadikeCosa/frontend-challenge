import { useState } from "react";
import {
  fetchByGenre,
  fetchByName,
  fetchByScore,
  fetchByYear,
} from "../services/api";
import { genres, years } from "./movieFiltersData";
export const scores = ["0", "1", "2", "3", "4", "5"];

const useSearch = () => {
  const [genero, setGenero] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState("");
  const [name, setName] = useState("");

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

  const handleSearch = async (searchFunction, searchParam, warningMessage) => {
    if (!searchParam) {
      console.warn(warningMessage);
      return;
    }
    setLoading(true);

    try {
      const data = await searchFunction(searchParam);
      setData(data);
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGenreSearch = () =>
    handleSearch(fetchByGenre, genero, "Género no seleccionado");
  const handleNameSearch = () =>
    handleSearch(fetchByName, name, "Nombre no ingresado");
  const handleScoreSearch = () =>
    handleSearch(fetchByScore, score, "Score no seleccionado");
  const handleYearSearch = () =>
    handleSearch(fetchByYear, year, "Año no seleccionado");

  return {
    genero,
    setGenero,
    year,
    setYear,
    data,
    setData,
    loading,
    setLoading,
    score,
    setScore,
    name,
    setName,
    handleGeneroChange,
    handleScoreChange,
    handleYearChange,
    handleNameChange,
    handleGenreSearch,
    handleNameSearch,
    handleScoreSearch,
    handleYearSearch,
    genres,
  };
};

export default useSearch;
