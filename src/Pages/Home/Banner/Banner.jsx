import React from 'react';
import bannerImg from '../../../assets/images/banner/hero-lg.webp'
import squiggle from '../../../assets/images/banner/squiggle.webp'
const Banner = () => {
    return (
        <div className='lg:flex'>
            <div className='w-full h-full lg:h-[545px]'>
            <img className='w-full h-full lg:object-cover' src={bannerImg} alt="" />
            </div>
            <div className='w-full bg-[#102f25] text-white lg:px-20 px-3 lg:py-10 py-5'>
                <h3 className='lg:mb-3 mb-2 lg:mt-10 text-lg lg:text-xl text-center font-medium tracking-[4px]'>FIND THE SCHOOL</h3>
                <h1 className=' font-bold text-3xl lg:text-4xl text-center'>THAT FITS YOU BEST</h1>
                <div className='stroke-[#237c3a] mx-auto mt-5 mb-9 stroke-[4] w-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
                <p className='text-center text-[17px] px-5 lg:px-0 mb-12 lg:mb-14'>Finding the right school shouldn't be hard. From K-12 to <br className='hidden lg:block' /> college to grad school, we make it easy to discover and <br className='hidden lg:block' /> connect with the best ones for you.</p>
                <h3 className='font-semibold text-center tracking-[4px]'>START YOUR SEARCH</h3>
                <div className='lg:flex space-y-4 lg:space-y-0 px-24 lg:px-0 pb-14 lg:pb-0 mt-4 items-center justify-between  gap-6'>
                    <button className='px-7 w-full text-center py-3 bg-[#237c3a] rounded-sm font-semibold text-[17px] delay-100 hover:bg-[#0c241c]'>K-12 Schools</button>
                    <button className='px-7 rounded-sm py-3 w-full text-center bg-[#237c3a] font-semibold text-[17px] delay-100 hover:bg-[#0c241c]'>College</button>
                    <button className='px-7 rounded-sm w-full text-center py-3 bg-[#237c3a] font-semibold text-[17px] delay-100 hover:bg-[#0c241c]'>Grad Schools</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;