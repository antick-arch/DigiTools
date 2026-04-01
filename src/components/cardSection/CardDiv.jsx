import React from 'react';
import CardContainer from './CardContainer';

const CardDiv = ({cardPromise}) => {
    return (
        <div className='my-30 container mx-auto space-y-7'>
            <div className='space-y-4'>
                <div className='text-center space-y-4'>
                <h2 className='text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='text-[1rem] text-gray-500'>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>
            </div>
            <div className='border-2 border-gray-100 w-fit mx-auto p-1 rounded-full'>
                <button className='btn btn-primary rounded-full border-none'>Products</button>
                <button className='btn bg-white rounded-full border-none'>Cart (2)</button>
            </div>
            </div>
            <div>
                <CardContainer cardPromise={cardPromise}></CardContainer>
            </div>
        </div>
    );
};

export default CardDiv;