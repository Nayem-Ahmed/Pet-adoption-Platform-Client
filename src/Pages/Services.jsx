import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
 
import 'swiper/css/pagination';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import SwiperCard from './SwiperCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then((response) => response.json())
        .then((data) => setServices(data))
        .catch((error) => console.error('Error fetching services:', error));
    },[])
    return (
        <>
        <Swiper 
         
          spaceBetween={5}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Autoplay]}
       
          breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }}
          
        >
          <div>

            {
                services.map(slider=> <SwiperSlide key={slider.id} className='p-5'>
                    <SwiperCard cardinfo={slider}></SwiperCard>
                    </SwiperSlide>)
            }
          </div>
 
        </Swiper>
        
      </>
    );
};

export default Services;