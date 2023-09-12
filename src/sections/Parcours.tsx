import ParcoursBg from '../static/img/parcours.jpg';
import { GiStonePath } from 'react-icons/gi';

import Header from '../components/Header';



function Parcours() {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${ParcoursBg})`,
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
                <div className='text-center md:text-left md:px-8 xl:px-12 mb-4 md:mb-32'>
                    <p>Les Galopins se déplacent toujours en covoiturage afin de limiter le nombre de voitures. Une participation est demandée à la personne transportée. Le covid nous obligeant d’être maximun à 4 par voiture le tarif est laissé à l’appréciation du conducteur (la base étant de 0.2€ du km).
                    </p>
                    <p>Afin de garder un côté convivial, chaque mois un restaurant est organisé (le vendredi soir en principe). Début Janvier, nous nous réunissons pour la galette des rois  à la salle St Martin avec projection sur grand écran des photos prises lors de nos randonnées. En fin de saison nous nous réunissons en plein air pour l’assemblée générale suivie d’un repas. Nous puisons dans l’argent des cotisations afin de participer à ces évènements.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Parcours;
