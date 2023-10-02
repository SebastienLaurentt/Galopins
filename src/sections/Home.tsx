import HomeBg from '../static/img/home.webp';
import Header from '../components/Header';


import { BsFillPenFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FaHiking } from 'react-icons/fa';
import Section from '../components/Section';
import ClubIcon from '../components/ClubIcon';
// import { motion } from 'framer-motion';

function Home() {
    // const fadeInAnimationsVariants = {
    //     initial: {
    //         opacity:0,
    //         y:100,
    //     },
    //     animate: () => ({
    //         opacity:1,
    //         y:0,
    //         transition:{
    //             delay:0.5,
    //         },
    //     }),
    // };

    return (
        <Section
            id='Accueil'
            bg={HomeBg}
            minHeightScreen={true}
            className='text-center flex flex-col justify-around'
        >
            <Header/>
            <h1>LES GALOPINS</h1>
            <h3 className='italic'>Bienvenue sur notre site internet ! </h3>
            <p className='px-4 md:px-20 wideScreen'>Nous sommes un club de randonnée situé à Montélimar, dans la Drôme, ayant pour but la découverte de la <strong>nature</strong> et du <strong>patrimoine</strong> dans la <strong>bonne humeur</strong> et en toute <strong>convivialité</strong>. Les randonnées ont lieu du <strong>1er Septembre au 30 Juin</strong>, les <strong>Lundis après-midi</strong> en alternance dans la Drôme et l'Ardèche ainsi que les <strong>Vendredis</strong>, à destination de la Drôme, l'Ardèche, le Gard, la Lozère ou encore le Vaucluse.  </p>
            <ul className='flex flex-row justify-around md:justify-center xl:gap-x-8 2xl:gap-x-24 wideScreen'>
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
        </Section>

    );
}

export default Home;
