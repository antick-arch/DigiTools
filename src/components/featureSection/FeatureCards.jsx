import React from 'react';
import FeatureInfoFeature from './FeatureInfoFeature';

const FeatureCards = ({feature}) => {
    return (
        <div className={`card w-96 ${feature.isFeatured?'bg-linear-to-r from-primary to-purple-500':'bg-base-100'} shadow-sm`}>
            <div className="card-body relative">
                {
                    feature.tag.toLowerCase() === "most popular" ? (<div className='absolute -top-3 left-35 rounded-full '>
                    <span className="badge badge-sm badge-warning">{feature.tag}</span>
                </div>):null
                }
                <div>
                    <div className='space-y-2'>
                        <h2 className={`text-2xl font-bold ${feature.isFeatured? 'text-white':'text-black'}`}>{feature.name}</h2>
                        <p className={feature.isFeatured?'text-white':'text-gray-500'}>{feature.description}</p>
                        <p className={feature.isFeatured?'text-white':'text-gray-500'}><span className={`font-bold text-xl ${feature.isFeatured? 'text-white':'text-black'}`} >${feature.price}</span>/Month</p>
                    </div>
                </div>
                <ul className={`mt-1 flex flex-col gap-2 text-xs ${feature.isFeatured?'text-white':'text-gray-500'}`}>
                    {
                        feature.features.map((featureInfo,index)=> <FeatureInfoFeature key={index} featureInfo={featureInfo} ></FeatureInfoFeature>)
                    }
                </ul>
                <div className="mt-3">
                    <button className={`btn ${feature.isFeatured?"btn-white text-black":"bg-linear-to-r from-primary to-purple-500 text-white"} btn-block border-none rounded-full`}>Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCards;