import React, { useState } from 'react';
import CardContainer from './CardContainer';
import Carts from '../cartsSection/Carts';
import NotAvailableCart from '../cartsSection/NotAvailableCart';

const CardDiv = ({ cardPromise, carts, setCarts, totalPrice }) => {
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
                    <button onClick={() => setTabs('products')} className={`btn ${tabs === 'products' ? 'bg-linear-to-r from-primary to-purple-500 text-white' : 'bg-white'} rounded-full border-none`}>Products</button>
                    <button onClick={() => setTabs('carts')} className={`btn ${tabs === 'carts' ? 'bg-linear-to-r from-primary to-purple-500 text-white' : 'bg-white'} rounded-full border-none`}>Cart ({carts.length})</button>
                </div>
            </div>
            <div>
                {
                    tabs === 'products' && (<CardContainer cardPromise={cardPromise} carts={carts} setCarts={setCarts}></CardContainer>) ||
                    tabs === 'carts' && (carts.length !== 0 ? <Carts carts={carts} setCarts={setCarts} totalPrice={totalPrice}></Carts> : <NotAvailableCart></NotAvailableCart>)
                }
            </div>
        </div>
    );
};

export default CardDiv;