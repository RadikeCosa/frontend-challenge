import { useState } from "react";
import useGenreAnalysis from "../../helpers/useGenreAnalysis";

const useGenreData = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const { data, data2 } = useGenreAnalysis(selectedGenre);

  return { data, data2, selectedGenre, setSelectedGenre };
};

export default useGenreData;
