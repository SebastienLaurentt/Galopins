import { Swiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CarouselProps {
  children: React.ReactNode;
}

interface CustomSwiperStyles {
  [key: string]: string; 
}

function Carousel({ children }: CarouselProps) {
  const swiperStyles: CustomSwiperStyles = {
    "--swiper-navigation-color": "#FFFFFF",
    "--swiper-navigation-margin": "0", 
  };
  
  return (
    <Swiper 
      style={swiperStyles}
      modules={[ Pagination, Navigation ]}
      slidesPerView={1}
      spaceBetween={16}
      loop={false}
      centeredSlides={false}
      pagination={
        {type:'fraction',}
      }
      navigation= {{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        390: { slidesPerView: 1.0, spaceBetween: 8 },
        768: { slidesPerView: 1.0, spaceBetween: 8 },
        1024: { slidesPerView: 2.0, spaceBetween: 16 },
        1280: { slidesPerView: 2.0, spaceBetween: 32 },
      }}
      className=""
    >
      <div className=''>
        {children}
      </div>
      <div className="swiper-button-prev h-4"></div>
      <div className="swiper-button-next h-4"></div>
    </Swiper>
  );
}

export default Carousel;
