import React, { useEffect, useState } from "react";
import ImageState from "./ImageState";

const ImageStateBlock = ({ src,alt,parentProperties,childProperties }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`${parentProperties}`}>
      {loading && (
        <div className="image-loading h-full">
          <p className="flex flex-row items-center justify-center h-full relative z-50 animate-pulse">
            Loading...
          </p>
        </div>
      )}
      {!loading && error && (
        <div className="image-loading h-full">
          <p className="flex flex-row items-center justify-center h-full relative z-50 ">
            Unable to load
          </p>
        </div>
      )}
       {!loading && !error && ( 
         <ImageState
          src={src}
          alt={alt}
          properties={childProperties}
          onLoad={() => {
            setLoading(false);
          }}
          onError={() => {
            setError(true);
          }}
        />
   
       )} 
    </div>
  );
};

export default ImageStateBlock;
