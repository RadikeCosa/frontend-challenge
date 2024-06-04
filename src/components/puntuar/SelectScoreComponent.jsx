const SelectScoreComponent = ({ score, handleScoreChange, scores }) => {
  return (
    <div className="row">
      <div>
        <select
          className="form-control"
          value={score}
          onChange={handleScoreChange}
        >
          <option value="">Seleccionar puntaje</option>
          {scores.map((scoreOption) => (
            <option key={scoreOption} value={scoreOption}>
              {scoreOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectScoreComponent;
