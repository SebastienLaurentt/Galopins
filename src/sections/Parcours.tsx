import ParcoursBg from '../static/img/parcours.jpg';
import { GiStonePath } from 'react-icons/gi';

import Header from '../components/Header';



function Parcours() {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${ParcoursBg})`,
    };

    return (
        <section 
            className='h-screen relative p-4 bg-center bg-cover w-full' 
            style={sectionStyle}
            id ="Parcours"
        >
            <Header/>
            {/* Club CONTENT */}
            <div className='flex flex-col md:p-4 xl:p-8'>
                <div className='flex items-center gap-x-4 mb-4 md:mb-16 justify-center md:justify-start'>
                    <h2>LES PARCOURS</h2>
                    <GiStonePath className="text-3xl md:text-4xl xl:text-5xl" />
                </div>
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
                            Tous niveau
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
        </section>
    );
}

export default Parcours;
