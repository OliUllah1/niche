import React from 'react';
import abby1 from '../../../assets/images/stories/abby-1.webp';
import abby2 from '../../../assets/images/stories/abby-2.webp';
import abbyDesktop from '../../../assets/images/stories/abby-swoosh-desktop.png';
import abbyMobile from '../../../assets/images/stories/abby-swoosh-mobile.png';
import stampFoundfrom from '../../../assets/images/stories/stamp-found.svg';
import quoteLeft from '../../../assets/images/stories/quote-left.png'
import quoteRight from '../../../assets/images/stories/quote-right.png'
import { FaCircle } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

const Stories = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className='px-10 lg:px-28 py-20 lg:flex gap-10 relative  overflow-hidden'>
            <img className='w-80 hidden lg:block h-80 z-0 rounded-xl absolute top-20 right-3' src={abby2} alt="" data-aos="fade-down-left" />
            <img className='w-[678px] hidden lg:block z-20 absolute top-64 -right-[23px]' src={abbyDesktop} alt="" data-aos="zoom-in" />
            <img className='w-full lg:hidden -rotate-6 block z-20 absolute top-[285px] left-0' src={abbyMobile} alt="" />

            <div className='w-full mt-10'>
                <p className='text-[#237c3a] mb-8 tracking-[3px] uppercase'>Real Niche Stories</p>
                <h1 className='text-[#102f25] font-bold text-2xl lg:text-3xl'>Niche has helped millions <br className='hidden lg:block' /> of students and families<br className='hidden lg:block' /> find their fit.</h1>
                <div className='block lg:hidden px-16 my-5'>
                    <img className='rounded-xl' src={abby1} alt="" />
                </div>
                <div className='flex lg:hidden text-xs items-center justify-center gap-4 mt-8'>
                        <button><FaCircle className=''></FaCircle></button>
                        <button><FaCircle className='text-[#ddd]'></FaCircle></button>
                        <button><FaCircle className='text-[#ddd]'></FaCircle></button>
                    </div>
                <div className='lg:px-16 px-10 mt-10 py-5 relative'>
                    <img className='lg:w-14 w-10 absolute left-0 -top-3 lg:left-3' src={quoteLeft} alt="" />
                    <img className='lg:w-16 w-12 absolute bottom-12 lg:bottom-20 right-0 lg:right-6' src={quoteRight} alt="" />
                    <p className='text-[#363d88] lg:text-lg'>During my college search, I was having a difficult time narrowing down what i wanted in a school, so i used Niche to help. I especially liked looking at the rankings for different aspects of the college experience, like the campus,academics,and much more!</p>
                    <p className='text-[#363d88] text-md mt-5'>ABBY D.</p>
                    <div></div>
                    <div className='lg:flex hidden items-center justify-center gap-4 mt-8'>
                        <button><FaCircle className=''></FaCircle></button>
                        <button><FaCircle className='text-[#ddd]'></FaCircle></button>
                        <button><FaCircle className='text-[#ddd]'></FaCircle></button>
                    </div>
                </div>
            </div>
            <div className='w-full hidden lg:block z-10 relative mt-32' >
                <img  className='rounded-xl w-[430px] object-cover' src={abby1} alt="" data-aos="fade-up-right" />
                <img className='absolute w-44 bottom-3 right-10' src={stampFoundfrom} alt="" data-aos="zoom-in" />
            </div>
        </div>
    );
};

export default Stories;