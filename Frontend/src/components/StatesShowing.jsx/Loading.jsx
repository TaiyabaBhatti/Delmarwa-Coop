import React from 'react';

const Loading = ({text}) => {
    return (
        <div className="w-full mt-10">
          <p className="text-center font-bold animate-pulse">
            {text} ...
          </p>
        </div>
    );
}

export default Loading;
