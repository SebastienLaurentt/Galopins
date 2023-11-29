import ParcoursBg from '../static/img/parcours.webp';
import { GiStonePath } from 'react-icons/gi';
import { TfiLocationPin } from 'react-icons/tfi';

import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';

import ProgrammeFile from '../assets/Programme_Galopins.pdf'
import DownloadLink from '../components/DownloadLink';
import ButtonLink from '../components/ButtonLink';
import Tag from '../components/Tag';
import ScrollTop from '../components/ScrollTop';



function Parcours() {
    return (
        <Section
            id='Parcours'
            bg={ParcoursBg}
            minHeightScreen={true}
            className='text-center md:text-left flex flex-col justify-around '
            
        >

            {/* PARCOURS CONTENT */}
            <SectionHeader sectionTitle='LES PARCOURS'>
                <GiStonePath className="icon"/>
            </SectionHeader>
            <div className='mb-4 flex flex-col items-center md:items-start px-4 md:px-12 xl:px-20 wideScreen'>
                <p className='mb-3'>Le programme des randonnées est établi pour une période de <strong>4 mois</strong>. Vous pouvez télécharger le programme actuel ci-dessous : </p>
                <DownloadLink 
                    file={ProgrammeFile}
                    fileName="Programme_Galopins.pdf"
                    linkName="PROGRAMME"
                    classname='md:ml-4'
                />
            </div>
            <div className='mb-2 px-4 md:px-12 xl:px-20 wideScreen'>
                <p className='mb-3 2xl:mb-5'> Le détail des randonnées est : </p>
                <ul className='list-disc text-start leading-7 xl:leading-9 md:ml-8'>
                    <li>
                        <p className=''> <Tag classname='bg-white' tagName='BLANC'/> : Rando <strong>cool</strong> du Lundi en Drôme / Ardèche 
                        </p>
                    </li>
                    <li>
                        <p className=''> <Tag classname='bg-cyan-500' tagName='BLEU'/> : Rando <strong>classique</strong> du Lundi en Drôme 
                        </p>
                    </li>
                    <li>
                        <p className=''> <Tag classname='bg-yellow-400' tagName='JAUNE'/> : Rando <strong>classique</strong> du Lundi en Ardèche
                        </p>
                    </li>
                    <li>
                        <p className=''> <Tag classname='bg-emerald-400' tagName='VERT'/> : les randonnées du Vendredi
                        </p>
                    </li>
                </ul>
            </div>
            <div className='mb-4  flex flex-col items-center md:items-start px-4 md:px-12 xl:px-20 wideScreen'>
                <p className='mb-3'>Le lieu de <strong>rendez-vous</strong> avant chaque départ est situé sur le parking en face du  95 Route de Valence (Bar le Provence). L'heure de
                départ est fixée à 13h30.</p>
                <ButtonLink 
                    href="https://maps.app.goo.gl/1fQz1QrNGHzLm8a48"
                    linkName="VOIR LE POINT DE RDV"
                    logo={<TfiLocationPin/>}
                    classname='md:ml-4'
                />
            </div>
            <div className='px-4 md:px-12 xl:px-20 wideScreen'> 
                <p>Les Galopins se déplacent toujours en <strong>covoiturage</strong> afin de limiter le nombre de voitures. Le tarif est laissé à l’appréciation du conducteur (la base étant de 0.2€ du km).
                </p>
            </div>
            <ScrollTop/>
        </Section>
    );
}

export default Parcours;
