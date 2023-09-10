import React from 'react';
import dartmouth from '../../../assets/images/partner/partner-dartmouth.webp'
import nazareth from '../../../assets/images/partner/partner-nazareth-prep.webp'
import logo1 from '../../../assets/images/partner/logo-1.png'
import logo2 from '../../../assets/images/partner/logo-2.png'
import logo3 from '../../../assets/images/partner/logo-3.png'
import logo4 from '../../../assets/images/partner/logo-4.png'
import stamp from '../../../assets/images/partner/stamp-claim.svg'
import squiggle from '../../../assets/images/banner/squiggle.webp'
import { FaCheckCircle } from "react-icons/fa";

const Partner = () => {
    return (
        <>
        <div className='px-2 lg:px-40 py-20 flex'>
            <div className='w-full space-y-5'>
                <p className='text-[#237c3a] text-lg'>PARTNER WITH NICHE</p>
                <h1 className='font-bold text-3xl text-[#102f25]'>For schools <br className='hidden lg:block' /> and colleges</h1>
                <img className='w-40' src={squiggle} alt="" />
                <p className='text-[#102f25] text-lg'>Are you a college or K-12 school representative? <br className='hidden lg:block' /> Learn more about how you can partner with  <br className='hidden lg:block' /> Niche to connect with students and families <br className='hidden lg:block' />throughout the school search process.</p>
                <div className='flex gap-2 items-center'>
                    <FaCheckCircle className='text-blue-600 text-2xl'></FaCheckCircle>
                    <a href="" className='text-[#102f25] font-semibold text-md underline'>Claim Your School</a>
                </div>
                <button className='px-5 py-3 rounded-sm bg-[#237c3a] text-white font-semibold'>Learn More</button>
                
            </div>
            <div className='w-full relative'>
                <p className='rotate-90 absolute top-10 right-36 text-[10px] font-semibold'>Dartmouth College</p>
                <p className='rotate-90 absolute bottom-40 right-4 font-semibold text-[10px]'>Nazareth Prep</p>
                <img className='w-80 h-80 object-cover rounded-xl' src={dartmouth} alt="" />
                <img className='w-80 rounded-xl absolute -bottom-10 right-14' src={nazareth} alt="" />
                <img className='w-44 rounded-xl absolute -bottom-5 -left-20' src={stamp} alt="" />
            </div>
        </div>
        <div className='px-2 lg:px-40'>
            
            <div className="divider font-semibold text-md">Over 1,700 schools partner with Niche</div>
            <div className='flex items-center justify-between px-20 pb-10'>
                <img className='w-32' src={logo1} alt="" />
                <img className='w-32' src={logo2} alt="" />
                <img className='w-20' src={logo3} alt="" />
                <img className='w-32' src={logo4} alt="" />
            </div>
            
        </div>
        </>
    );
};

export default Partner;