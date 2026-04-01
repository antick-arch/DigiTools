import React from 'react';
import FeatureInfoFeature from './FeatureInfoFeature';

const FeatureCards = ({feature}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body relative">
                {
                    feature.tag.toLowerCase() === "most popular" ? (<div className='absolute -top-3 left-35 rounded-full '>
                    <span className="badge badge-sm badge-warning">{feature.tag}</span>
                </div>):null
                }
                <div>
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-bold">{feature.name}</h2>
                        <p className='text-gray-500'>{feature.description}</p>
                        <p className="text-gray-500"><span className='font-bold text-xl text-black'>${feature.price}</span>/Month</p>
                    </div>
                </div>
                <ul className="mt-1 flex flex-col gap-2 text-xs text-gray-500">
                    {
                        feature.features.map((featureInfo,index)=> <FeatureInfoFeature key={index} featureInfo={featureInfo} ></FeatureInfoFeature>)
                    }
                </ul>
                <div className="mt-3">
                    <button  className={"btn btn-primary btn-block border-none"}>Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCards;