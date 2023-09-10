import React from 'react';
import { FaHeart } from "react-icons/fa";
import logo1 from '../../../assets/images/about/about-logo-1.png'
import logo2 from '../../../assets/images/about/about-logo-2.png'
import logo3 from '../../../assets/images/about/about-logo-3.webp'
import squiggle from '../../../assets/images/about/squiggle.png'
import { FaCircle } from "react-icons/fa";



const About = () => {
    return (
        <>
            <div className='bg-[#237c3a] px-2 flex lg:px-40 py-28'>
                <div className='w-full px-5'>
                    <h1 className='px-2 ml-10 py-[10px] shadow-md rounded-lg bg-white w-24 flex items-center gap-2 text-gray-500 text-sm font-bold'>Your List <FaHeart className='text-[#237c3a]'></FaHeart></h1>
                    <div className=' ml-20 my-7'>
                    <div className='bg-white w-[80%] flex items-center  px-3 py-2 rounded-md gap-3'>
                        <div className='flex w-[280px] items-center gap-2 border-r-2'>
                            <img className='w-14 rounded-md' src={logo1} alt="" />
                            <div>
                                <p className='font-bold text-[#102f25]'>Stony Brook University</p>
                                <div className='flex items-center mt-2 gap-2'>
                                    <FaCircle className='text-[#237c3a]'></FaCircle>
                                    <div>
                                        <p className='w-[150px] py-[3px] rounded-full bg-[#efefef] mb-1'></p>
                                        <p className='w-[100px] py-[3px] rounded-full bg-[#efefef]'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <button className='px-5 py-1 text-sm font-semibold bg-[#c0e7ba] text-[#102f25] rounded-full' >Applied</button>
                        
                    </div>
                    </div>
                    <div className='mb-7'>
                    <div className='bg-white w-[75%] flex items-center  px-3 py-2 rounded-md gap-3'>
                        <div className='flex w-[280px] items-center gap-2 pr-10 border-r-2'>
                            <img className='w-14 rounded-md' src={logo2} alt="" />
                            <div>
                                <div className='flex items-center gap-1'>
                                <p className='font-bold text-[#102f25]'>Pace University</p>
                                <FaCircle className='text-[#b9d7ee] text-sm'></FaCircle>
                                </div>
                                <div className='flex items-center mt-2 gap-2'>
                                    <FaCircle className='text-[#237c3a]'></FaCircle>
                                    <div>
                                        <p className='w-[150px] py-[3px] rounded-full bg-[#efefef] mb-1'></p>
                                        <p className='w-[100px] py-[3px] rounded-full bg-[#efefef]'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <button className='px-5 py-1 text-sm font-semibold bg-[#b9d7ee] text-[#102f25] rounded-full' >Researching</button>
                        
                    </div>
                    </div>
                    <div className='ml-20'>
                    <div className='bg-white w-[80%] flex items-center  px-3 my-5 py-2 rounded-md gap-3'>
                        <div className='flex w-[360px] items-center gap-2 pr-10 border-r-2'>
                            <img className='w-14 rounded-md' src={logo3} alt="" />
                            <div>
                                <div className='flex items-center gap-1'>
                                <p className='font-bold text-[#102f25]'>Adelphi University</p>
                                <FaCircle className='text-[#b9d7ee] text-sm'></FaCircle>
                                </div>
                                <div className='flex items-center mt-2 gap-2'>
                                    <FaCircle className='text-[#237c3a]'></FaCircle>
                                    <div>
                                        <p className='w-[150px] py-[3px] rounded-full bg-[#efefef] mb-1'></p>
                                        <p className='w-[100px] py-[3px] rounded-full bg-[#efefef]'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <button className='px-5 py-1 text-sm font-semibold bg-[#b9d7ee] text-[#102f25] rounded-full' >Touring</button>
                        
                    </div>
                    </div>
                </div>
                <div className='w-full text-white'>
                    <p className='text-xl font-semibold'>STAY ON TRACK</p>
                    <h1 className='font-bold text-4xl my-5'>Tools to <br className='hidden lg:block' /> organize your <br className='hidden lg:block' /> school search.</h1>
                    <img className='w-40' src={squiggle} alt="" />
                    <p className='mt-5 text-lg mb-7'>We'll help you build your list, track <br className='hidden lg:block' /> your progress and get new <br className='hidden lg:block' /> recommendations as your search <br className='hidden lg:block' /> narrows.</p>
                    <button className='font-semibold text-xl underline'>Start Exploring</button>
                </div>
            </div>
        </>
    );
};

export default About;