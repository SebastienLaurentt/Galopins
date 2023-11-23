import NewsCard from "../components/NewsCard";
import ScrollTop from "../components/ScrollTop";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import NewsBg from '../static/img/news.webp';

import { HiOutlineNewspaper } from "react-icons/hi2";

function News() {
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
            <ul className='flex flex-col xl:flex-row xl:items-center gap-y-8 md:justify-around text-center  wideScreen'>
                <li>
                    <NewsCard
                        day='Lundi | Après - midi'
                        location="Drôme ou Ardèche"
                        frequency="Chaque semaine, 2 possibilités :"
                        description1='&#x2022; Cool : 5 à 9 km (2-3 h environ)'
                        description2="&#x2022; Classique : 10 à 14 km (200 à 500 m de dénivelé)"

                    />
                </li>
                <li>
                    <NewsCard
                        day='Vendredi | Journée entière'
                        location="Vaucluse, Gard ou Lozère (100 km max)"
                        frequency="En alternance :"
                        description1="&#x2022;  Semaine A : Jusqu'à 15 km"
                        description2="&#x2022;  Semaine B : De 15 à 20 km"
                    />
                </li>
            </ul>
            <ScrollTop/>
    </Section>
    );
}

export default News;
