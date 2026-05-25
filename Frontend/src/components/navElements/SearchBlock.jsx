import React, { useState } from 'react';
import {FaSearchengin} from 'react-icons/fa6'

const SearchBlock = () => {

const [serach,setSearch] = useState("");


    return (
        <div className='text-gray-600 bg-gray-100 border-gray-100 border flex flex-row gap-x-2 px-3 items-center p-2 rounded-sm w-96 max-w-112.5'>
            <FaSearchengin className='text-lg'/>
            <input id='search' className='outline-0 w-full' placeholder='Search for products' type="text" value={serach} onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
    );
}

export default SearchBlock;
