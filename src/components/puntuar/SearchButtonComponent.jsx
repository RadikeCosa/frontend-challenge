// SearchButtonComponent.js
const SearchButtonComponent = ({ handleSearch }) => {
  return (
    <div className="row">
      <div className="col-md-3">
        <button
          className="btn btn-primary btn-block"
          onClick={() => handleSearch()}
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default SearchButtonComponent;
