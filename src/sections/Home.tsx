import HomeBg from '../static/img/home.webp';
import Header from '../components/Header';


import { BsFillPenFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FaHiking } from 'react-icons/fa';
import Section from '../components/Section';
import ClubIcon from '../components/ClubIcon';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // Délai entre les enfants
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <Section id='Accueil' bg={HomeBg} minHeightScreen={true} className='text-center flex flex-col justify-between'>
      <Header />
      <motion.div variants={containerVariants} initial='hidden' animate='visible' className='mb-48 px-4'>
        <motion.h1 variants={childVariants}>LES GALOPINS</motion.h1>
        <motion.h3 variants={childVariants} className='italic px-4'>
          Bienvenue sur le site de notre club de randonnée situé à Montélimar !
        </motion.h3>
      </motion.div>
      <motion.ul
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='flex flex-row justify-around md:justify-center xl:gap-x-8 2xl:gap-x-24 wideScreen'
      >
        <motion.li 
            variants={childVariants} 
            transition={{ delay: 0.8 }} >
          <ClubIcon iconDescription='Créé en Septembre 2004'>
            <BsFillPenFill className="icon" />
          </ClubIcon>
        </motion.li>
        <motion.li 
            variants={childVariants} 
            transition={{ delay: 1.0 }}>
          <ClubIcon iconDescription='70 adhérents en 2022'>
            <BsPeopleFill className="icon" />
          </ClubIcon>
        </motion.li>
        <motion.li 
            variants={childVariants} 
            transition={{ delay: 1.20 }}>
          <ClubIcon iconDescription='200 randonnées en 2022'>
            <FaHiking className="icon" />
          </ClubIcon>
        </motion.li>
      </motion.ul>
    </Section>
  );
}

export default Home;


