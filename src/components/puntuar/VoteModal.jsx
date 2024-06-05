import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";
import { registerVote, updateVote } from "../../services/api";
import RatingSelect from "./RatingSelect";

const VoteModal = (title, defaultValue, userId, movieId, isUpdate = false) => {
  return Swal.fire({
    title,
    html: ReactDOMServer.renderToString(
      <RatingSelect defaultValue={defaultValue} />
    ),
    focusConfirm: false,
    preConfirm: () => {
      const newRating = document.getElementById("ratingSelect").value;

      const request = isUpdate
        ? updateVote(userId, movieId, newRating)
        : registerVote(userId, movieId, newRating);

      return request
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            Swal.fire(
              `Tu voto ha sido ${
                isUpdate ? "actualizado" : "registrado"
              } con éxito`
            );
          } else {
            throw new Error(
              `Error al ${isUpdate ? "actualizar" : "registrar"} el voto`
            );
          }
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
    },
  });
};

export default VoteModal;
