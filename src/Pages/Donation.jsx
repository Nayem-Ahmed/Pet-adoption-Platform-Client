import React, { useEffect, useState } from 'react';
import { getCreatedonation } from '../Hooks/petlisting';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Donation = () => {
    const [donationData, setDonationData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const donationData = await getCreatedonation();
                setDonationData(donationData)
                const initAOS = setTimeout(() => {
                    AOS.init();
                  }, 100);
            } catch (error) {
                console.error('Error fetching donation data:', error);
            }
        };

        fetchData();

    }, []);
    const handleDonateNow = (donation) => {
        console.log(donation);
       
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5 p-4'>
        {
            donationData?.map(donation => (
                <div key={donation._id} className="card card-compact shadow-sm">
                     <img data-aos="flip-left" className='h-52 w-52 border-4 border-indigo-600 rounded-full' src={donation.petPicture} alt=" " /> 
                    <div className="card-body bg-gray-50">
                        <h2 className="card-title">{donation.lastDonationDate}</h2>
                        <h2 className="card-title">{donation.shortDescription}</h2>
                        <p className='text-lg'>Donation amount : {donation.maxDonation}</p>
                        <div className="card-actions">
                            <button onClick={() => handleDonateNow(donation)} className="btn btn-sm text-white bg-[#341f97]">Donate Now</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    );
};

export default Donation;
