import ParcoursBg from '../static/img/parcours.webp';
import { GiStonePath } from 'react-icons/gi';
import { TfiLocationPin } from 'react-icons/tfi';

import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';

import DownloadButton from '../components/DownloadButton';
import LinkButton from '../components/LinkButton';
import Tag from '../components/Tag';
import ScrollTop from '../components/ScrollTop';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface ProgData {
    name:string;
    content?: string;
  }
  

function Parcours() {
    const [progsData, setProgsData] = useState<ProgData[]>([]); // State with all Programme Data
    const [selectedProgName, setSelectedProgName] = useState<string>(''); // State with name about the selected Programme


    // Fetch all Randos Data
    useEffect(() => {
        axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/progs/')
        .then(response => {
            setProgsData(response.data.data);

            // Check if there is at least one program in the response
            if (response.data.data.length > 0) {
                // Set selectedProgName to the name of the last program
                setSelectedProgName(response.data.data[response.data.data.length - 1].name);
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données :", error);
        });
    }, []); 

  // Set the state of the 
  const handleRandoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProgName(event.target.value);
  };

    // Collect datas of the selectedRando with find method to allow a match with his name 
  // between the states selectedRandoName and randosData 
  const selectedProgData =  progsData.find(prog => prog.name === selectedProgName);

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
                <p className='mb-3'>Les programmes des randonnées sont établis pour une période de <strong>4 mois</strong>. Vous pouvez choisir puis télécharger le programme que vous souhaitez ci-dessous : </p>
                <div className='flex flex-row justify-center items-center gap-x-2'>
                    <div className="">
                        <select
                            id="photoSelect"
                            value={selectedProgName}
                            onChange={handleRandoChange}
                            className="md:cursor-pointer p-2 md:p-4 border border-gray-300 rounded-md text-black text-sm md:text-lg font-bold"
                        >
                            {progsData.map(prog => (
                            <option
                                key={prog.name}
                                className="font-bold"
                                value={prog.name}
                            >
                            {prog.name}
                            </option>
                            ))}
                        </select>
                    </div>
                    {selectedProgData && selectedProgData.content && (
                        <DownloadButton 
                            file={selectedProgData.content}
                            fileName={`Programme_${selectedProgData.name}.pdf`}
                            linkName={`TÉLÉCHARGER ${selectedProgData.name}`}
                            classname=''
                        />
                )}
                </div>
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
            <div className='mb-3  flex flex-col items-center md:items-start px-4 md:px-12 xl:px-20 wideScreen'>
                <p className='mb-3'>Le <strong>lundi</strong>, le lieu de rendez-vous avant chaque départ est situé sur le parking en face du  95 Route de Valence (Bar le Provence) avec une heure de
                départ est fixée à 13h30.</p>
                <LinkButton 
                    bgColor='bg-green-800'
                    bgHoverColor='bg-green-600'
                    href="https://maps.app.goo.gl/1fQz1QrNGHzLm8a48"
                    linkName="VOIR LE POINT DE RDV"
                    logo={<TfiLocationPin/>}
                    classname='md:ml-4'
                />
                <p className='mt-5'>Le <strong>vendredi</strong>, les lieux de rendez-vous et de départ seront précisés par mail ou sur le site par l'accompagnateur. </p>
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
