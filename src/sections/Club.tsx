import ClubBg from '../static/img/club.webp';
import { AiFillHome } from 'react-icons/ai';
import { motion } from 'framer-motion';

import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import ParcoursCard from '../components/ClubCard';
import ScrollTop from '../components/ScrollTop';

const liVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Club() {
  return (
    <Section
      id='Club'
      bg={ClubBg}
      minHeightScreen={true}
      className='text-center md:text-left flex flex-col justify-around'
    >
      {/* CLUB CONTENT */}
      <SectionHeader sectionTitle='LE CLUB'>
        <AiFillHome className="icon" />
      </SectionHeader>
      <p className='px-4 md:px-20 wideScreen'>
        Notre club est une association à but non lucratif régie par la loi de 1901. Des randonnées sont proposées le{' '}
        <strong>Lundi après-midi</strong> et le <strong>Vendredi</strong> à la journée. Le Lundi,{' '}
        <strong>deux niveaux de difficultés</strong> sont possibles:
      </p>
      <motion.ul
        variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        initial='hidden'
        animate='visible'
        className='flex flex-col xl:flex-row xl:items-center gap-y-8 md:justify-around text-center mb-4 md:mb-12 wideScreen'
      >
        <motion.li variants={liVariants}>
          <ParcoursCard
            day='Lundi | Après - midi'
            location="Drôme ou Ardèche"
            frequency="Chaque semaine, 2 possibilités :"
            description1='&#x2022; Cool : 5 à 9 km (2-3 h environ)'
            description2="&#x2022; Classique : 10 à 14 km (200 à 500 m de dénivelé)"
          />
        </motion.li>
        <motion.li variants={liVariants}>
          <ParcoursCard
            day='Vendredi | Journée entière'
            location="Vaucluse, Gard ou Lozère (100 km max)"
            frequency="En alternance :"
            description1="&#x2022;  Semaine A : Jusqu'à 15 km"
            description2="&#x2022;  Semaine B : De 15 à 20 km"
          />
        </motion.li>
      </motion.ul>
      <div className='px-4 md:px-20 wideScreen'>
        <p>
          <strong>Une fois par an</strong> une sortie en bus est organisée et reste ouverte aux non-adhérents. Par
          exemple, des lieux tels que St Guilhèm le Désert, La St Baume, Les sentiers de Pagnol, mais aussi les
          carrières d’ocre de Rustrel, Le pont du Gard ou L’étang du Vaccarès ont déjà été visités.
        </p>
        <p>
          Afin de garder un côté <strong>convivial</strong>, tous les 2 mois un <strong>restaurant</strong> est organisé
          (vendredi soir ou samedi midi). <strong>En début d'année</strong>, la galette des rois est aussi l'occasion de
          se retrouver pour partager un moment festif. C'est également le cas <strong>fin Juin</strong> où un repas en
          plein air clôture la fin de saison. Le club participe financièrement à ces événements.
        </p>
      </div>
      <ScrollTop />
    </Section>
  );
}

export default Club;
