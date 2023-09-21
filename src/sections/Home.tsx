import HomeBg from '../static/img/home.webp';
import Header from '../components/Header';


import { BsFillPenFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FaHiking } from 'react-icons/fa';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ClubIcon from '../components/ClubIcon';

function Home() {
    return (
        <Section
            id='Accueil'
            bg={HomeBg}
        >
            <Header/>
            <h1>LES GALOPINS</h1>
            {/* HERO CONTENT */}
            <SubSection
                className='text-center md:text-center items-center md:p-12 xl:p-20'
            >
                <h3 className='italic'>Bienvenue sur notre site internet ! </h3>
                <p>Nous sommes un club de randonnée situé à Montélimar, dans la Drôme, ayant pour but la découverte de la <strong>nature</strong> et du <strong>patrimoine</strong> dans la <strong>bonne humeur</strong> et en toute <strong>convivialité</strong>. Les randonnées ont lieu du <strong>1er Septembre au 30 Juin</strong>, les <strong>Lundis après-midi</strong> en alternance dans la Drôme et l'Ardèche ainsi que les   <strong>Vendredis</strong>, à destination de la Drôme, l'Ardèche, le Gard, la Lozère ou encore le Vaucluse.  </p>
                <ul className='mt-4 flex md:flex-row md:justify-around '>
                        <li>
                            <ClubIcon iconDescription='Créé en Septembre 2004' >
                                <BsFillPenFill className="icon" />
                            </ClubIcon>
                        </li>
                        <li>
                            <ClubIcon iconDescription='70 adhérents en 2022' >
                                <BsPeopleFill className="icon" />
                            </ClubIcon>
                        </li>
                        <li>
                        <ClubIcon iconDescription='200 randonnées en 2022' >
                            <FaHiking className="icon" />
                        </ClubIcon>
                        </li>
                    </ul>
            </SubSection>
        </Section>

    );
}

export default Home;
