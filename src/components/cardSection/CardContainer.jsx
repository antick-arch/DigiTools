import React, { use } from 'react';
import Cards from './Cards';

const CardContainer = ({cardPromise,carts, setCarts}) => {
    const cardData = use(cardPromise).data;
    return (
        <div className='grid grid-cols-3 place-items-center gap-8'>
            {
                cardData.map(cardInfo => <Cards key={cardInfo.id} cardInfo={cardInfo} carts={carts} setCarts = {setCarts}></Cards>)
            }
        </div>
    );
};

export default CardContainer;