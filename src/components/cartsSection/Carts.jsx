import React from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';

const Carts = ({ carts, setCarts, totalPrice }) => {
    const handleCheckout = ()=>{
        toast.success(`Checkout Successfully`);
        setCarts([]);
    }
    return (
        <div className='container mx-auto rounded-2xl p-10 border border-gray-300'>
            <div className='space-y-4'>
                {
                    carts.map((cart, index) => <CartCard key={index} carts={carts} cart={cart} setCarts={setCarts} totalPrice={totalPrice}></CartCard>)
                }
            </div>
            <div className='flex justify-between my-4'>
                <p className='text-gray-500'>Total:</p>
                <h2 className='text-2xl font-bold'>${totalPrice.toFixed(2)}</h2>
            </div>
            <button onClick={handleCheckout} className='btn btn-primary w-full rounded-full '>Proceed to Checkout</button>
        </div>
    );
};

export default Carts;