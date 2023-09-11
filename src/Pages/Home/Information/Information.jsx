import React from 'react';
import squiggle from '../../../assets/images/banner/squiggle.webp'
import logo1 from '../../../assets/images/about/about-logo-1.png'
import logo2 from '../../../assets/images/about/about-logo-3.webp'
import { FaCircle,FaDollarSign } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

const Information = () => {
    useEffect(()=>{
        Aos.init({duration:500})
    },[])
    return (
        <div className='lg:flex'>
            <div className='w-[100%] bg-white flex items-center justify-center'> 
            <div className='px-10 lg:px-20 py-20'>
            <p className='text-[#237c3a] font-medium mb-5 tracking-[2px]'>CHOOSE YOUR SCHOOL</p>
            <h1 className='text-[#237c3a] font-bold text-[22px] lg:text-3xl'>Everything you need to <br className='hidden lg:block' /> make your decision.</h1>
            <div className='stroke-[#237c3a] my-5 stroke-[4] w-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
            <p className='text-[#333] lg:text-lg '>With the information you care about on every <br className='hidden lg:block' /> school in America, we make it easy for you to <br className='hidden lg:block' /> compare schools and colleges to make your <br className='hidden lg:block' /> decision.</p>
            <button className='mt-7 text-[#237c3a] font-bold text-lg underline mb-3'>Compare K-12 Schools</button> <br />
            <button className='text-[#237c3a] font-bold text-lg underline'>Compare Colleges</button>
            </div>
            </div>
            <div className='w-full bg-[#ff9800] flex justify-center'>
                <div className='py-20 flex gap-7 lg:gap-10'>
                    <div className='w-32 lg:w-48 bg-white rounded-xl' data-aos="zoom-in">
                        <img className='w-full h-20 lg:h-24 rounded-t-lg' src={logo2} alt="" />
                        <div className='lg:p-5 p-3'>
                        <FaCircle className='mb-1 mt-2 text-2xl lg:text-4xl text-[#237c3a]'></FaCircle>
                        <h3 className='font-bold text-xs lg:text-2xl'>UCLA</h3>
                        <div className='lg:mt-5 mt-2 space-y-2 lg:space-y-4'>
                            <div>
                                <p className='text-[#102f25] font-bold lg:font-medium lg:text-base text-[9px]'>Acceptance Rate</p>
                                <h5 className='text-[#237c3a] font-semibold lg:text-2xl text-lg'>16%</h5>
                            </div>
                            <div>
                                <p className='text-[#102f25] font-bold lg:font-medium lg:text-base text-[9px]'>Net Price</p>
                                <h5 className='flex items-center text-[#237c3a] font-semibold text-sm lg:text-2xl'><FaDollarSign></FaDollarSign> 18,522</h5>
                            </div>
                            <div>
                                <p className='text-[#102f25] font-bold lg:font-medium lg:text-base text-[9px]'>SAT Range</p>
                                <h5 className='text-[#237c3a] font-semibold lg:text-2xl text-sm'>1300-1530</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='w-32 lg:w-48 bg-white rounded-xl' data-aos="zoom-in">
                        <img className='w-full h-20 lg:h-24 rounded-t-lg' src={logo1} alt="" />
                        <div className='lg:p-5 p-3'>
                        <FaCircle className='mb-1 mt-2 text-2xl lg:text-4xl text-[#237c3a]'></FaCircle>
                        <h3 className='font-bold text-xs lg:text-2xl'>UC - Berkeley</h3>
                        <div className='lg:mt-5 mt-2 space-y-2 lg:space-y-4'>
                            <div>
                                <p className='text-[#102f25] font-bold lg:font-medium lg:text-base text-[9px]'>Acceptance Rate</p>

                                <h5 className='text-[#237c3a] font-semibold lg:text-2xl text-lg'>16%</h5>
                            </div>
                            <div>
                                <p className='text-[#102f25] font-bold lg:font-medium lg:text-base text-[9px]'>Net Price</p>
                                <h5 className='flex items-center text-[#237c3a] font-semibold text-sm lg:text-2xl'><FaDollarSign></FaDollarSign> 18,522</h5>
                            </div>
                            <div>
                                <p className='text-[#102f25] font-bold lg:font-medium lg:text-base text-[9px]'>SAT Range</p>
                                <h5 className='text-[#237c3a] font-semibold lg:text-2xl text-sm'>1300-1530</h5>
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