import React from 'react';
import { FaMap,FaEllipsisH,FaSearch} from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='px-2 lg:px-10 py-3 flex items-center justify-between'>
            <div className='flex gap-5 items-center'>
            <div className='flex items-center gap-2 text-[#298541] font-semibold text-2xl'>
                <h1 className=' '>NICHE</h1>
                <h4 className='border-[3px] text-xl flex items-center justify-center border-[#298541] rounded-full w-8'>N</h4>
                <FaMap></FaMap>
            </div>
            <div>
                <ul className='flex gap-5 items-center font-semibold text-[#464646] text-base'>
                    <li><a href="">K-12</a></li>
                    <li><a href="">Colleges</a></li>
                    <li><a href="">Graduate Schools</a></li>
                    <li><a href="">Scholarships</a></li>
                    <li><a href="">Places to Live</a></li>
                    <li><a href="">Places to Work</a></li>
                    <li><a href=""><FaEllipsisH></FaEllipsisH></a></li>
                </ul>
            </div>
            </div>
            <div className='flex gap-5'>
                <button className='text-2xl pr-5 text-[#298541] border-r-[3px] border-[#9ad1a8]'><FaSearch></FaSearch></button>
                <button className='border-[3px] text-lg rounded-sm font-semibold border-[#298541] px-3 py-[6px] text-[#298541]'>Log In</button>
                <button className='text-lg font-semibold bg-[#298541] px-3 py-[6px] text-white rounded-sm'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;