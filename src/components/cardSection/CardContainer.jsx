import React, { use } from 'react';
import Cards from './Cards';

const CardContainer = ({cardPromise}) => {
    const cardData = use(cardPromise).data;
    return (
        <div className='grid grid-cols-3 place-items-center gap-8'>
            {
                cardData.map(cardInfo => <Cards key={cardInfo.id} cardInfo={cardInfo}></Cards>)
            }
        </div>
    );
};

export default CardContainer;