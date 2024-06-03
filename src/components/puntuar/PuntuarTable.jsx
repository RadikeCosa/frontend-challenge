import getGenres from "../../helpers/getMovieGenre";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const PuntuarTable = (data) => {
  const dataLista = data.data;
  const { user } = useAuth();

  const handleItemClick = (item) => {
    console.log(
      `hola ${user.id} Hiciste click en la película ${item.Name}, id_pelicula: ${item.id}`
    );
    axios
      .get(`http://localhost:3000/api/checkvote/${user.id}/${item.id}`)
      .then((response) => {
        if (response.status === 200) {
          const obj = response.data;
          alert(`Votaste esta película y le pusiste un ${obj.rating}`);
        } else {
          console.log("Respuesta de la solicitud:", response.data);
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("No votaste esta película");
        } else {
          console.error("Error:", error);
        }
      });
  };

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
          <tr key={item.id} onClick={() => handleItemClick(item)}>
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
