import React from "react";
import { SHOP_PAGE_HEADLINE_DETAILS } from "../../utils/pageHeadlineContent";
import Wrapper from "../../components/Wrapper";
const Headline = () => {
  return (
    <section className="bg-tea-blue border-b-4 border-tall-poppy">
      <Wrapper properties={"py-16"}>
        <div className="text-white space-y-4">
        <h1 className="text-5xl font-bold capitalize">{SHOP_PAGE_HEADLINE_DETAILS.title}</h1>
        <p className="text-lg font-normal">{SHOP_PAGE_HEADLINE_DETAILS.desc}</p>
      </div>
      </Wrapper>
      
    </section>
  );
};

export default Headline;
