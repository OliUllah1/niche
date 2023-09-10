import React from 'react';
import img from '../../../assets/images/ads/start-student-with-dog.webp'
const Ads = () => {
    return (
        <div className='px-2 lg:px-60 flex gap-20 py-20 bg-[#d0e0ec]'> 
        <img className='w-72' src={img} alt="" />
            
            <div>
                <h1 className='font-bold text-3xl text-[#102f25] text-center'>Not sure where to start?</h1>
                <div className='stroke-[#102f25] my-5 stroke-[4] mx-auto w-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
                <p className='text-center text-[#102f25] text-lg'>Tell us what matters most to you and we'll create a <br className='hidden lg:block' />  custom list of schools tailored to fit your needs.</p>
                 <div className='flex justify-center my-5'>
                 <button className='w-60 font-semibold text-lg text-white rounded-sm py-3 bg-[#237c3a]'>Take our College Quiz</button>
                 </div>
                 <div className='flex justify-center my-5'>
                 <button className='w-60 font-semibold text-lg text-white rounded-sm py-3 bg-[#237c3a]'>Find K-12 Schools Near You</button>
                 </div>
                
            </div>
        </div>
    );
};

export default Ads;