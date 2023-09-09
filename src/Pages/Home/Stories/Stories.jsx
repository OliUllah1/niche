import React from 'react';
import abby1 from '../../../assets/images/stories/abby-1.webp';
import abby2 from '../../../assets/images/stories/abby-2.webp';
import abbyDesktop from '../../../assets/images/stories/abby-swoosh-desktop.png';
import stampFoundfrom from '../../../assets/images/stories/stamp-found.svg';
import quoteLeft from '../../../assets/images/stories/quote-left.png'
import quoteRight from '../../../assets/images/stories/quote-right.png'
import { FaCircle } from "react-icons/fa";
const Stories = () => {
    return (
        <div className='px-2 lg:px-10 py-20 flex gap-10 relative'>
            <img className='w-80 h-80 z-0 rounded-xl absolute top-20 right-3' src={abby2} alt="" />
            <img className='w-[678px] z-20 absolute top-64 -right-[23px]' src={abbyDesktop} alt="" />

            <div className='w-full mt-10'>
                <p className='text-[#237c3a] text-lg mb-8'>Real Niche Stories</p>
                <h1 className='text-[#102f25] font-bold text-3xl'>Niche has helped millions <br className='hidden lg:block' /> of students and families<br className='hidden lg:block' /> find their fit.</h1>
                <div className='px-20 mt-10 py-5 relative'>
                    <img className='w-10 absolute top-0 left-10' src={quoteLeft} alt="" />
                    <img className='w-12 absolute bottom-20 right-16' src={quoteRight} alt="" />
                    <p className='text-[#363d88] text-lg'>During my college search, I was having a difficult time narrowing down what i wanted in a school, so i used Niche to help. I especially liked looking at the rankings for different aspects of the college experience, like the campus,academics,and much more!</p>
                    <p className='text-[#363d88] text-md mt-5'>ABBY D.</p>
                    <div></div>
                    <div className='flex items-center justify-center gap-4 mt-8'>
                        <button><FaCircle className=''></FaCircle></button>
                        <button><FaCircle className='text-[#ddd]'></FaCircle></button>
                        <button><FaCircle className='text-[#ddd]'></FaCircle></button>
                    </div>
                </div>
            </div>
            <div className='w-full z-10 relative mt-32'>
                <img className='rounded-xl w-[430px] object-cover' src={abby1} alt="" />
                <img className='absolute w-48 bottom-3 right-24' src={stampFoundfrom} alt="" />
            </div>
        </div>
    );
};

export default Stories;