import React from "react";

const Wrapper = ({ children, properties = "" }) => {
  return (
    <section className={`px-10 xmd:px-24 lg:px-32  ${properties}`}>
      {children}
    </section>
  );
};

export default Wrapper;
