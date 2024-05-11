import React from 'react';
import b1 from '../../assets/b1.webp'
import b2 from '../../assets/b2.webp'
import b3 from '../../assets/b3.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Banner/SwiperCss/swiperr.css';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'backgroundImage':
              'url( )',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className='md:py-40 p-10 md:bg-cover bg-contain' style={{ backgroundImage: `url(${b1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}>
          <div className="title" data-swiper-parallax="-300">
            Explore Nature
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Embrace the Beauty
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className='text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='md:py-40 p-10 md:bg-cover bg-contain' style={{ backgroundImage: `url(${b3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}>
          <div className="title" data-swiper-parallax="-300">
            Adventure Awaits
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Dare to Dream
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className='text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className='md:p-40' style={{ backgroundImage: `url(${b2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}>

        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Banner;