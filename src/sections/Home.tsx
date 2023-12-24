import HomeBg from '../static/img/home.webp';
import Header from '../components/Header';


import { BsFillPenFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FaHiking } from 'react-icons/fa';
import Section from '../components/Section';
import HomeIcon from '../components/HomeIcon';
import { motion } from 'framer-motion';
import { TbChristmasTree } from "react-icons/tb";

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
    <Section id='Accueil' bg={HomeBg} minHeightScreen={true} className='text-center flex flex-col justify-between '>
      <Header />
      <motion.div variants={containerVariants} initial='hidden' animate='visible' className=' px-4'>
        <motion.h1 variants={childVariants}>LES GALOPINS</motion.h1>
        <motion.h3 variants={childVariants} className='italic px-4 flex flex-row items-center justify-center'>
          <TbChristmasTree className="text-green-700 text-4xl" />
          Les Galopins vous souhaitent de joyeuses fêtes de fin d'année !
          <TbChristmasTree className="text-green-700 text-4xl" />
        </motion.h3>
      </motion.div>
      <motion.ul
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='flex flex-row justify-around md:justify-center xl:gap-x-8 2xl:gap-x-24 mb-6 md:mb-0 wideScreen'
      >
        <motion.li 
            variants={childVariants} 
            transition={{ delay: 0.8 }} >
          <HomeIcon iconDescription='Créé en Septembre 2004'>
            <BsFillPenFill className="iconHome" />
          </HomeIcon>
        </motion.li>
        <motion.li 
            variants={childVariants} 
            transition={{ delay: 1.0 }}>
          <HomeIcon iconDescription='70 adhérents en 2022'>
            <BsPeopleFill className="iconHome" />
          </HomeIcon>
        </motion.li>
        <motion.li 
            variants={childVariants} 
            transition={{ delay: 1.20 }}>
          <HomeIcon iconDescription='200 randonnées en 2022'>
            <FaHiking className="iconHome" />
          </HomeIcon>
        </motion.li>
      </motion.ul>
    </Section>
  );
}

export default Home;


