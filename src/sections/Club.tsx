import ClubBg from '../static/img/club.webp';
import { AiFillHome } from 'react-icons/ai';


import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ParcoursCard from '../components/ClubCard';
import ScrollTop from '../components/ScrollTop';



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
                <div className=''>
                        <p>Notre club est une association à but non lucratif régie par la loi de 1901.  Des randonnées sont  proposées le <strong>Lundi après-midi</strong> et le <strong>Vendredi</strong> à la journée. Le Lundi, <strong>deux niveaux de difficultés</strong> sont possibles : 
                        </p>
                        {/* <p>St Guilhèm le Désert, La St Baume, Les sentiers de Pagnol, les îles Frioul, Les Baux, les carrières d’ocre de Rustrel, Le pont du Gard, De Gordes à Fontaine de Vaucluse, L’étang du Vaccarès et les Stes Marie de la mer, la cité templière de La Couvertoirade. 
                            
                            Afin de garder un côté convivial, chaque mois un restaurant est organisé (le vendredi soir en principe). Début Janvier, nous nous réunissons pour la galette des rois  à la salle St Martin avec projection sur grand écran des photos prises lors de nos randonnées. En fin de saison nous nous réunissons en plein air pour l’assemblée générale suivie d’un repas. Nous puisons dans l’argent des cotisations afin de participer à ces évènements.
                        </p> */}
                </div>
                <ul className='flex flex-col xl:flex-row xl:items-center gap-y-8 md:justify-around text-center mb-4 md:mb-12'>
                    <li>
                        <ParcoursCard 
                            day='Lundi | Après - midi'
                            description1='&#x2022; Cool : 5 à 9 km (2-3h environ)'
                            description2="&#x2022; Plus : 10 à 14 km (200 à 500 m de dénivelé)"
                            description3="&#x2022; Dans la Drôme ou l'Ardèche"
                        />
                    </li>
                    <li>
                        <ParcoursCard 
                            day='Vendredi | Journée entière'
                            description1="&#x2022; Jusqu'à 15 km"
                            description2="&#x2022; De 15 à 20 km"
                            description3="&#x2022; Dans un rayon de 100 km maximum jusqu'au Vaucluse, Gard ou Lozère"
                        />
                    </li>
                </ul>
                <div className=''>
                        <p><strong>Une fois par an</strong> une sortie en bus est organisée et reste ouverte aux non-adhérents. Par exemple, des lieux tels que St Guilhèm le Désert, La St Baume, Les sentiers de Pagnol, mais aussi les carrières d’ocre de Rustrel, Le pont du Gard ou L’étang du Vaccarès ont déja étés visités. </p>
                        <p>
                            Afin de garder un côté <strong>convivial</strong>, tous les 2 mois un <strong>restaurant</strong> est organisé (le vendredi soir ou samedi midi). <strong>En début d'année</strong>, la galette des rois est aussi l'occasion de se retrouver pour partager un moment festif.  C'est également le cas à la <strong>fin Juin</strong> où un repas en plein air vient clôturer la fin de saison. Le club participe financierement à ces événements.
                        </p>
                </div>
            </SubSection>
            <ScrollTop/>
        </Section>
    );
}

export default Club;
