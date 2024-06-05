import getGenres from "../../helpers/getMovieGenre.jsx";

const PuntuarTableRow = ({ item, handleItemClick }) => {
  return (
    <tr onClick={() => handleItemClick(item)}>
      <td>{item.Name}</td>
      <td>{item["Release Date"]}</td>
      <td>{item.avg_rating}</td>
      <td>{getGenres(item)}</td>
    </tr>
  );
};

export default PuntuarTableRow;
