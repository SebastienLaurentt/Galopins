import { useState, useEffect } from 'react';
import PhotosBg from '../static/img/photos.webp';
import { MdOutlinePhotoCamera } from 'react-icons/md';
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
  const [selectedDate, setSelectedDate] = useState<string>('date1');

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

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  }

  const dataDate1 = [
    data[0],
    data[1],
    data[2],
    // ... (ajoutez les autres images pour la date 1)
  ];

  const dataDate2 = [
    data[3],
    data[4],
    data[5],
    // ... (ajoutez les autres images pour la date 2)
  ];

  const dataToUse = selectedDate === 'date1' ? dataDate1 : dataDate2;

  const locationInfo = [
    {
      date: 'date1',
      location: 'Randonnée à Savasse'
    },
    {
      date: 'date2',
      location: 'Randonnée à Dieulefit'
    },
    // Ajoutez d'autres informations de lieu si nécessaire
  ];

  const getLocationInfo = (selectedDate) => {
    const info = locationInfo.find(item => item.date === selectedDate);
    return info ? info.location : '';
  }

  return (
    <Section id='Photos' bg={PhotosBg}>
      <SectionHeader sectionTitle='NOS PHOTOS'>
        <MdOutlinePhotoCamera className="icon md:mt-4"/>
      </SectionHeader>
      <SubSection>
        <div className="flex justify-center items-center mb-4">
          <label htmlFor="dateSelect" className="mr-2 text-sm md:text-lg">Choisir une date :</label>
          <select id="dateSelect" value={selectedDate} onChange={handleDateChange} className="p-2 border border-gray-300 rounded-md text-black text-sm md:text-lg">
            <option value="date1">18/09/2023</option>
            <option value="date2">25/09/2023</option>
          </select>
        </div>
        <div className="text-center">
          <p>{getLocationInfo(selectedDate)}</p>
        </div>
        <div className="">
          <Carousel>
            {dataToUse.map((value: PhotoData) => {
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
            className="max-w-full max-h-full object-contain rounded-[4rem] md:rounded-[8rem]"
          />
        </div>
      )}
      <ScrollTop/>
    </Section>
  );
}

export default Photos;
