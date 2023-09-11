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
        <div className='relative pb-28 lg:pb-0'>
            <div className='absolute block lg:hidden -top-10 fill-white w-full h-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 30"><path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg></div>
            <div className='absolute hidden lg:block -top-10 fill-white w-full h-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 60"><path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg></div>
        <div className='lg:px-40 px-10 py-20 lg:flex'>
            <div className='w-full mb-10 lg:mb-0 space-y-5'>
                <p className='text-[#237c3a] tracking-[3px]'>PARTNER WITH NICHE</p>
                <h1 className='font-bold text-2xl lg:text-3xl text-[#102f25]'>For schools <br /> and colleges</h1>
                
                <div className='stroke-[#102f25] my-5 stroke-[4] w-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>


                <p className='text-[#102f25] text-lg'>Are you a college or K-12 school representative? <br className='hidden lg:block' /> Learn more about how you can partner with  <br className='hidden lg:block' /> Niche to connect with students and families <br className='hidden lg:block' />throughout the school search process.</p>
                <div className='flex gap-2 items-center'>
                    <FaCheckCircle className='text-blue-600 text-xl lg:text-2xl'></FaCheckCircle>
                    <a href="" className='text-[#102f25] font-semibold text-md underline'>Claim Your School</a>
                </div>
                <button className='px-5 py-2 lg:py-3 rounded-sm bg-[#237c3a] text-white font-semibold'>Learn More</button>
                
            </div>
            <div className='w-full relative'>
                <p className='rotate-90 absolute top-10 right-[75px] lg:right-36 text-[10px] font-semibold'>Dartmouth College</p>
                <p className='rotate-90 absolute bottom-5 -right-10 lg:bottom-24 lg:-right-10 font-semibold text-[10px]'>Nazareth Prep</p>
                <img className='lg:w-80 w-52 h-60 lg:h-80 object-cover rounded-xl' src={dartmouth} alt="" />
                <img className='lg:w-80 w-52 rounded-xl absolute -bottom-24 right-0' src={nazareth} alt="" />
                <img className='lg:w-44 w-24 left-20 -bottom-36 rounded-xl absolute lg:-bottom-10 lg:-left-20' src={stamp} alt="" />
            </div>
        </div>
        <div className='px-2 hidden lg:block lg:px-40 lg:py-14'>
            
            <div className="divider font-semibold text-md">Over 1,700 schools partner with Niche</div>
            <div className='flex items-center justify-between px-20 pb-10'>
                <img className='w-32' src={logo1} alt="" />
                <img className='w-32' src={logo2} alt="" />
                <img className='w-20' src={logo3} alt="" />
                <img className='w-32' src={logo4} alt="" />
            </div>
            
        </div>
        </div>
    );
};

export default Partner;