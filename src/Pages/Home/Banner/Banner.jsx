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
                <img className='w-40 mx-auto mt-3 mb-8' src={squiggle} alt="" />
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