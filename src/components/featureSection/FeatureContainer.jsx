import React, { use } from 'react';
import FeatureCards from './FeatureCards';

const FeatureContainer = ({featurePromise}) => {
    const featureData = use(featurePromise).data;
    return (
        <div className='container mx-auto space-y-10'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-extrabold'>Get Started in 3 Steps</h2>
                <p className='text-[1rem] text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-3 place-items-center gap-8'>
                {
                    featureData.map(feature=><FeatureCards key={feature.id} feature={feature}></FeatureCards>)
                }
            </div>
        </div>
    );
};

export default FeatureContainer;