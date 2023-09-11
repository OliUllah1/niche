import React from 'react';
import squiggle from '../../../assets/images/banner/squiggle.webp'
import services1 from '../../../assets/images/services/why-icon-1.svg';
import services2 from '../../../assets/images/services/why-icon-2.svg';
import services3 from '../../../assets/images/services/why-icon-3.svg';
const Services = () => {
    return (
        <div className='px-2 lg:px-40 py-20 bg-[#f4ece7]'>
            <div className='text-center'>
            <p className='text-[#102f25] font-medium tracking-[3px] '>FIND YOUR NICHE</p>
            <h1 className='text-[#102f25] px-14 lg:px-0 font-bold text-2xl lg:text-3xl mt-5 mb-4'>Your search is unique. <br className='hidden lg:block' />Just like you.</h1>
            <div className='stroke-[#237c3a] mx-auto my-5 stroke-[4] w-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
            <p className='px-1 lg:px-0 lg:text-[17px] text-[#102f25] mt-5'>We give you all of the data, reviews, and insights in one <br className='hidden lg:block' /> place to make your search as easy as possible.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:px-10'>
                <div className='text-center mt-6 lg:mt-0 lg:p-10'>
                    <img className='w-24 lg:w-24 mx-auto' src={services1} alt="" />
                    <h3 className='text-[#237c3a] mt-3 mb-2 lg:mb-8 font-bold text-md'>NO HEAVY LIFTING</h3>
                    <p className='text-[#102f25]'>We analyze the data so you <br className='hidden lg:block' /> don't have to.</p>
                </div>
                <div className='text-center mt-7 lg:mt-0 lg:p-10'>
                    <img className='w-24 lg:w-24 mx-auto' src={services2} alt="" />
                    <h3 className='text-[#237c3a] mt-3 mb-2 lg:mb-3 font-bold '>THE GOOD, THE BAD,<br /> & THE HONEST</h3>
                    <p className='text-[#102f25] px-8 lg:px-0 '>Our user reviews let you hear <br className='hidden lg:block' /> directly from families and <br className='hidden lg:block' /> students to give you an <br className='hidden lg:block' /> honest and holistic view.</p>
                </div>
                <div className='text-center mt-7 lg:mt-0 lg:p-10'>
                    <img className='w-24 lg:w-24 mx-auto' src={services3} alt="" />
                    <h3 className='text-[#237c3a] mt-3 mb-2 lg:mb-9 font-bold text-md'>LIKE A GLOVE</h3>
                    <p className='text-[#102f25] px-8 lg:px-0'>We personalize your search <br className='hidden lg:block' /> based on what's most <br className='hidden lg:block' /> important to you.
</p>
                </div>
            </div>
        </div>
    );
};

export default Services;