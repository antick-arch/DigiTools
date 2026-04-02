import React from 'react';

const Footer = () => {
    return (
        <div className='pt-30 container mx-auto'>
            <div className='flex justify-between text-white pb-10'>
                <div>
                    <h2 className='text-3xl font-bold'>DigiTool</h2>
                    <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div>
                    <ul>
                        <li className='font-bold text-xl'>Product</li>
                        <li>Features </li>
                        <li>Pricing </li>
                        <li>Templates </li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='font-bold text-xl'>Product</li>
                        <li>Features </li>
                        <li>Pricing </li>
                        <li>Templates </li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='font-bold text-xl'>Product</li>
                        <li>Features </li>
                        <li>Pricing </li>
                        <li>Templates </li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <p className='font-bold text-xl'>Product</p>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>

                </div>
            </div>
            <div className="divider  before:bg-white/30 after:bg-white/30"></div>
            <div className='text-white flex justify-between'>
                <div>
                    <p>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex items-center gap-10'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;