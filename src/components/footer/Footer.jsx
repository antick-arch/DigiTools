import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='pt-30 container mx-auto'>
            <div className='flex justify-between text-white pb-10'>
                <div>
                    <h2 className='text-3xl font-bold'>DigiTool</h2>
                    <p className='text-gray-300'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div>
                    <ul>
                        <li className='font-bold text-xl'>Product</li>
                        <li className='text-gray-300'>Features </li>
                        <li className='text-gray-300'>Pricing </li>
                        <li className='text-gray-300'>Templates </li>
                        <li className='text-gray-300'>Integrations</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='font-bold text-xl'>Company</li>
                        <li className='text-gray-300'>About </li>
                        <li className='text-gray-300'>Blog </li>
                        <li className='text-gray-300'>Careers </li>
                        <li className='text-gray-300'>Press</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='font-bold text-xl'>Resources</li>
                        <li className='text-gray-300'>Documentation</li>
                        <li className='text-gray-300'>Help Center</li>
                        <li className='text-gray-300'>Community</li>
                        <li className='text-gray-300'>Contact</li>
                    </ul>
                </div>
                <div className='space-y-3'>
                    <p className='font-bold text-xl'>Social Links</p>
                    <div className='flex gap-3'>
                        <button className='p-2 bg-white rounded-full text-black'><TbBrandInstagramFilled size={20}/></button>
                        <button className='p-2 bg-white rounded-full text-black'><FaSquareFacebook size={20}/></button>
                        <button className='p-2 bg-white rounded-full text-black'><RiTwitterXLine size={20}/></button>
                    </div>

                </div>
            </div>
            <div className="divider  before:bg-white/30 after:bg-white/30"></div>
            <div className='text-white flex justify-between'>
                <div>
                    <p className='text-gray-400'>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex items-center gap-10'>
                    <p className='text-gray-400'>Privacy Policy</p>
                    <p className='text-gray-400'>Terms of Service</p>
                    <p className='text-gray-400'>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;