const SelectYearComponent = ({ year, handleYearChange, years }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 mb-3">
          <select
            className="form-control"
            value={year}
            onChange={handleYearChange}
          >
            <option value="">Seleccionar género</option>
            {years.map((year) => (
              <option key={year.id} value={year.year}>
                {year.year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectYearComponent;
