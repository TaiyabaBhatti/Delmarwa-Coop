import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const CartBlock = () => {
    return (
        <div className='flex flex-row gap-x-1.5 items-center text-blue-950'>
                   <FaCartShopping/>
                   <p className='text-sm font-semibold'>$45.66</p>
               </div>
    );
}

export default CartBlock;
