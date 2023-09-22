import { useState, useEffect } from 'react';
import PhotosBg from '../static/img/photos.webp';
import { MdOutlinePhotoCamera } from 'react-icons/md';

// @ts-ignore
import data from '../data/photosData.js';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ScrollTop from '../components/ScrollTop';
import Carousel from '../components/Carousel';
import Card from '../components/Card.js';
import { SwiperSlide } from 'swiper/react';

interface PhotoData {
  id: number;
  mainImage: string;
  description: string;
}

function Photos() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleZoomClick = (image: string) => {
    setZoomedImage(image);
  }

  const handleCloseZoom = () => {
    setZoomedImage(null);
  }

  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [zoomedImage]);

  return (
    <Section id='Photos' bg={PhotosBg}>
      <SectionHeader sectionTitle='NOS PHOTOS'>
        <MdOutlinePhotoCamera className="icon"/>
      </SectionHeader>
      <SubSection>
        <div className="">
          <Carousel>
            {data.map((value: PhotoData) => {
              return (
                <SwiperSlide className="p-4" key={value.id}>
                  <Card 
                    key={value.id}
                    mainImage={value.mainImage}
                    description={value.description}
                    onZoomClick={handleZoomClick}
                  />
                </SwiperSlide>
              );
            })}
          </Carousel>
        </div>
      </SubSection>
      {zoomedImage && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 p-12" onClick={handleCloseZoom}>
          <img 
            src={zoomedImage} 
            alt="" 
            className="max-w-full max-h-full object-contain rounded-[12rem]"
          />
        </div>
      )}
      <ScrollTop/>
    </Section>
  );
}

export default Photos;
