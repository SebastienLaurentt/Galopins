import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import ScrollTop from "../components/ScrollTop";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import NewsBg from '../static/img/news.webp';

import { HiOutlineNewspaper } from "react-icons/hi2";
import axios from "axios";
import SubSection from "../components/SubSection";
import Carousel from "../components/Carousel";
import { SwiperSlide } from "swiper/react";

interface InfoData {
    title: string;
    date: string;
    description: string;
  }

function News() {
    const [infosData, setInfosData] = useState<InfoData[]>([]);

      // Fetch all Randos Data
    useEffect(() => {
        axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/last')
        .then(response => {
            setInfosData(response.data.data);
        })

    }, []); 


    return (
        <Section
            id='News'
            bg={NewsBg}
            minHeightScreen={false}
        >
            {/* CLUB CONTENT */}
            <SectionHeader sectionTitle='DERNIERES INFOS'>
                <HiOutlineNewspaper className="iconHome"/>
            </SectionHeader>
            <SubSection>
                <p className=" text-[16px] md:text-[24px] xl:text-[28px] text-center"> Les informations concernant les prochaines randonnées, sorties détente ou réunions concernant l'association, c'est ici ! </p>
                <Carousel>
                <ul className=''>
                        {infosData.map(info => (
                            <SwiperSlide>
                            <li className="text-center mb-10 mx-4 xl:mx-6">
                                <NewsCard
                                    title={info.title}
                                    date={info.date}
                                    description={info.description}

                                />
                            </li>
                            </SwiperSlide>
                        ))}
                </ul>
                </Carousel>
            </SubSection>
            <ScrollTop/>
    </Section>
    );
}

export default News;
