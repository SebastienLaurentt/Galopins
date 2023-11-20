import { useState, useEffect } from 'react';
import PhotosBg from '../static/img/photos.webp';
import { MdOutlinePhotoCamera } from 'react-icons/md';

// @ts-ignore
import data from '../data/photosData.js';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ScrollTop from '../components/ScrollTop';
import axios from 'axios';
import Carousel from '../components/Carousel';
import Card from '../components/Card.js';
import { SwiperSlide } from 'swiper/react';



function Photos() {
  const [randosData, setRandosData] = useState([]); // State with all Rando Data
  const [selectedRandoName, setSelectedRandoName] = useState('Bulbizarre'); // State with name about the selected Rando


  // Fetch all Randos Data
  useEffect(() => {
    axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/')
    .then(response => {
      setRandosData(response.data.data);
    })

  }, []); 

  // Set the state of the 
  const handleRandoChange = (event) => {
    setSelectedRandoName(event.target.value);
  };

  // Collect datas of the selectedRando with find method to allow a match with his name 
  // between the states selectedRandoName and randosData 
  const selectedRandoData = randosData.find(rando => rando.name === selectedRandoName);


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
          id="photoSelect"
          value={selectedRandoName}
          onChange={handleRandoChange}
          className="md:cursor-pointer p-2 md:p-4 border border-gray-300 rounded-md text-black text-sm md:text-lg font-bold"
        >
          {randosData.map(rando => (
            <option
              key={rando.name}
              className="font-bold"
              value={rando.name}
            >
             {rando.date} - {rando.name}
            </option>
          ))}
        </select>
      </div>

        <div className='flex flex-wrap justify-center'>
        <p>{selectedRandoData ? selectedRandoData.description : "Chargement..."}</p>
        </div>

          
        <div className="mb-8 xl:mb-4 ">
          <Carousel>
            {selectedRandoData ? selectedRandoData.pictures.map((value) => {
              return (
                <SwiperSlide className="" key={value}>
                  <Card 
                    key={value}
                    mainImage={value}
                  />
                </SwiperSlide>
              );
            }) : "Chargement"}
          </Carousel>
        </div> 


      </SubSection>

      <ScrollTop/>
    </Section>
  );
}

export default Photos;
