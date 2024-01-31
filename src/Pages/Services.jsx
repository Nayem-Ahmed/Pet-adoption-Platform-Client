import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import SwiperCard from './SwiperCard';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(()=>{
        fetch('./services.json')
        .then((response) => response.json())
        .then((data) => setServices(data))
        .catch((error) => console.error('Error fetching services:', error));
    },[])
    return (
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper "
          
        >
            {
                services.map(slider=> <SwiperSlide key={slider.id} >
                    <SwiperCard cardinfo={slider}></SwiperCard>
                    </SwiperSlide>)
            }
 
        </Swiper>
        
      </>
    );
};

export default Services;