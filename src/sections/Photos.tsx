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
import JSZip from 'jszip';
import { BiSolidDownload } from 'react-icons/bi';

interface PhotoData {
  id: number;
  mainImage: string;
}

function Photos() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('rando1');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleZoomClick = (image: string, index: number) => {
    setZoomedImage(image);
    setCurrentImageIndex(index);
  }

  
  const handleCloseZoom = () => {
    setZoomedImage(null);
  }

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % dataToUse.length;
    setZoomedImage(dataToUse[nextIndex].mainImage);
    setCurrentImageIndex(nextIndex);
  }

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + dataToUse.length) % dataToUse.length;
    setZoomedImage(dataToUse[prevIndex].mainImage);
    setCurrentImageIndex(prevIndex);
  }

  // PREVENT SCROLL WHEN ZOOM IN
  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [zoomedImage]);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  }

  const dataToUse = data[selectedDate].photos;

  // DOWLOAD IMG AS ZIP
  const handleDownloadClick = async () => {
    const imageUrls = dataToUse.map((item: PhotoData) => item.mainImage);
    const zip = new JSZip();

    const promises = imageUrls.map(async (url: string, index: number) => {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      zip.file(`image_${index + 1}.jpg`, arrayBuffer);
    });

    await Promise.all(promises);

    zip.generateAsync({ type: 'blob' })
      .then(content => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'images.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  return (
    <Section 
      id='Photos' 
      bg={PhotosBg}
      minHeightScreen={false}
    >
      <SectionHeader sectionTitle='NOS PHOTOS'>
        <MdOutlinePhotoCamera className="icon md:mt-4"/>
      </SectionHeader>
      <SubSection>
        <div className="mb-8 flex flex-wrap gap-2 justify-center items-center">
          <select
            id="dateSelect"
            value={selectedDate}
            onChange={handleDateChange}
            className="md:cursor-pointer p-2 md:p-4 border border-gray-300 rounded-md text-black text-sm md:text-lg font-bold"
          >
            {Object.keys(data).map(key => (
              <option
                key={key}
                className="font-bold"
                value={key}
              >{`${data[key].date} - ${data[key].localisation}`}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8 xl:mb-4 ">
          <Carousel>
            {dataToUse.map((value: PhotoData, index: number) => {
              return (
                <SwiperSlide className="" key={value.id}>
                  <Card 
                    key={value.id}
                    mainImage={value.mainImage}
                    onZoomClick={() => handleZoomClick(value.mainImage, index)}
                  />
                </SwiperSlide>
              );
            })}
          </Carousel>
        </div>

        <div className="mb-4 xl:mb-0 flex flex-wrap gap-2 justify-center items-center justify-center md:cursor-pointer">
          <a 
            className={`flex p-2 rounded-lg md:text-lg 2xl:text-2xl md:p-4 md:hover:bg-green-600 bg-green-800`}
            onClick={handleDownloadClick}
          >
            <div className='flex gap-x-2 items-center'>
              TÉLÉCHARGER LES PHOTOS
              <BiSolidDownload className=" text-lg md:text-2xl 2xl:text-3xl"/>
            </div>
          </a>
        </div>
      </SubSection>
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black bg-opacity-90 p-8"
          onClick={(e) => e.target === e.currentTarget && handleCloseZoom()}
        >
          <div className='mb-8 flex gap-x-6 xl:gap-x-12 md:text-xl'>
            <button className="text-white p-2 px-4 md:p-4 bg-green-800 rounded-xl md:hover:bg-green-600" onClick={handlePrevImage}>Précédent</button>
            <button className="text-white p-2 px-4 md:p-4 bg-green-800 rounded-xl md:hover:bg-green-600" onClick={handleNextImage}>Suivant</button>
          </div>
          <img 
            src={zoomedImage} 
            alt="" 
            className="h-[12rem] md:h-[32rem] xl:h-[44rem] 2xl:h-[56rem] rounded-[4rem] md:rounded-[8rem]"
          />
          
        </div>
      )}
      <ScrollTop/>
    </Section>
  );
}

export default Photos;
