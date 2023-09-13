import ConseilsBg from '../static/img/conseils.jpg';
import Header from '../components/Header';

import { LuBackpack } from 'react-icons/lu';
import AdmissionFile from '../assets/Admission_Galopins.pdf'

function Rejoindre() {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${ConseilsBg})`,
    };

    return (
        <section 
            className='h-screen relative p-4 md:p-8 bg-center bg-cover w-full' 
            style={sectionStyle}
            id ="Rejoindre"
        >
            <Header/>
            {/* CONSEILS CONTENT */}
            <div className='md:p-4 xl:p-8'>
                <div className='flex items-center gap-x-4 mt-4 mb-16 md:mb-16 justify-center md:justify-start'>
                    <h2>NOUS REJOINDRE</h2>
                    <LuBackpack className="text-3xl md:text-4xl xl:text-5xl" />
                </div>
                <div className='text-center md:text-left md:px-8 xl:px-12 mb-4 md:mb-16'>
                    <p className='mb-8'>Pour rejoindre le club il est nécessaire de fournir un certificat médical validant l'aptitude à la randonnée ainsi qu'une copie d'attestation de responsabilité civile ou carte FFRP.
                    </p>
                    <p className='mb-8'>Les chaussures de randonnées sont obligatoires (baskets non autorisées). Une polaire et un coupe vent sont conseillés selon la saison. Les accompagnateurs se réservent le droit de refuser les personnes mal équipées.</p>
                    <p className='mb-8'>Un montant de 15€ ainsi que le formulaire d'inscription ci-dessous seront demandés afin de valiser l'adhésion. </p>

                    <a 
                        className='downloadLink'
                        href={AdmissionFile}
                        download ="Admission_Galopins.pdf"
                    >
                        DOCUMENT D'ADMISSION
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Rejoindre;
