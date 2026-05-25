import React from "react";
import { SHOP_PAGE_HEADLINE_DETAILS } from "../../utils/pageHeadlineContent";

const Headline = () => {
  return (
    <div className="bg-tea-blue border-b-4 border-tall-poppy">
      <div className="px-56 py-16 text-white space-y-4">
        <h1 className="text-5xl font-bold capitalize">{SHOP_PAGE_HEADLINE_DETAILS.title}</h1>
        <p className="text-lg font-normal">{SHOP_PAGE_HEADLINE_DETAILS.desc}</p>
      </div>
    </div>
  );
};

export default Headline;
