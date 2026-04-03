import { useState } from 'react';
import Feature from './Feature';
import { toast } from 'react-toastify';
const Cards = ({cardInfo,carts, setCarts}) => {
    const [btn,setBtn] = useState(false);
    const handleBuy = () =>{
        setBtn(true);
        const findCart = carts.find((item)=>item.id === cardInfo.id);
        if(findCart){
            toast.error(`${cardInfo.name} already added`);
            return;
        }
        toast.success(`${cardInfo.name} Added Cart Successfully`);
        setCarts([...carts,cardInfo]);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <div className='flex justify-end rounded-full'>
                    <span className={`badge badge-soft 
                        ${
                            cardInfo.tag.toLowerCase() === "popular"?'badge-primary':
                            cardInfo.tag.toLowerCase() === "best seller"?'badge-warning':
                            cardInfo.tag.toLowerCase() === "new"?'badge-success':'' 
                        }
                        `}>
                        {cardInfo.tag}
                        </span>
                </div>
                <div>
                    <div className='h-12 w-12 flex items-center mb-3 border border-gray-200 rounded-full p-2'>
                        <img className='w-full' src={cardInfo.icon} alt={cardInfo.name} />
                    </div>
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-bold">{cardInfo.name}</h2>
                        <p className='text-gray-500'>{cardInfo.description}</p>
                        <p className="text-gray-500"><span className='font-bold text-xl text-black'>${cardInfo.price}</span>/Mo</p>
                    </div>
                </div>
                <ul className="mt-1 flex flex-col gap-2 text-xs text-gray-500">
                    {
                        cardInfo.features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                    }
                </ul>
                <div className="mt-3">
                    <button onClick={handleBuy} className={`btn ${btn?"btn-success":"bg-linear-to-r from-primary to-purple-500 text-white"} btn-block border-none`}>{btn?"Added to Cart":"Buy Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;