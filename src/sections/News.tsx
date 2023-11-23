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
                        title='Lundi | Après - midi'
                        date="Drôme ou Ardèche"
                        description='&#x2022; Cool : 5 à 9 km (2-3 h environ)'

                    />
                </li>
                <li>
                    <NewsCard
                        title='Vendredi | Journée entière'
                        date="Vaucluse, Gard ou Lozère (100 km max)"
                        description="&#x2022;  Semaine A : Jusqu'à 15 km"
                    />
                </li>
            </ul>
            <ScrollTop/>
    </Section>
    );
}

export default News;
