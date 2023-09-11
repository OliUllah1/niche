import React from 'react';
import { FaEllipsisH,FaSearch,FaBars} from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='px-5 lg:px-20 py-3 flex items-center justify-between'>
            <button className='text-2xl text-[#237c3a] block lg:hidden'><FaBars></FaBars></button>
            <div className='flex gap-5 items-center'>
            <div className=' w-40'><a title="Niche" href="https://www.niche.com/" data-after-sherlock="true" aria-label="Niche Home"><svg class="" viewBox="0 0 550 112" xmlns="http://www.w3.org/2000/svg">

<path d="M428 34.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 56.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 78.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM377 16.5c-22.6 0-41 18.2-41 40.8S354.4 98 377 98s41-18.2 41-40.8-18.4-40.7-41-40.7zm0 76.2c-19.4 0-35.1-15.9-35.1-35.4s15.7-35.4 35.1-35.4 35.1 15.9 35.1 35.4-15.7 35.4-35.1 35.4z" fill="#237c3a"></path>

<path d="M83.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L35.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2z" fill="#237c3a" transform="matrix(.64 0 0 .65 340 20.8)" stroke="#237c3a" stroke-width="2"></path>

<path d="M55.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L7.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2zM83.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM160.6 74.1c-.9 0-2.2.8-3.9 2-3.7 2.4-9.8 6.5-18.6 6.5-14.5 0-24.7-13.9-24.7-26.4 0-15.8 12.7-26.4 24.7-26.4 8.3 0 13.2 3.9 16.7 6.8 1.9 1.5 3.4 2.8 4.9 2.8 2.2 0 3.5-1.2 3.5-3.2 0-3.7-11.9-13.3-25-13.3-17.9 0-32.4 14.9-32.4 33.2 0 18.1 14.8 33.4 32.3 33.4 5.8 0 12.3-1.5 17.7-4.2 4.9-2.5 8-5.4 8-7.6 0-2.2-1.3-3.6-3.2-3.6zM187.8 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM237.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3z" fill="#237c3a"></path>

<path fill="#237c3a" d="M187 52.5h50v7h-50z"></path>

<path fill="#237c3a" d="M187 52.5h50v7h-50zm119.5 29H269v-22h31c3 0 4.3-1.7 4.3-3.5 0-1.6-1.2-3.4-4.4-3.4H269V31h37.5c3.1 0 4.2-1.8 4.2-3.6 0-1-.4-3.3-4.2-3.3h-41.1c-2.6 0-4.2 1.5-4.2 4.2v56.1c0 2.7 1.2 3.9 3.9 3.9h41.4c2.6 0 4.2-1.3 4.2-3.6.1-1.9-1.5-3.2-4.2-3.2z"></path>

</svg></a></div>
            <div className='hidden lg:block'>
                <ul className='flex gap-5 items-center font-semibold text-[#464646] text-sm'>
                    <li><a className='hover:border-b-2 border-[#464646] hover:pb-1' href="">K-12</a></li>
                    <li><a className='hover:border-b-2 border-[#464646] hover:pb-1' href="">Colleges</a></li>
                    <li><a className='hover:border-b-2 border-[#464646] hover:pb-1' href="">Graduate Schools</a></li>
                    <li><a className='hover:border-b-2 border-[#464646] hover:pb-1' href="">Scholarships</a></li>
                    <li><a className='hover:border-b-2 border-[#464646] hover:pb-1' href="">Places to Live</a></li>
                    <li><a className='hover:border-b-2 border-[#464646] hover:pb-1' href="" >Places to Work</a></li>
                    <li><a className='hover:border-b-2 border-[#464646] hover:pb-1' href=""><FaEllipsisH></FaEllipsisH></a></li>
                </ul>
            </div>
            </div>
            <div className='flex gap-3'>
                <button className='text-2xl hidden lg:block pr-5 text-[#298541] border-r-[2px] border-[#9ad1a8]'><FaSearch></FaSearch></button>
                <button className='border-[2px] hidden lg:block text-base rounded-sm font-semibold border-[#298541] px-3 py-1 delay-75 text-[#298541] hover:bg-[#298541] hover:text-white'>Log In</button>
                <button className='text-base font-semibold bg-white lg:bg-[#298541] hover:bg-[#216132] px-3 py-1 delay-75 text-[#298541] lg:text-white rounded-sm border-[2px] border-[#298541]'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;