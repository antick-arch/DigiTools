import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({carts,cart,setCarts}) => {
    const handleDelete=(cart)=>{
        toast.error(`${cart.name} deleted successfully`);
        const filterCart = carts.filter(del => del.id !== cart.id);
        setCarts(filterCart);
    }
    return (
        <div className='bg-gray-100 rounded-xl flex justify-between items-center p-4'>
            <div className='left flex items-center gap-3'>
                <div className='h-12 w-12 bg-white flex items-center border border-gray-200 rounded-full p-2'>
                    <img className='w-full' src={cart.icon} alt={cart.name} />
                </div>
                <div>
                    <h2 className='font-bold text-xl'>{cart.name}</h2>
                    <p className='text-[0.9rem] text-gray-500'>${cart.price}</p>
                </div>
            </div>
            <div className="right">
                <p onClick={()=>handleDelete(cart)} className='text-red-500 font-bold cursor-pointer'>Remove</p>
            </div>
        </div>
    );
};

export default CartCard;