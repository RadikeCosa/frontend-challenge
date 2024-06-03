const SelectComponent = ({ genero, handleGeneroChange, genres }) => {
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
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
