import RejoindreBg from '../static/img/rejoindre.jpg';

import { LuBackpack } from 'react-icons/lu';
import { BsFillPenFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FaHiking } from 'react-icons/fa';

import AdmissionFile from '../assets/Admission_Galopins.pdf'
import DownloadLink from '../components/DownloadLink';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ScrollTop from '../components/ScrollTop';
import ClubIcon from '../components/ClubIcon';
import ContactButton from '../components/ContactButton';

function Rejoindre() {
    return (
        
        <Section
            id='Rejoindre'
            bg={RejoindreBg}
        >
            

            {/* CONSEILS CONTENT */}
            <SectionHeader sectionTitle='ADHÉSION'>
                <LuBackpack className="icon"/>
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
                    <ul className='mt-16 w-full md:flex md:flex-row md:justify-around '>
                        <li>
                            <ClubIcon iconDescription='Créé en Septembre 2004' >
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
                    </ul>
                    <div className='flex flex-col items-center  mx-auto mb-4 text-center'>
                        <p className='text-2xl md:text-3xl xl:text-3xl mb-0'>Des questions ? </p>
                        <p className='italic mb-4'>Besoin d'informations supplémentaires, n'hésitez pas à nous contacter en cliquant sur le bouton ci-dessous.</p>
                        <ContactButton />
                    </div>
                    
                </div>
                
            </SubSection>
            <ScrollTop/>

        </Section>
        
    );
}

export default Rejoindre;
