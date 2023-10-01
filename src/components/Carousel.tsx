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
    "--swiper-navigation-size": "30px",
  };
  
  return (
    <div className=''>
      <Swiper 
        style={swiperStyles}
        modules={[ Pagination, Navigation ]}
        slidesPerView={1}
        loop={false}
        centeredSlides={false}
        pagination={{
          type:'fraction',
          el: '.swiper-custom-pagination',
        }}
        navigation= {{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          390: { slidesPerView: 1.0, spaceBetween: 8 },
          768: { slidesPerView: 1.0, spaceBetween: 8 },
          1024: { slidesPerView: 2.0, spaceBetween: 8 },
          1280: { slidesPerView: 2.0, spaceBetween: 32 },
        }}
        className="px-2 md:px-4"
      >
        <div className=''>
          {children}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next "></div>
      </Swiper>
      <div className="swiper-custom-pagination"/>
      
    </div>
  );
}

export default Carousel;
