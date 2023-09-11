import React from 'react';
import squiggle from '../../../assets/images/ranking/squiggle.png'
import ranking1 from '../../../assets/images/ranking/ranking-1.png'
import ranking2 from '../../../assets/images/ranking/ranking-2.png'
import ranking3 from '../../../assets/images/ranking/ranking-3.png'
const Ranking = () => {
    return (
        <div className='relative'>
            <div className='absolute block lg:hidden -top-7 fill-[#102f25] w-full h-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 45"><path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg></div>
            <div className='absolute hidden lg:block -top-5 fill-[#102f25] w-full h-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 45"><path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg></div>
            <div className='bg-[#102f25] lg:px-60 px-2 py-20'>
            <div className='text-center'>
            <p className='font-medium lg:text-lg text-[#d99800] mb-5 tracking-[2px]'>2023-24 RANKINGS</p>
            <h1 className='lg:text-3xl text-2xl px-5 lg:px-0 font-bold text-white'>Browse schools & colleges by “best of” lists.</h1>
            <div className='stroke-[#d99800] mx-auto my-5 stroke-[4] w-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
            <p className='text-white text-lg'>We combine the reviews and the data to put together <br className='hidden lg:block' /> these comprehensive lists to get you started.</p>
            </div>
            <div className='grid px-10 lg:px-20 mt-10 grid-cols-1 lg:grid-cols-3 lg:gap-10 lg:mx-auto'>
                <div className='flex gap-4 items-center lg:block rounded-lg hover:bg-[#0c241c] py-3'>
                    <img className='lg:mx-auto' src={ranking1} alt="" />
                    <button className='text-[#3aba0f] font-semibold underline lg:ml-7'>View Best Colleges</button>
                </div>
                <div className='flex gap-3 items-center lg:block rounded-lg hover:bg-[#0c241c] py-3'>
                    <img className='lg:mx-auto ml-2 w-[92px]' src={ranking2} alt="" />
                    <button className='text-[#3aba0f] font-semibold underline lg:ml-2 mt-1'>View Best K-12 Schools</button>
                </div>
                <div className='flex gap-5 items-center lg:block rounded-lg hover:bg-[#0c241c] py-3'>
                    <img className='lg:mx-auto ml-2 w-[85px]' src={ranking3} alt="" />
                    <button className='text-[#3aba0f] font-semibold underline lg:ml-7 mt-[2px]'>View Best Districts</button>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Ranking;