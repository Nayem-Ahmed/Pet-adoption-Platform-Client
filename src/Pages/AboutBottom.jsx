import React from 'react';
import a from '../assets/a.png';
import b from '../assets/b.png';
import c from '../assets/c.png';

const cardStyle = {
    boxShadow: '5px 5px 8px 8px rgba(0, 0, 0, 0.1)',
  };

const AboutBottom = () => {
    return (
        <div className='p-5 my-5 grid md:grid-cols-3 gap-5'>
            <div className="card  bg-base-100 xl md:border-b-2 md:border-red-500 rounded-md " style={cardStyle}>
                <div className="card-body">
                    <img className='w-12' src={a} alt="" />
                    <h2 className="card-title">We Heal Pets</h2>
                    <p className=''>Quick Veterinary Services</p>
                    <div className="card-actions justify-end">
                     </div>
                </div>
            </div>
            <div className="card  bg-base-100   md:border-b-2 md:border-red-500 rounded-md" style={cardStyle}>
                <div className="card-body">
                    <img className='w-12' src={b} alt="" />
                    <h2 className="card-title">We Care Pets</h2>
                    <p className=''>Pet Sheltering & Adoption</p>
                    <div className="card-actions justify-end">
                     </div>
                </div>
            </div>
            <div className="card  bg-base-100   md:border-b-2 md:border-red-500 rounded-md" style={cardStyle}>
                <div className="card-body">
                    <img className='w-12' src={c} alt="" />
                    <h2 className="card-title">We Love Pets</h2>
                    <p className=''>Show Love & Donate Us</p>
                    <div className="card-actions justify-end">
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBottom;