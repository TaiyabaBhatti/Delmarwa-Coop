import React from 'react';
import {FaPerson} from 'react-icons/fa6'
const AccountBlock = () => {
    return (
        <div className='flex flex-row gap-x-1.5 items-center text-blue-950'>
            <FaPerson/>
            <p className='text-sm font-semibold'>Sign In</p>
        </div>
    );
}

export default AccountBlock;
