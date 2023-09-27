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

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handleDownloadClick = async () => {
    const imageUrls = dataToUse.map(item => item.mainImage);
    const zip = new JSZip();

    const promises = imageUrls.map(async (url, index) => {
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
    <Section id='Photos' bg={PhotosBg}>
      <SectionHeader sectionTitle='NOS PHOTOS'>
        <MdOutlinePhotoCamera className="icon md:mt-4"/>
      </SectionHeader>
      <SubSection>
        <div className='flex flex-wrap justify-center items-center gap-x-6 gap-y-2'>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <select id="dateSelect" value={selectedDate} onChange={handleDateChange} className=" md:cursor-pointer p-2 md:p-4 border border-gray-300 rounded-md text-black text-sm md:text-lg font-bold">
              <option className='font-bold' value="date1">18/09/2023 - SAVASSE</option>
              <option className='font-bold' value="date2">25/09/2023 - DIEULEFIT</option>
            </select>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center justify-center  md:cursor-pointer">
            <a 
                  className={`flex p-2 rounded-lg md:text-lg 2xl:text-2xl md:p-4 md:hover:bg-green-600 bg-green-800`}
                  onClick={handleDownloadClick}
              >
                  <div className='flex gap-x-2 items-center'>
                      TÉLÉCHARGER
                      <BiSolidDownload className=" text-lg md:text-2xl 2xl:text-3xl"/>
                  </div>
            </a>
          </div>
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
