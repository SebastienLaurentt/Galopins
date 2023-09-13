import ConseilsBg from '../static/img/conseils.jpg';
import Header from '../components/Header';

import { LuBackpack } from 'react-icons/lu';
import AdmissionFile from '../assets/Admission_Galopins.pdf'
import DownloadLink from '../components/DownloadLink';
import SectionHeader from '../components/SectionHeader';

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
                <SectionHeader sectionTitle='NOUS REJOINDRE'>
                    <LuBackpack className="sectionHeaderIcon"/>
                </SectionHeader>
                <div className='text-center md:text-left md:px-8 xl:px-12 mb-4 md:mb-16'>
                    <p className='mb-8'>Pour rejoindre le club il est nécessaire de fournir un certificat médical validant l'aptitude à la randonnée ainsi qu'une copie d'attestation de responsabilité civile ou carte FFRP.
                    </p>
                    <p className='mb-8'>Les chaussures de randonnées sont obligatoires (baskets non autorisées). Une polaire et un coupe vent sont conseillés selon la saison. Les accompagnateurs se réservent le droit de refuser les personnes mal équipées.</p>
                    <p className='mb-8'>Un montant de 15€ ainsi que le formulaire d'inscription ci-dessous seront demandés afin de valiser l'adhésion. </p>
                    <DownloadLink 
                        file={AdmissionFile}
                        fileName='Admission_Galopins.pdf'
                        linkName="DOCUMENT D'ADMISSION"
                    />
                </div>
            </div>
        </section>
    );
}

export default Rejoindre;
