import React from 'react';
import bannerImg from '../../../assets/images/banner/hero-lg.webp'
import squiggle from '../../../assets/images/banner/squiggle.webp'
const Banner = () => {
    return (
        <div className='flex'>
            <div className='w-full h-[550px]'>
            <img className='w-full h-full object-cover' src={bannerImg} alt="" />
            </div>
            <div className='w-full bg-[#102f25] text-white px-20 py-10'>
                <h3 className='mb-3 mt-7 text-2xl text-center'>FIND THE SCHOOL</h3>
                <h1 className=' font-bold text-5xl text-center'>THAT FITS YOU BEST</h1>
                <div className='stroke-[#237c3a] mx-auto my-5 stroke-[4] w-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
                <p className='text-center text-xl mb-10'>Finding the right school shouldn't be hard. From K-12 to <br className='hidden lg:block' /> college to grad school, we make it easy to discover and <br className='hidden lg:block' /> connect with the best ones for you.</p>
                <h3 className='text-xl font-semibold text-center'>START YOUR SEARCH</h3>
                <div className='flex mt-3 items-center justify-between  gap-6'>
                    <button className='px-7 w-full text-center py-3 bg-[#237c3a] rounded-sm font-bold text-[17px]'>K-12 School</button>
                    <button className='px-7 rounded-sm py-3 w-full text-center bg-[#237c3a] font-bold text-[17px]'>College</button>
                    <button className='px-7 rounded-sm w-full text-center py-3 bg-[#237c3a] font-bold text-[17px]'>Grad Schools</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;