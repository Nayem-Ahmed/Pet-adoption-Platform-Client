import React from 'react';
import ani from '../../public/ani.json'

const SwiperCard = ({cardinfo}) => {
    const {img,heading,description} = cardinfo
    console.log(cardinfo);
    return (
        <div className="card w-96  text-black bg-white  shadow-xl ">
            <div className="card-body ">
                <img className='w-32 rounded-full' src={img} alt="" />
                <h2 className="card-title text-red-500">{heading}</h2>
                <p>{description}</p>
                 
            </div>
        </div>
    );
};

export default SwiperCard;