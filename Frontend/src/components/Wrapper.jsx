import React from "react";

const Wrapper = ({ children, properties = "" }) => {
  return (
    <section className={`px-20 xmd:px-40 lg:px-48  ${properties}`}>
      {children}
    </section>
  );
};

export default Wrapper;
