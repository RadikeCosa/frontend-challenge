const getGenres = (item) => {
  let genres = [];
  // Iterar sobre las propiedades del objeto y agregar los géneros con valor 1 a la lista
  Object.keys(item).forEach((key) => {
    if (
      item[key] === "1" &&
      key !== "id" &&
      key !== "Name" &&
      key !== "Release Date" &&
      key !== "avg_rating"
    ) {
      genres.push(key);
    }
  });
  // Devolver los géneros como una cadena separada por comas
  return genres.join(", ");
};
export default getGenres;
