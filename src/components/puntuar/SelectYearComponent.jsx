// SelectYearComponent.js

const SelectYearComponent = ({ year, handleYearChange, years }) => {
  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <select
          className="form-control"
          value={year}
          onChange={handleYearChange}
        >
          <option value="">Seleccionar año</option>
          {years.map((year) => (
            <option key={year.id} value={year.year}>
              {year.year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectYearComponent;
