import React from 'react';
import squiggle from '../../../assets/images/ranking/squiggle.png'
import ranking1 from '../../../assets/images/ranking/ranking-1.png'
import ranking2 from '../../../assets/images/ranking/ranking-2.png'
import ranking3 from '../../../assets/images/ranking/ranking-3.png'
const Ranking = () => {
    return (
        <div className='bg-[#102f25] lg:px-60 px-2 py-20'>
            <div className='text-center'>
            <p className='font-medium text-lg text-[#d99800] mb-5'>2023-24 RANKINGS</p>
            <h1 className='text-3xl font-bold text-white'>Browse schools & colleges by “best of” lists.</h1>
            <img className='w-48 mx-auto my-5' src={squiggle} alt="" />
            <p className='text-white text-lg'>We combine the reviews and the data to put together <br className='hidden lg:block' /> these comprehensive lists to get you started.</p>
            </div>
            <div className='grid px-20 mt-10 grid-cols-1 lg:grid-cols-3 gap-10 mx-auto'>
                <div>
                    <img className='w-44 mt-3 mx-auto' src={ranking1} alt="" />
                    <button className='text-[#237c3a] font-semibold text-lg underline ml-7'>View Best Colleges</button>
                </div>
                <div>
                    <img className='w-40 mx-auto' src={ranking2} alt="" />
                    <button className='text-[#237c3a] font-semibold text-lg underline ml-5'>View Best Colleges</button>
                </div>
                <div className='mt-3'>
                    <img className='w-40 mx-auto' src={ranking3} alt="" />
                    <button className='text-[#237c3a] font-semibold text-lg underline ml-7'>View Best Colleges</button>
                </div>
            </div>
        </div>
    );
};

export default Ranking;