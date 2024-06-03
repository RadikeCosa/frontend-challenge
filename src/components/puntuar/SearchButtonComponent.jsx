// SearchButtonComponent.js
import React from "react";

const SearchButtonComponent = ({
  handleGenreSearch,
  handleYearSearch,
  genero,
  year,
}) => {
  const handleClick = () => {
    if (genero) {
      handleGenreSearch();
    } else if (year) {
      handleYearSearch();
    } else {
      console.warn("Debe seleccionar un género o un año");
    }
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <button className="btn btn-primary btn-block" onClick={handleClick}>
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default SearchButtonComponent;
