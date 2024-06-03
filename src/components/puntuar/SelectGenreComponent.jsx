// SelectGenreComponent.js

const SelectGenreComponent = ({ genero, handleGeneroChange, genres }) => {
  return (
    <div className="row">
      <div>
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
  );
};

export default SelectGenreComponent;
