import React from 'react';
import admissionLogo from '../../../assets/images/admission/direct-admissions-logo.webp'
import admissionbg from '../../../assets/images/admission/home-da.webp'
const Admissions = () => {
    return (
        <div className='relative'>
            <div className='hidden lg:block absolute -top-5 fill-[#f4ece7] w-full h-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 45"><path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg></div>
            <div className='absolute block lg:hidden -top-5 fill-[#f4ece7] w-full h-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 45"><path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg></div>
            <div className='lg:py-20 py-10 px-10 lg:px-40 lg:flex bg-[#f4ece7] items-start '>
            
            <div className='w-full'>
                <img className='w-60' src={admissionLogo} alt="" />
                <img className='block lg:hidden my-5' src={admissionbg} alt="" />
                <h2 className='font-bold text-[#102f25] text-2xl lg:text-3xl mt-8'>Get accepted without an <br className='hidden lg:block' /> application.</h2>
                <p className='text-[#464646] text-lg mt-7'>No application. No waiting.</p>
                <p className='text-[#464646]  text-lg'>With Direct Admissions, colleges can accept you based on <br className='hidden lg:block' /> the information in your Niche Profile.</p>
                <div className='mt-9 lg:flex gap-5 space-y-4 lg:space-y-0'>
                    <button className='bg-[#004436] w-full lg:w-60 px-7 py-4 lg:py-[7px] rounded-full font-semibold text-white'>Create a Niche Profile</button>
                    <button className='bg-white px-7 py-3 w-full lg:w-40 lg:py-[7px] rounded-full font-semibold text-lg border-[3px] border-[#004436] text-[#004436]'>Learn More</button>
                </div>
            </div>
            <div className='w-full hidden lg:block'>
                <img src={admissionbg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Admissions;