const getGenres = (item) => {
  const genres = [];
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
  return genres.join(", ");
};
export default getGenres;
