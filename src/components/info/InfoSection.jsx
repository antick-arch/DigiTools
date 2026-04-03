import React from 'react';
import userLogo from '../../assets/user.png';
import packageLogo from '../../assets/package.png';
import rocketLogo from '../../assets/rocket.png';
const InfoSection = () => {
    return (
        <div className='container mx-auto space-y-10'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-extrabold'>Get Started in 3 Steps</h2>
                <p className='text-[1rem] text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-3 place-items-center'>
                <div className='card w-95 h-95 text-center space-y-4 bg-white p-6'>
                    <div className="flex justify-end">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-primary to-purple-500 text-white">
                            <span>01</span>
                        </div>
                    </div>
                    <div className='rounded-full bg-gray-200 w-fit p-4 mx-auto'>
                        <img src={userLogo} alt="" />
                    </div>
                    <h2 className='text-2xl font-bold'>Create Account</h2>
                    <p className='line-clamp-2 text-[1rem] text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='card w-95 h-95 text-center space-y-4 bg-white p-6'>
                    <div className="flex justify-end">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-primary to-purple-500 text-white">
                            <span>02</span>
                        </div>
                    </div>
                    <div className='rounded-full bg-gray-200 w-fit p-4 mx-auto'>
                        <img src={packageLogo} alt="" />
                    </div>
                    <h2 className='text-2xl font-bold'>Choose Products</h2>
                    <p className='line-clamp-2 text-[1rem] text-gray-500'>Browse our catalog and select the tools
                        that fit your needs.</p>
                </div>
                <div className='card w-95 h-95 text-center space-y-4 bg-white p-6'>
                    <div className="flex justify-end">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-primary to-purple-500 text-white">
                            <span>03</span>
                        </div>
                    </div>
                    <div className='rounded-full bg-gray-200 w-fit p-4 mx-auto'>
                        <img src={rocketLogo} alt="" />
                    </div>
                    <h2 className='text-2xl font-bold'>Start Creating</h2>
                    <p className='line-clamp-2 text-[1rem] text-gray-500'>Download and start using your premium
                        tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;