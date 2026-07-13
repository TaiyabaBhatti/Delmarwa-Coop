export const dataConversion = (price, numReviews, rating, stockCount) => {
  return {
    priceConv: Number(price),
    numReviewsConv: Number(numReviews),
    ratingConv: Number(rating),
    stockCountConv: Number(stockCount),
  };
};
