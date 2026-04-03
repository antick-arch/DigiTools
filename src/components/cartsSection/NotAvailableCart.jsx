import { ShoppingCart } from 'lucide-react';
import React from 'react';

const NotAvailableCart = () => {
    return (
        <div className="h-100 flex flex-col bg-gray-100 rounded-2xl p-5">
            <h2 className="text-left text-2xl font-bold">Your Cart</h2>
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                <ShoppingCart size={50} />
                <p>Your cart is empty</p>
            </div>
        </div>


    );
};

export default NotAvailableCart;