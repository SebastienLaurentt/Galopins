import ParcoursBg from '../static/img/parcours.jpg';
import { GiStonePath } from 'react-icons/gi';

import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';



function Parcours() {
    return (
        <Section
            id='Parcours'
            bg={ParcoursBg}
        >
            {/* <Header/> */}
            {/* PARCOURS CONTENT */}
            <div className='flex flex-col md:p-4 xl:p-8'>
                <SectionHeader sectionTitle='LES PARCOURS'>
                    <GiStonePath className="sectionHeaderIcon"/>
                </SectionHeader>
                <div className='text-center md:text-left md:px-8 xl:px-12 mb-4 md:mb-16'>
                    <p>Les Galopins se déplacent toujours en covoiturage afin de limiter le nombre de voitures. Une participation est demandée à la personne transportée. Le covid nous obligeant d’être maximun à 4 par voiture le tarif est laissé à l’appréciation du conducteur (la base étant de 0.2€ du km).
                    </p>
                    <p>Les randonnées ont lieu du 1er Septembre à la mi-Juin tous les lundis après midi et vendredis à la journée.</p>
                </div>
                <div className='flex flex-col xl:flex-row gap-y-8 md:justify-around text-center'>
                    <div className='flex flex-col border rounded-lg p-4'>
                        <h3>
                            Lundi | Après - midi 
                        </h3>
                        <span className='italic mb-4'>
                            Tous niveaux
                        </span>
                        <ul >
                            <li>
                                - De 5 à 14 km
                            </li>
                            <li>
                               - Dans un rayon de 40 km maximum entre la Drôme et l'Ardèche
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col border rounded-lg p-4'>
                        <h3>
                            Vendredi | Journée entière
                        </h3>
                        <span className='italic mb-4'>
                            Niveau confirmé
                        </span>
                        <ul>
                            <li>
                                - De 15 à 20 km
                            </li>
                            <li>
                               - Dans un rayon de 120 km maximum jusqu'au Vaucluse, Isère, Gard, Hérault ou Lozère
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Parcours;
