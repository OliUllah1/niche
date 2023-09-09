import React from 'react';
import squiggle from '../../../assets/images/banner/squiggle.webp'
import services1 from '../../../assets/images/services/why-icon-1.svg';
import services2 from '../../../assets/images/services/why-icon-2.svg';
import services3 from '../../../assets/images/services/why-icon-3.svg';
const Services = () => {
    return (
        <div className='px-2 lg:px-40 py-20 bg-[#f4ece7]'>
            <div className='text-center'>
            <p className='text-[#102f25] font-medium text-xl'>FIND YOUR NICHE</p>
            <h1 className='text-[#102f25] font-bold text-3xl mt-5 mb-3'>Your search is unique. <br className='hidden lg:block' />Just like you.</h1>
            <img className='w-40 mx-auto' src={squiggle} alt="" />
            <p className=' text-lg text-[#102f25] mt-5'>We give you all of the data, reviews, and insights in one <br className='hidden lg:block' /> place to make your search as easy as possible.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='text-center p-10'>
                    <img className='w-40 mx-auto' src={services1} alt="" />
                    <h3 className='text-[#237c3a] mt-3 mb-8 font-bold text-md'>NO HEAVY LIFTING</h3>
                    <p className='text-[#102f25] text-lg'>We analyze the data so you <br className='hidden lg:block' /> don't have to.</p>
                </div>
                <div className='text-center p-10'>
                    <img className='w-40 mx-auto' src={services2} alt="" />
                    <h3 className='text-[#237c3a] mt-3 mb-3 font-bold text-md'>THE GOOD, THE BAD,<br className='hidden lg:block' /> & THE HONEST</h3>
                    <p className='text-[#102f25] text-lg'>Our user reviews let you hear <br className='hidden lg:block' /> directly from families and <br className='hidden lg:block' /> students to give you an <br className='hidden lg:block' /> honest and holistic view.</p>
                </div>
                <div className='text-center p-10'>
                    <img className='w-40 mx-auto' src={services3} alt="" />
                    <h3 className='text-[#237c3a] mt-3 mb-8 font-bold text-md'>LIKE A GLOVE</h3>
                    <p className='text-[#102f25] text-lg'>We personalize your search <br className='hidden lg:block' /> based on what's most <br className='hidden lg:block' /> important to you.
</p>
                </div>
            </div>
        </div>
    );
};

export default Services;