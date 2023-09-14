import ClubBg from '../static/img/club.jpg';
import { AiFillHome } from 'react-icons/ai';

import { BsFillPenFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FaHiking } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';



function Club() {
    return (
        <Section
            id='Club'
            bg={ClubBg}
        >
            {/* CLUB CONTENT */}
            <div className='flex flex-col md:p-4 xl:p-8'>
                <SectionHeader sectionTitle='LE CLUB'>
                    <AiFillHome className="sectionHeaderIcon"/>
                </SectionHeader>
                <div className='text-center md:text-left md:px-8 xl:px-12 mb-4 md:mb-32'>
                    <p>Une fois par an, une sortie en bus est organisée et est ouverte aux non adhérents.  St Guilhèm le Désert, La St Baume, Les sentiers de Pagnol, les îles Frioul, Les Baux, les carrières d’ocre de Rustrel, Le pont du Gard, De Gordes à Fontaine de Vaucluse, L’étang du Vaccarès et les Stes Marie de la mer, la cité templière de La Couvertoirade. 
                    </p>
                    <p>Afin de garder un côté convivial, chaque mois un restaurant est organisé (le vendredi soir en principe). Début Janvier, nous nous réunissons pour la galette des rois  à la salle St Martin avec projection sur grand écran des photos prises lors de nos randonnées. En fin de saison nous nous réunissons en plein air pour l’assemblée générale suivie d’un repas. Nous puisons dans l’argent des cotisations afin de participer à ces évènements.
                    </p>
                </div>
                <div className='md:flex md:flex-row md:justify-around '>
                    <div className='flex flex-col items-center text-center gap-y-2'>
                        <BsFillPenFill className="text-3xl md:text-4xl xl:text-5xl" />
                        <span className='mb-8'>Crée en Septembre 2004</span>
                    </div>
                    <div className='flex flex-col items-center text-center gap-y-2'>
                        <BsPeopleFill className="text-3xl md:text-4xl xl:text-5xl" />
                        <span className='mb-8'>70 adhérents en 2022</span>
                    </div>
                    <div className='flex flex-col items-center text-center gap-y-2'>
                        <FaHiking className="text-3xl md:text-4xl xl:text-5xl" />
                        <span className='mb-8'>200 randonnées en 2022</span>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Club;
