import React from 'react';
import admissionLogo from '../../../assets/images/admission/direct-admissions-logo.webp'
import admissionbg from '../../../assets/images/admission/home-da.webp'
const Admissions = () => {
    return (
        <div className='py-20 px-2 lg:px-40 flex bg-[#fff] items-start'>
            <div className='w-full'>
                <img className='w-60' src={admissionLogo} alt="" />
                <h2 className='font-bold text-[#102f25] text-4xl mt-8'>Get accepted without an <br className='hidden lg:block' /> application.</h2>
                <p className='text-[#464646]  font-medium text-lg mt-7'>No application. No waiting.</p>
                <p className='text-[#464646]  text-lg font-medium'>With Direct Admissions, colleges can accept you based on <br className='hidden lg:block' /> the information in your Niche Profile.</p>
                <div className='mt-7 flex gap-5'>
                    <button className='bg-[#004436] px-10 py-[14px] rounded-full font-semibold text-xl text-white'>Create a Niche Profile</button>
                    <button className='bg-white px-10 py-[14px] rounded-full font-semibold text-xl border-[3px] border-[#004436] text-[#004436]'>Learn More</button>
                </div>
            </div>
            <div className='w-full'>
                <img src={admissionbg} alt="" />
            </div>
        </div>
    );
};

export default Admissions;