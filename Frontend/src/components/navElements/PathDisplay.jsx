import React from "react";
import Wrapper from "../Wrapper";

const PathDisplay = () => {
  return (
    <section className="border-t  border-gray-200 border-b-2 border-b-athens-gray shadow-2xs">
      <Wrapper properties={"py-4 "}>
        <p className="text-xs font-semibold space-x-4">
          <span className="text-black">Home</span>{" "}
          <span className="text-gray-600">/</span>
          <span className="text-gray-600">shop all</span>
        </p>
      </Wrapper>
    </section>
  );
};

export default PathDisplay;
