import PhotosBg from '../static/img/photos.webp';

import { MdOutlinePhotoCamera } from 'react-icons/md';

// @ts-ignore
import data from '../data/photosData.js'

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
    return (
        
        <Section
            id='Photos'
            bg={PhotosBg}
        >
            

            {/* CONSEILS CONTENT */}
            <SectionHeader sectionTitle='NOS PHOTOS'>
                <MdOutlinePhotoCamera className="icon"/>
            </SectionHeader>
            <SubSection>


                {/* PROJECTS CONTENT (IN CARROUSEL) */}
                <div className=''>
                    <Carousel>
                        {data.map((value: PhotoData) => {
                            return (
                                <SwiperSlide className="p-4" key={value.id}>
                                    <Card 
                                    key={value.id}
                                    mainImage={value.mainImage}
                                    description= {value.description}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Carousel>
                </div>
                
            </SubSection>
            <ScrollTop/>

        </Section>
        
    );
}

export default Photos;
