import React from 'react';
import logo from '../../../assets/images/footer/green-niche-logo-01252021.svg'
import facebook from '../../../assets/images/footer/facebook.svg'
import discord from '../../../assets/images/footer/discord.svg'
import instagram from '../../../assets/images/footer/instagram.svg'
import tiktok from '../../../assets/images/footer/tiktok.svg'
import twitter from '../../../assets/images/footer/twitter.svg'
import youtube from '../../../assets/images/footer/youtube.svg'
import {FaAngleRight } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='px-2 lg:px-40 pb-28 lg:pt-0 pt-5'>
            <div className='flex items-center'>
                <div className='lg:w-20 w-full py-[1px] bg-[#dddddd] mr-2'></div>
                <img className='lg:w-32 w-20 lg:mt-5' src={logo} alt="" />
                <div className='w-full py-[1px] bg-[#dddddd] m-2'></div>
            </div>
            <h4 className='text-[#835f5f] text-lg lg:text-xl lg:ml-64 lg:-mt-5 mt-5 px-10'>Discover the schools, companies, and neighborhoods that are right for you.</h4>
            <div className='flex flex-col lg:flex-row  gap-10 mt-10'>
                <div className='lg:w-[35%] order-2 lg:order-1 px-10 lg:px-0 lg:pl-20'>
                    <ul className='text-[#2997da] lg:block grid grid-cols-2 space-y-1'>
                        <li><a className='hover:underline' href="">About Us</a></li>
                        <li><a className='hover:underline' href="">Niche For Schools</a></li>
                        <li><a className='hover:underline' href="">Niche For Colleges</a></li>
                        <li><a className='hover:underline' href="">Blog</a></li>
                        <li><a className='hover:underline' href="">Resource Center</a></li>
                        <li><a className='hover:underline' href="">Contact Niche</a></li>
                        <li><a className='hover:underline' href="">Data</a></li>
                        <li><a className='hover:underline' href="">Careers</a></li>
                        <li><a className='hover:underline' href="">Partnerships</a></li>
                        <li><a className='hover:underline' href="">Press</a></li>
                        <li><a className='hover:underline' href="">Do Not Sell My Personal</a></li>
                        <li><a className='hover:underline' href="">Information</a></li>
                        <li><a className='hover:underline' href="">Privacy Policy</a></li>
                        <li><a className='hover:underline' href="">User Agreement</a></li>
                        <li><a className='hover:underline' href="">Web Accessibility</a></li>
                        <li><a className='hover:underline' href="">Cookie Policy</a></li>
                        <li><a className='hover:underline' href="">Sitemap</a></li>
                        
                    </ul>
                    <div className='grid grid-cols-3 gap-2 px-20 lg:px-0 lg:pr-10 mt-5'>
                        <img className='bg-[#ff5b00] cursor-pointer w-9 rounded-full' src={instagram} alt="" />
                        <img className='bg-[#313285] cursor-pointer w-9 rounded-full' src={facebook} alt="" />
                        <img className='bg-[#007e31] cursor-pointer w-9 rounded-full' src={twitter} alt="" />
                        <img className='bg-[#003123] cursor-pointer w-9 rounded-full' src={tiktok} alt="" />
                        <img className='bg-[#8648de] cursor-pointer w-9 rounded-full' src={discord} alt="" />
                        <img className='bg-[#e63226] cursor-pointer w-9 rounded-full' src={youtube} alt="" />
                    </div>
                    <p className='text-[#237c3a] text-center lg:text-left text-xs mt-10'>&#169;2023 Niche.com Inc.</p>
                </div>
                <div className='w-full order-1 lg:order-2'>
                <ul className='flex items-center flex-col lg:flex-row  mb-10 lg:gap-14 text-[#237c3a] font-semibold tracking-[2px] uppercase text-sm lg:text-base'>
                    <li><a className='hover:underline' href="">K-12</a></li>
                    <li><a className='hover:underline' href="">Colleges</a></li>
                    <li><a className='hover:underline' href="">Graduate Schools</a></li>
                    <li><a className='hover:underline' href="">Places to Live</a></li>
                </ul>
                <hr />
                <div className='flex flex-col lg:flex-row  items-center gap-1 justify-center py-3'>
                    <p className='text-[#747692]'>Do you work for a school or college?</p>
                    <a className='flex items-center text-[#2997da] font-semibold hover:underline' href="">Claim Your School <FaAngleRight></FaAngleRight> </a>
                </div>
                <hr />
                <div className='mt-8 hidden lg:grid grid-cols-3'>
                    <div className=''>
                        <ul className='text-[#747692] space-y-1 text-xs'>
                            <li><a className='hover:underline' href="">College Rankings</a></li>
                            <li><a className='hover:underline' href="">Best Colleges</a></li>
                            <li><a className='hover:underline' href="">Best Christian Colleges</a></li>
                            <li><a className='hover:underline' href="">Best Liberal Arts Colleges</a></li>
                            <li><a className='hover:underline' href="">Best Value Colleges</a></li>
                            <li><a className='hover:underline' href="">Hardest Colleges to Get Into</a></li>
                            <li><a className='hover:underline' href="">Top Party Schools</a></li>
                            <li><a className='hover:underline' href="">Top Public Universities</a></li>
                            <li><a className='hover:underline' href="">College Scholarships</a></li>
                            <li><a className='hover:underline' href="">California Colleges</a></li>
                            <li><a className='hover:underline' href="">Florida Colleges</a></li>
                            <li><a className='hover:underline' href="">Ohio Colleges</a></li>
                            <li><a className='hover:underline' href="">New York Colleges</a></li>
                            <li><a className='hover:underline' href="">Pennsylvania Colleges</a></li>
                            <li><a className='hover:underline' href="">Texas Colleges</a></li>
                            <li><a className='hover:underline' href="">Companies in Austin</a></li>
                            <li><a className='hover:underline' href="">Companies in Boston</a></li>
                            <li><a className='hover:underline' href="">Companies in California</a></li>
                            <li><a className='hover:underline' href="">Companies in Denver</a></li>
                            <li><a className='hover:underline' href="">Companies in New York</a></li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='text-[#747692] space-y-1 text-xs'>
                            <li><a className='hover:underline' href="">K-12 School Rankings</a></li>
                            <li><a className='hover:underline' href="">Best School Districts</a></li>
                            <li><a className='hover:underline' href="">Best Elementary Schools</a></li>
                            <li><a className='hover:underline' href="">Best Middle Schools</a></li>
                            <li><a className='hover:underline' href="">Best High Schools</a></li>
                            <li><a className='hover:underline' href="">Best Private High Schools</a></li>
                            <li><a className='hover:underline' href="">Best Charter High Schools</a></li>
                            <li><a className='hover:underline' href="">Best Magnet High Schools</a></li>
                            <li><a className='hover:underline' href="">Best School Districts in California</a></li>
                            <li><a className='hover:underline' href="">Best School Districts in Michigan</a></li>
                            <li><a className='hover:underline' href="">Best School Districts in New Jersey</a></li>
                            <li><a className='hover:underline' href="">Best School Districts in New York</a></li>
                            <li><a className='hover:underline' href="">Best School Districts in Pennsylvania</a></li>
                            <li><a className='hover:underline' href="">Best School Districts in Texas</a></li>
                            <li><a className='hover:underline' href="">Best School Districts in Virginia</a></li>
                            <li><a className='hover:underline' href="">Companies in Pittsburgh</a></li>
                            <li><a className='hover:underline' href="">Companies in Seattle</a></li>
                            <li><a className='hover:underline' href="">Companies in Texas</a></li>
                            <li><a className='hover:underline' href="">Tech Companies</a></li>
                            <li><a className='hover:underline' href="">Financial Services Companies</a></li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='text-[#747692] space-y-1 text-xs'>
                            <li><a className='hover:underline' href="">Atlanta Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Austin Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Baltimore Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Boston Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Chicago Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Denver Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Houston Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Los Angeles Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Miami Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">New York City Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Philadelphia Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Pittsburgh Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">San Francisco Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Seattle Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Washington, D.C. Neighborhoods</a></li>
                            <li><a className='hover:underline' href="">Healthcare Organizations</a></li>
                            <li><a className='hover:underline' href="">Internet Companies</a></li>
                            <li><a className='hover:underline' href="">Energy Companies</a></li>
                            <li><a className='hover:underline' href="">Retail Companies</a></li>
                            <li><a className='hover:underline' href="">Insurance Companies</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;