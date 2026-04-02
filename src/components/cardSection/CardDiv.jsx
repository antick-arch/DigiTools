import React, { useState } from 'react';
import CardContainer from './CardContainer';
import Carts from '../cartsSection/Carts';

const CardDiv = ({cardPromise}) => {
    const [tabs, setTabs] = useState('products');
    return (
        <div className='my-30 container mx-auto space-y-7'>
            <div className='space-y-4'>
                <div className='text-center space-y-4'>
                <h2 className='text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='text-[1rem] text-gray-500'>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>
            </div>
            <div className='border-2 border-gray-100 w-fit mx-auto p-1 rounded-full'>
                <button onClick={()=>setTabs('products')} className={`btn ${tabs === 'products'? 'btn-primary': 'bg-white'} rounded-full border-none`}>Products</button>
                <button onClick={()=>setTabs('carts')} className={`btn ${tabs === 'carts'? 'btn-primary': 'bg-white'} rounded-full border-none`}>Cart (2)</button>
            </div>
            </div>
            <div>
                {
                    tabs === 'products' && (<CardContainer cardPromise={cardPromise}></CardContainer>) ||
                    tabs === 'carts' && (<Carts></Carts>)
                }
            </div>
        </div>
    );
};

export default CardDiv;