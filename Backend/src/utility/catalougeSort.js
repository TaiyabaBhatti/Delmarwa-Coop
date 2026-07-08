export const setSortQueries = (sort) => {
  let sortValues = {};

  if (sort === "price_asc") {
    sortValues.price = 1;
  }
  if (sort === "price_desc") {
    sortValues.price = -1;
  }

  return sortValues;
};
