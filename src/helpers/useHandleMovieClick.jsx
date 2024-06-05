import { useAuth } from "../context/AuthContext";
import VoteModal from "../components/puntuar/VoteModal";
import { checkVote } from "../services/api";

const useHandleMovieClick = () => {
  const { user } = useAuth();

  const handleMovieClick = (item) => {
    console.log(
      `Hola ${user.id}, hiciste click en la película ${item.Name}, id_pelicula: ${item.id}`
    );

    checkVote(user.id, item.id)
      .then((response) => {
        if (response.status === 200) {
          const obj = response.data;

          VoteModal(
            `Votaste esta película y le pusiste un ${obj.rating}`,
            obj.rating,
            user.id,
            item.id,
            true
          );
        } else if (response.status === 404) {
          console.log("Respuesta de la solicitud:", response.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          VoteModal(
            "Usted no votó esta película. ¿Desea votarla ahora?",
            "",
            user.id,
            item.id
          );
        } else {
          console.error("Error:", error);
        }
      });
  };

  return handleMovieClick;
};

export default useHandleMovieClick;
