import ClubBg from '../static/img/club.jpg';
import { AiFillHome } from 'react-icons/ai';

import { BsFillPenFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FaHiking } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import ClubIcon from '../components/ClubIcon';
import SubSection from '../components/SubSection';
import ParcoursCard from '../components/ParcoursCard';



function Club() {
    return (
        <Section
            id='Club'
            bg={ClubBg}
        >
            {/* CLUB CONTENT */}
            <SectionHeader sectionTitle='LE CLUB'>
                <AiFillHome className="icon"/>
            </SectionHeader>
            <SubSection>
                <div className='text-center md:text-left md:px-8 xl:px-12 mb-4 md:mb-8'>
                        <p>Notre club est une association à but non lucratif régie par la loi de 1901.  Des randonnées sont  proposées le Lundi après-midi et le Vendredi à la journée. Le Lundi, deux niveaux de difficultés sont possible : 
                        </p>
                        {/* <p>St Guilhèm le Désert, La St Baume, Les sentiers de Pagnol, les îles Frioul, Les Baux, les carrières d’ocre de Rustrel, Le pont du Gard, De Gordes à Fontaine de Vaucluse, L’étang du Vaccarès et les Stes Marie de la mer, la cité templière de La Couvertoirade. 
                            
                            Afin de garder un côté convivial, chaque mois un restaurant est organisé (le vendredi soir en principe). Début Janvier, nous nous réunissons pour la galette des rois  à la salle St Martin avec projection sur grand écran des photos prises lors de nos randonnées. En fin de saison nous nous réunissons en plein air pour l’assemblée générale suivie d’un repas. Nous puisons dans l’argent des cotisations afin de participer à ces évènements.
                        </p> */}
                </div>
                <ul className='flex flex-col xl:flex-row gap-y-8 md:justify-around text-center mb-4 md:mb-8'>
                    <li>
                        <ParcoursCard 
                            day='Lundi | Après - midi'
                            level='2 niveaux'
                            description1='- Cool : 5 à 10 kms (2-3h environ)'
                            description2="- Plus difficile : 10 à 13 kms (200 à 300m de dénivelé)"
                        />
                    </li>
                    <li>
                        <ParcoursCard 
                            day='Vendredi | Journée entière'
                            level='Niveau confirmé'
                            description1='- De 15 à 20 km'
                            description2="- Dans un rayon de 120 km maximum jusqu'au Vaucluse, Isère, Gard, Hérault ou Lozère"
                        />
                    </li>
                </ul>
                <div className='text-center md:text-left md:px-8 xl:px-12 '>
                        <p>Une fois par an une sortie en bus est organisèe et est ouverte aux non-adhérents. Par exemple, des lieux tels que St Guilhèm le Désert, La St Baume, Les sentiers de Pagnol, mais aussi les carrières d’ocre de Rustrel, Le pont du Gard ou L’étang du Vaccarès ont dèja étés visités lors de ces rencontres. </p>
                        <p>
                            Afin de garder un côté convivial, tous les 2 mois un restaurant est organisé (le vendredi ou samedi soir). En début d'année, la galette des rois est aussi l'occasion de se retrouver pour partager un moment festif.  C'est également le cas à la fin Juin où un repas en plein air vient clôturer la fin de saison. Le club participe financierement à ces événements.
                        </p>
                </div>
                    {/* <ul className='md:flex md:flex-row md:justify-around '>
                        <li>
                            <ClubIcon iconDescription='Crée en Septembre 2004' >
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
                    </ul> */}
            </SubSection>

        </Section>
    );
}

export default Club;
