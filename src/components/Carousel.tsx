import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface CarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
  return (
    <Swiper 
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
      className="mb-4"
    >
      {children}
    </Swiper>
  );
}

export default Carousel;
