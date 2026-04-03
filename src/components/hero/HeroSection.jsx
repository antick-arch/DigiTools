import { CircleDot, Play } from 'lucide-react';
import React from 'react';
import bannerLogo from '../../assets/banner.png'
const HeroSection = () => {
    return (
        <div className='container mx-auto flex flex-col gap-5 md:flex-row justify-between items-center my-10 md:my-22'>
            <div className='left-side space-y-4'>
                <div className='flex rounded-full bg-[#e1e7ff] w-fit py-2 px-4 gap-1'>
                    <CircleDot color="#d860e1"/>
                    <h2 className='bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent font-bold'>New: AI-Powered Tools Available</h2>
                </div>
                <div className='space-y-4'>
                    <h2 className='font-extrabold text-3xl md:text-7xl text-[#101727FF] leading-[1.2]'>Supercharge Your <br />Digital Workflow</h2>
                    <p className='leading-7 text-[16px] md:text-[18px] text-[#627382FF]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br />Explore Products</p>
                </div>
                <div className='flex gap-4'>
                    <button className="btn bg-linear-to-r from-primary to-purple-500 text-white font-bold border-none rounded-full">Explore Products</button>
                    <button className="btn bg-linear-to-r from-primary to-purple-700 bg-clip-text text-transparent font-bold border border-purple-500 rounded-full"><Play color="#7c2fee" />Watch Demo</button>
                </div>
            </div>

            <div className='right-side'>
                <img src={bannerLogo} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;