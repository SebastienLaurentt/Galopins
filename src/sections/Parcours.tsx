import ParcoursBg from '../static/img/parcours.jpg';
import { GiStonePath } from 'react-icons/gi';

import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';

import ProgrammeFile from '../assets/Programme_Galopins.pdf'
import DownloadLink from '../components/DownloadLink';
import Link from '../components/Link';
import Tag from '../components/Tag';



function Parcours() {
    return (
        <Section
            id='Parcours'
            bg={ParcoursBg}
        >

            {/* PARCOURS CONTENT */}
            <SectionHeader sectionTitle='LES PARCOURS'>
                <GiStonePath className="icon"/>
            </SectionHeader>
            <SubSection>
                <div className='mb-8 flex flex-col items-center md:items-start'>
                    <p className='mb-3'>Le programme des randonnées est établi pour une période de <strong>4 mois</strong>. Vous pouvez télécharger le programme actuel ci-dessous : </p>
                    <DownloadLink 
                        file={ProgrammeFile}
                        fileName="Programme_Galopins.pdf"
                        linkName="PROGRAMME"
                        classname='md:ml-4'
                    />
                </div>
                <div className='mb-4'>
                    <p className='mb-3'> Le détail des randonnées est : </p>
                    <ul className='list-disc text-start leading-7 md:leading-9 md:ml-4'>
                        <li>
                            <p className=''> <Tag classname='bg-white' tagName='BLANC'/> : Niveau cool du Lundi en Drôme / Ardèche 
                            </p>
                        </li>
                        <li>
                            <p className=''> <Tag classname='bg-cyan-500' tagName='BLEU'/> : Niveau avancé du Lundi en Drôme 
                            </p>
                        </li>
                        <li>
                            <p className=''> <Tag classname='bg-yellow-400' tagName='JAUNE'/> : Niveau avancé du Lundi en Ardèche
                            </p>
                        </li>
                        <li>
                            <p className=''> <Tag classname='bg-emerald-400' tagName='VERT'/> : les randonnées du Vendredi
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='mb-8  flex flex-col items-center md:items-start'>
                    <p className='mb-3'>Le lieu de <strong>rendez-vous</strong> avant chaque départ est situé sur le parking en face du  95 Route de Valence. L'heure de
                    départ est fixée à 13h30.</p>
                <Link 
                    href="https://maps.app.goo.gl/1fQz1QrNGHzLm8a48"
                    linkName="VOIR LE POINT DE RDV"
                    classname='md:ml-4'
                />
                </div>
                <div className=''> 
                    <p>Les Galopins se déplacent toujours en <strong>covoiturage</strong> afin de limiter le nombre de voitures. Une participation est demandée à la personne transportée. Le tarif est laissé à l’appréciation du conducteur (la base étant de 0.2€ du km).
                    </p>
                </div>
            </SubSection>

        </Section>
    );
}

export default Parcours;
