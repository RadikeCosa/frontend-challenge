import PuntuarTableRow from "./PuntuarTableRow";
import useHandleMovieClick from "../../helpers/useHandleMovieClick";

const PuntuarTable = (data) => {
  const dataLista = data.data;
  const handleItemClick = useHandleMovieClick();

  return (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Release Date</th>
          <th>Avg Rating</th>
          <th>Género</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {dataLista.map((item) => (
          <PuntuarTableRow
            key={item.id}
            item={item}
            handleItemClick={handleItemClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PuntuarTable;
