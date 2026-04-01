import React from 'react';

const Transform = () => {
    return (
        <div className='container mx-auto py-30 space-y-10'>
            <div className='text-center space-y-4'>
                <h2 className='text-white font-extrabold text-4xl'>Ready to Transform Your Workflow?</h2>
                <p className='text-gray-200'>Join thousands of professionals who are already using Digitools to work smarter. <br />
                    Start your free trial today.</p>
            </div>
            <div className='space-y-4'>
                <div className='flex items-center gap-3 justify-center'>
                    <button className='btn btn-white border-none rounded-full'>Explore Products</button>
                    <button className='btn btn-outline rounded-full text-white'>View Pricing</button>
                </div>
                <p className='text-gray-200 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transform;