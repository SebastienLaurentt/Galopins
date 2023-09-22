import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface CarouselProps {
  children: React.ReactNode;
}

interface CustomSwiperStyles {
  [key: string]: string; 
}

function Carousel({ children }: CarouselProps) {
  const swiperStyles: CustomSwiperStyles = {
    "--swiper-pagination-bullet-width": "12px",
    "--swiper-pagination-bullet-height": "12px",
    "--swiper-pagination-bullet-border-radius": "50%",
    "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-opacity": "1",
    "--swiper-pagination-color": "#22c55e",
    "--swiper-pagination-bullet-size": "8px",
    "--swiper-pagination-bullet-horizontal-gap": "6px"
  };
  
  return (
    <Swiper 
      style={swiperStyles}
      modules={[ Pagination ]}
      slidesPerView={1}
      spaceBetween={16}
      loop={false}
      centeredSlides={false}
      pagination={{ clickable: true }}
      breakpoints={{
        390: { slidesPerView: 1.0, spaceBetween: 8 },
        768: { slidesPerView: 1.0, spaceBetween: 8 },
        1024: { slidesPerView: 2.0, spaceBetween: 16 },
        1280: { slidesPerView: 2.0, spaceBetween: 32 },
      }}
      className=""
    >
      {children}
    </Swiper>
  );
}

export default Carousel;
