import React from 'react';

const Rating = () => {
    return (
        <div className="flex items-center justify-evenly container mx-auto p-8 text-white">
            <div>
                <h2 className='text-xl md:text-4xl font-bold'>50K+</h2>
                <p>Active Users</p>
            </div>
            <div className="divider divider-horizontal before:bg-white/50 after:bg-white/50"></div>
            <div>
                <h2 className='text-xl md:text-4xl font-bold'>200+</h2>
                <p>Premium Tools</p>
            </div>
            <div className="divider divider-horizontal before:bg-white/50 after:bg-white/50"></div>
            <div>
                <h2 className='text-xl md:text-4xl font-bold'>4.9</h2>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Rating;