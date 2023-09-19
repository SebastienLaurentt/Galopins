import RejoindreBg from '../static/img/rejoindre.jpg';

import { LuBackpack } from 'react-icons/lu';
import AdmissionFile from '../assets/Admission_Galopins.pdf'
import DownloadLink from '../components/DownloadLink';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ScrollTop from '../components/ScrollTop';

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
                </div>
                
            </SubSection>
            <ScrollTop/>

        </Section>
        
    );
}

export default Rejoindre;
