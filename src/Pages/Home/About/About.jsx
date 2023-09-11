import React from 'react';
import { FaHeart } from "react-icons/fa";
import logo1 from '../../../assets/images/about/about-logo-1.png'
import logo2 from '../../../assets/images/about/about-logo-2.png'
import logo3 from '../../../assets/images/about/about-logo-3.webp'
import squiggle from '../../../assets/images/about/squiggle.png'
import stamp from '../../../assets/images/about/stamp-everything.svg'
import { FaCircle } from "react-icons/fa";



const About = () => {
    return (
            <div className='bg-[#237c3a] px-10 flex flex-col lg:flex-row lg:px-40 lg:py-28 py-16 relative'>
                <img className='absolute -bottom-20 left-[44%] w-40' src={stamp} alt="" />
                <div className='w-full lg:px-5 order-2 lg:order-1'>
                    <h1 className='px-2 ml-3 lg:ml-10 py-2 lg:py-[10px] shadow-md rounded bg-white w-[90px] lg:w-24 flex items-center gap-2 text-gray-500 text-xs lg:text-sm font-bold'>Your List <FaHeart className='text-[#237c3a]'></FaHeart></h1>
                    <div className=' ml-10 lg:ml-20 my-7'>
                    <div className='bg-white lg:w-[80%] flex items-center  lg:px-3 px-2 py-2 rounded-md gap-3'>
                        <div className='flex w-[280px] items-center gap-2 border-r-2'>
                            <img className='lg:w-14 w-12 rounded-md' src={logo1} alt="" />
                            <div>
                                <p className='font-bold text-xs lg:text-base text-[#102f25]'>Stony Brook University</p>
                                <div className='flex items-center mt-2 gap-2'>
                                    <FaCircle className='text-[#237c3a] lg:text-base text-xs'></FaCircle>
                                    <div>
                                        <p className='w-28 lg:w-[150px] py-[2px] lg:py-[3px] rounded-full bg-[#efefef] mb-1'></p>
                                        <p className='w-20 lg:w-28 py-[2px] lg:py-[3px] rounded-full bg-[#efefef]'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <button className='px-3 py-[3px] text-[9px] lg:text-xs font-semibold bg-[#c0e7ba] text-[#102f25] rounded-full' >Applied</button>
                        
                    </div>
                    </div>
                    <div className='mb-7 mr-7 lg:mr-0'>
                    <div className='bg-white lg:w-[80%] flex items-center  lg:px-3 px-2 py-2 rounded-md gap-3'>
                        <div className='flex lg:w-[280px] items-center gap-2 pr-10 border-r-2'>
                            <img className='lg:w-14 w-12 rounded-md' src={logo2} alt="" />
                            <div>
                                <div className='flex items-center gap-1'>
                                <p className='font-bold text-xs lg:text-base text-[#102f25]'>Pace University</p>
                                <FaCircle className='text-[#b9d7ee] lg:text-sm text-xs'></FaCircle>
                                </div>
                                <div className='flex items-center mt-2 gap-2'>
                                    <FaCircle className='text-[#237c3a] lg:text-base text-xs'></FaCircle>
                                    <div>
                                        <p className='w-28 lg:w-[150px] py-[2px] lg:py-[3px] rounded-full bg-[#efefef] mb-1'></p>
                                        <p className='w-20 lg:w-28 py-[2px] lg:py-[3px] rounded-full bg-[#efefef]'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <button className='px-3 py-[3px] text-[9px] lg:text-xs font-semibold bg-[#c0e7ba] text-[#102f25] rounded-full' >Researching</button>
                        
                    </div>
                    </div>
                    <div className='lg:ml-20 ml-14'>
                    <div className='bg-white lg:w-[80%] flex items-center  lg:px-3 px-2 py-2 rounded-md gap-3'>
                        <div className='flex w-[360px] items-center gap-2 pr-10 border-r-2'>
                            <img className='lg:w-14 w-12 rounded-md' src={logo3} alt="" />
                            <div>
                                <div className='flex items-center gap-1'>
                                <p className='font-bold text-xs lg:text-base text-[#102f25]'>Adelphi University</p>
                                <FaCircle className='text-[#b9d7ee] lg:text-sm text-xs'></FaCircle>
                                </div>
                                <div className='flex items-center mt-2 gap-2'>
                                    <FaCircle className='text-[#237c3a] lg:text-base text-xs'></FaCircle>
                                    <div>
                                        <p className='w-28 lg:w-[150px] py-[2px] lg:py-[3px] rounded-full bg-[#efefef] mb-1'></p>
                                        <p className='w-20 lg:w-28 py-[2px] lg:py-[3px] rounded-full bg-[#efefef]'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <button className='px-3 py-[3px] text-[9px] lg:text-xs font-semibold bg-[#c0e7ba] text-[#102f25] rounded-full' >Touring</button>
                        
                    </div>
                    </div>
                </div>
                <div className='w-full mb-16 lg:mt-0 text-white order-1 lg:order-2'>
                    <p className='lg:text-xl font-semibold tracking-[3px]'>STAY ON TRACK</p>
                    <h1 className='font-bold text-2xl lg:text-4xl my-5'>Tools to <br className='hidden lg:block' /> organize your <br /> school search.</h1>
                    <div className='stroke-white my-5 stroke-[4] w-40'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
                    <p className='mt-5 lg:text-lg mb-7'>We'll help you build your list, track <br className='hidden lg:block' /> your progress and get new <br className='hidden lg:block' /> recommendations as your search <br className='hidden lg:block' /> narrows.</p>
                    <button className='font-semibold text-lg lg:text-xl underline'>Start Exploring</button>
                </div>
            </div>
    );
};

export default About;