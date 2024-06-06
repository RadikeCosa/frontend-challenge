import { useState } from "react";
import useGenres from "../../helpers/useGenres";
import useGenreAnalysis from "../../helpers/useGenreAnalysis";

const useGenreData = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const genres = useGenres();
  const { data, data2 } = useGenreAnalysis(selectedGenre);

  return { data, data2, genres, selectedGenre, setSelectedGenre };
};

export default useGenreData;
