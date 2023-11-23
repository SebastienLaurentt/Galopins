import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import ScrollTop from "../components/ScrollTop";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import NewsBg from '../static/img/news.webp';

import { HiOutlineNewspaper } from "react-icons/hi2";
import axios from "axios";

function News() {
    const [infosData, setInfosData] = useState([]); // State with all Rando Data

      // Fetch all Randos Data
    useEffect(() => {
        axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/')
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
            <div className="flex ">
                <ul className='flex   xl:items-center gap-y-8 md:justify-around text-center  wideScreen'>
                    {infosData.map(info => (
                        <li>
                        <NewsCard
                            title={info.title}
                            date={info.date}
                            description={info.description}

                        />
                    </li>
                    ))}
                </ul>
            </div>

            <ScrollTop/>
    </Section>
    );
}

export default News;
