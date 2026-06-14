import React from "react";
import ImageSlide from "./ImageSlide";
import ProductBio from "./ProductBio";

const TwoColLayout = ({ data }) => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-7 gap-x-5 xl:gap-x-12">
      {/* product image slide col1*/}
      <ImageSlide images={data.image} alt={data.title} />

      {/* product bio */}
      <ProductBio data={data} />
    </section>
  );
};

export default TwoColLayout;
