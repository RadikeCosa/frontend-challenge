const SearchButtonComponent = ({
  handleGenreSearch,
  handleYearSearch,
  handleScoreSearch,
  handleNameSearch,
  genero,
  year,
  score,
  name,
}) => {
  const handleClick = () => {
    if (genero) {
      handleGenreSearch();
    } else if (year) {
      handleYearSearch();
    } else if (score) {
      handleScoreSearch();
    } else if (name) {
      handleNameSearch();
    } else {
      console.warn(
        "Debe seleccionar un género, un año, un puntaje o un nombre"
      );
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
