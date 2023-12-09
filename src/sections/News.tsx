import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import ScrollTop from "../components/ScrollTop";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import NewsBg from '../static/img/news.webp';

import { HiOutlineNewspaper } from "react-icons/hi2";
import axios from "axios";
import SubSection from "../components/SubSection";

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
            minHeightScreen={true}
            className='text-center md:text-left flex flex-col justify-around'
        >
            {/* CLUB CONTENT */}
            <SectionHeader sectionTitle='LES DERNIERES INFOS'>
                <HiOutlineNewspaper className="icon"/>
            </SectionHeader>
            <SubSection>
            <p className="text-xl"> Les informations concernant les prochaines randonnées, sorties détente ou réunions concernant l'association, c'est ici ! </p>
            <ul className='flex flex-col xl:flex-row  gap-x-16 xl:justify-center gap-y-8 items-center text-center w-full'>
                    {infosData.map(info => (
                        <li className="  xl:w-1/3">
                            <NewsCard
                                title={info.title}
                                date={info.date}
                                description={info.description}

                            />
                    </li>
                    ))}
            </ul>
            </SubSection>
            <ScrollTop/>
    </Section>
    );
}

export default News;
