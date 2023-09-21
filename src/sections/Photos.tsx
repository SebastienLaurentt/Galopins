import RejoindreBg from '../static/img/rejoindre.webp';

import { MdOutlinePhotoCamera } from 'react-icons/md';

import AdmissionFile from '../assets/Admission_Galopins.pdf'
import DownloadLink from '../components/DownloadLink';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ScrollTop from '../components/ScrollTop';

function Rejoindre() {
    return (
        
        <Section
            id='Photos'
            bg={RejoindreBg}
        >
            

            {/* CONSEILS CONTENT */}
            <SectionHeader sectionTitle='NOS PHOTOS'>
                <MdOutlinePhotoCamera className="icon"/>
            </SectionHeader>
            <SubSection>
                <div className='flex flex-col  items-center md:items-start'>
                    <p className='mb-8'>Pour <strong>rejoindre</strong> le club il est nécessaire de fournir un certificat médical validant l'aptitude à la randonnée ainsi qu'une copie d'attestation de responsabilité civile ou carte FFRP.
                    </p>
                    <p className='mb-8'>Les chaussures de randonnées sont <strong>obligatoires</strong> (baskets non autorisées). Une polaire et un coupe vent sont conseillés selon la saison. Les accompagnateurs se réservent le droit de refuser les personnes mal équipées.</p>
                    <p className='mb-3'>Un montant de 15€ ainsi que le formulaire d'inscription ci-dessous seront demandés afin de valider l'adhésion. </p>
                    <DownloadLink 
                        file={AdmissionFile}
                        fileName="Admission_Galopins.pdf"
                        linkName="BULLETIN D'ADHÉSION"
                        classname='md:ml-4'
                    />
                </div>
                
            </SubSection>
            <ScrollTop/>

        </Section>
        
    );
}

export default Rejoindre;
