import React from 'react';

const Wrapper = ({children,properties}) => {
    return (
       <section className={`px-20 xmd:px-56 ${properties}`}>{children}</section>
    );
}

export default Wrapper;
