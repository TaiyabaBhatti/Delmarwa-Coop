import React, { useEffect, useState } from "react";

const ImageState = ({ src,alt,onLoad,onError,properties }) => {
  
  return (
    
        <img
          src={src}
          alt={alt}
          onLoad={onload}
          className={`${properties}`}
          onError={onError}
        />
   
  );
};

export default ImageState;
