export const setFiltersQuery = (params) => {
  let filters = {};
  if (params.search) {
    //ignore case - i
    // find search in this title
    filters.title = {
      $regex: params.search,
      $options: "i",
    };
  }

  if (params.rating) {
    filters.rating = {
      $gte: Number(params.rating),
    };
  }

  if (params.minPrice || params.maxPrice) {
    filters.price = {};

    if (params.minPrice) {
      filters.price.$gte = Number(params.minPrice);
    }

    if (params.maxPrice) {
      filters.price.$lte = Number(params.maxPrice);
    }
  }

  return filters;
};
