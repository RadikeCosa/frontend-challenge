import getGenres from "../../helpers/getMovieGenre";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const PuntuarTable = (data) => {
  const dataLista = data.data;
  const { user } = useAuth();
  const handleItemClick = (item) => {
    console.log(
      `Hola ${user.id}, hiciste click en la película ${item.Name}, id_pelicula: ${item.id}`
    );

    axios
      .get(`http://localhost:3000/api/checkvote/${user.id}/${item.id}`)
      .then((response) => {
        if (response.status === 200) {
          const obj = response.data;

          Swal.fire({
            title: `Votaste esta película y le pusiste un ${obj.rating}`,
            html: `
              <select id="ratingSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            `,
            focusConfirm: false,
            preConfirm: () => {
              const newRating = document.getElementById("ratingSelect").value;

              return axios
                .put(`http://localhost:3000/api/voto`, {
                  user_id: user.id,
                  movie_id: item.id,
                  rating: newRating,
                })
                .then((response) => {
                  if (response.status === 200) {
                    Swal.fire(`Tu voto ha sido actualizado a ${newRating}`);
                  } else {
                    throw new Error("Error al actualizar el voto");
                  }
                })
                .catch((error) => {
                  Swal.showValidationMessage(`Request failed: ${error}`);
                });
            },
          });
        } else if (response.status === 404) {
          console.log("Respuesta de la solicitud:", response.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          Swal.fire({
            title: "Usted no votó esta película",
            text: "¿Desea votarla ahora?",
            showCancelButton: true,
            html: `
              <select id="ratingSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            `,
            focusConfirm: false,
            preConfirm: () => {
              const newRating = document.getElementById("ratingSelect").value;

              return axios
                .post(`http://localhost:3000/api/voto`, {
                  user_id: user.id,
                  movie_id: item.id,
                  rating: newRating,
                })
                .then((response) => {
                  console.log(response);
                  if (response.status === 201) {
                    Swal.fire(`Tu voto ha sido registrado con éxito`);
                  } else {
                    throw new Error("Error al registrar el voto");
                  }
                })
                .catch((error) => {
                  Swal.showValidationMessage(`Request failed: ${error}`);
                });
            },
          });
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
