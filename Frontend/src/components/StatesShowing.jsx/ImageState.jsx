import React, { useEffect, useState } from 'react';

const ImageState = ({src}) => {
    const [loading,setLoading] = useState(true);
     const [error,setError] = useState(false);
     useEffect(()=>{

        if(error){
            setLoading(false)
        }

     },[error,loading])
    return (
       <div className={`h-40 relative`}>
        {loading && <div className='image-loading h-full'><p className='flex flex-row items-center justify-center h-full relative z-50 animate-pulse'>Loading...</p></div>}
        {!loading && error && <div className='image-loading h-full'><p className='flex flex-row items-center justify-center h-full relative z-50 '>Unable to load</p></div>}
       {!loading && !error && <img src={src} alt="" onLoad={()=>{setLoading(false)}} className='h-40 object-cover w-full'  onError={()=>{setError(true)}}/>} 
       </div>
    );
}

export default ImageState;
