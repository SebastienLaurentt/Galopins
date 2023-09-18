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
                <div className='mb-4 flex flex-col items-center md:items-start'>
                    <p>Le programme des randonnées est établi pour une période de 4 mois. Vous pouvez télécharger le programme actuel ci-dessous : </p>
                    <DownloadLink 
                        file={ProgrammeFile}
                        fileName="Programme_Galopins.pdf"
                        linkName="PROGRAMME"
                    />
                </div>
                <div className='md:px-8 xl:px-12 mb-4 flex flex-col items-center md:items-start'>
                    <p> Vous pourrez y retrouver : </p>
                    <ul className='md:ml-12 md:list-disc'>
                        <li>
                            <p className='leading-6 md:leading-9'> En <Tag classname='bg-white' tagName='BLANC'/> les randonnées COOL du Lundi concernant la Drôme et l'Ardèche
                            </p>
                        </li>
                        <li>
                            <p className='leading-6 md:leading-9'> En <Tag classname='bg-cyan-500' tagName='BLEU'/> les randonnées plus difficiles du Lundi concernant la Drôme 
                            </p>
                        </li>
                        <li>
                            <p className='leading-6 md:leading-9'> En <Tag classname='bg-yellow-400' tagName='JAUNE'/> les randonnées plus difficiles du Lundi concernant l'Ardèche
                            </p>
                        </li>
                        <li>
                            <p className='leading-6 md:leading-9'> En <Tag classname='bg-emerald-400' tagName='VERT'/> les randonnées plus difficiles du Vendredi avec la région correspondante
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='mb-4 md:mb-12 flex flex-col items-center md:items-start'>
                    <p>Le lieu de rendez-vous du point de départ des randonnées est situé au 8 chemin de la Rochelle. L'heure de
                    départ est fixée à 13h30.</p>
                <Link 
                    href="https://maps.app.goo.gl/W6D3Ui73RSKW8swr8"
                    linkName="VOIR LE POINT DE RDV"
                />
                </div>
                <div className=''> 
                    <p>Les Galopins se déplacent toujours en covoiturage afin de limiter le nombre de voitures. Une participation est demandée à la personne transportée. Le tarif est laissé à l’appréciation du conducteur (la base étant de 0.2€ du km).
                    </p>
                </div>
            </SubSection>

        </Section>
    );
}

export default Parcours;
