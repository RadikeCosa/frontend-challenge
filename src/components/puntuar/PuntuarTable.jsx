import getGenres from "../../helpers/getMovieGenre";
const PuntuarTable = (data) => {
  const dataLista = data.data;
  console.log(dataLista);
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
          <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item["Release Date"]}</td>
            <td>{item.avg_rating}</td>
            <td>{getGenres(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PuntuarTable;
