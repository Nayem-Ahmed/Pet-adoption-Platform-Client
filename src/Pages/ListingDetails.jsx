import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AdoptModal from '../Components/AdoptModal';

const ListingDetails = () => {
    const petListing = useLoaderData();
    
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <div className='my-10 p-4 shadow-md'>
            <div className='flex flex-col md:flex-row gap-8 items-center'>
                <div className='aspect-w-3 aspect-h-4 w-64 md:w-96 relative overflow-hidden rounded-xl'>
                    <img
                        className='object-cover w-full h-full transition-transform transform hover:scale-105'
                        src={petListing.image}
                        alt='Product'
                    />

                </div>
                <div className='flex flex-col flex-1'>
                    <div className='font-semibold text-2xl mb-2'>{petListing.name}</div>
                    <div className=' text-xl mb-2'>category name: {petListing.category}</div>
                    <div className='font-light text-neutral-500 mb-2'>
                        location : {petListing.location}
                    </div>
                    <div className=' text-xl mb-2'>Age : {petListing.age}</div>

                    <Link onClick={openModal}>
                        <button className="btn mt-10 text-white w-full bg-[#30336b]">Adopt</button>
                    </Link>

                    <AdoptModal petListing={petListing} isOpen={isModalOpen} onRequestClose={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;