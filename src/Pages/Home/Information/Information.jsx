import React from 'react';
import squiggle from '../../../assets/images/banner/squiggle.webp'
import logo1 from '../../../assets/images/about/about-logo-1.png'
import logo2 from '../../../assets/images/about/about-logo-3.webp'
import { FaCircle,FaDollarSign } from "react-icons/fa";
const Information = () => {
    return (
        <div className='flex'>
            <div className='w-[100%] bg-white flex items-center justify-center'> 
            <div className='p-20'>
            <p className='text-[#237c3a] font-medium text-xl mb-5'>CHOOSE YOUR SCHOOL</p>
            <h1 className='text-[#237c3a] font-bold text-3xl'>Everything you need to <br className='hidden lg:block' /> make your decision.</h1>
            <img className='w-44 my-5' src={squiggle} alt="" />
            <p className='text-[#333] text-lg '>With the information you care about on every <br className='hidden lg:block' /> school in America, we make it easy for you to <br className='hidden lg:block' /> compare schools and colleges to make your <br className='hidden lg:block' /> decision.</p>
            <button className='mt-7 text-[#237c3a] font-bold text-lg underline mb-4'>Compare K-12 Schools</button> <br />
            <button className='text-[#237c3a] font-bold text-lg underline'>Compare Colleges</button>
            </div>
            </div>
            <div className='w-[100%] bg-[#ff9800] flex justify-center'>
                <div className='p-20 flex gap-10'>
                    <div className='w-48 bg-white rounded-xl'>
                        <img className='w-full h-24 rounded-t-lg' src={logo2} alt="" />
                        <div className='p-5'>
                        <FaCircle className='mb-1 mt-2 text-4xl text-[#237c3a]'></FaCircle>
                        <h3 className='font-bold text-2xl'>UCLA</h3>
                        <div className='mt-5 space-y-4'>
                            <div>
                                <p className='text-[#102f25] font-medium'>Acceptance Rate</p>
                                <h5 className='text-[#237c3a] font-semibold text-2xl'>16%</h5>
                            </div>
                            <div>
                                <p className='text-[#102f25] font-medium'>Net Price</p>
                                <h5 className='flex items-center text-[#237c3a] font-semibold text-2xl'><FaDollarSign></FaDollarSign> 18,522</h5>
                            </div>
                            <div>
                                <p className='text-[#102f25] font-medium'>SAT Range</p>
                                <h5 className='text-[#237c3a] font-semibold text-2xl'>1300-1530</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='w-48 bg-white rounded-xl'>
                        <img className='w-full h-24 rounded-t-lg' src={logo1} alt="" />
                        <div className='p-5'>
                        <FaCircle className='mb-1 mt-2 text-4xl text-[#237c3a]'></FaCircle>
                        <h3 className='font-bold text-2xl'>UC - Berkeley</h3>
                        <div className='mt-5 space-y-4'>
                            <div>
                                <p className='text-[#102f25] font-medium'>Acceptance Rate</p>
                                <h5 className='text-[#237c3a] font-semibold text-2xl'>16%</h5>
                            </div>
                            <div>
                                <p className='text-[#102f25] font-medium'>Net Price</p>
                                <h5 className='flex items-center text-[#237c3a] font-semibold text-2xl'><FaDollarSign></FaDollarSign> 18,522</h5>
                            </div>
                            <div>
                                <p className='text-[#102f25] font-medium'>SAT Range</p>
                                <h5 className='text-[#237c3a] font-semibold text-2xl'>1300-1530</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Information;