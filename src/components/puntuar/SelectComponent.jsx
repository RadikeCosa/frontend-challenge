const SelectComponent = ({
  genero,
  handleGeneroChange,
  handleSearch,
  genres,
}) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 mb-3">
          <select
            className="form-control"
            value={genero}
            onChange={handleGeneroChange}
          >
            <option value="">Seleccionar género</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-block"
            onClick={() => handleSearch()}
          >
            Buscar por género
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
