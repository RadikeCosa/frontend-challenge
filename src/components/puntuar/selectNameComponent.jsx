const SelectNameComponent = ({ name, handleChange }) => {
  return (
    <div className="">
      <input
        type="text"
        className="form-control"
        value={name} // Aquí utilizamos 'name' en lugar de 'nombre'
        onChange={handleChange} // Aquí utilizamos 'handleChange'
        placeholder="Buscar por nombre"
      />
    </div>
  );
};

export default SelectNameComponent;
