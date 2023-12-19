import { useState, useEffect } from 'react';
import PhotosBg from '../static/img/photos.webp';
import { MdOutlinePhotoCamera } from 'react-icons/md';


// @ts-ignore
import data from '../data/photosData.js';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ScrollTop from '../components/ScrollTop';
import axios from 'axios';
import JSZip from 'jszip';
import ArchiveDownloadButton from '../components/ArchiveDownloadButton.js';

import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import { RotatingLines } from 'react-loader-spinner';

interface RandoData {
  date:string;
  destination: string;
  description:string;
  pictures?: string[];
}

function Photos() {
  const [randosData, setRandosData] = useState<RandoData[]>([]); // State with all Rando Data
  const [selectedRandoDestination, setSelectedRandoDestination] = useState('Test'); // State with name about the selected Rando
  const [loadingFetch, setLoadingFetch] = useState(true);

  // Fetch all Randos Data
  useEffect(() => {
    axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/')
      .then(response => {
        setRandosData(response.data.data);

        if (response.data.data.length > 0) {
          setSelectedRandoDestination(response.data.data[response.data.data.length - 1].destination);
        }
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      })
      .finally(() => {
        // Marquez le chargement comme terminé, que ce soit réussi ou échoué
        setLoadingFetch(false);
      });
  }, []);

  // Set the state of the 
  const handleRandoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRandoDestination(event.target.value);
  };

  // Collect datas of the selectedRando with find method to allow a match with his name 
  // between the states selectedRandoName and randosData 
  const selectedRandoData = randosData.find(rando => rando.destination === selectedRandoDestination);

    // DOWLOAD IMG AS ZIP
    const handleDownloadClick = async () => {
      if (!selectedRandoData || !selectedRandoData.pictures) {
        console.error('Aucune donnée de randonnée sélectionnée ou aucune image disponible.');
        return;
      }
    
      const imageUrls = selectedRandoData.pictures;
    
      const zip = new JSZip();
    
      const promises = imageUrls.map(async (url, index) => {
        try {
          const response = await fetch(url);
          const arrayBuffer = await response.arrayBuffer();
          zip.file(`image_${index + 1}.jpg`, arrayBuffer);
        } catch (error) {
          console.error(`Erreur lors du chargement de l'image ${url}:`, error);
        }
      });
    
      await Promise.all(promises);

      // Remplace les espaces par des underscores dans le nom de destination
    const sanitizedDestination = selectedRandoDestination.replace(/ /g, '_');
    
      zip.generateAsync({ type: 'blob' })
        .then(content => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(content);
          link.download = `${sanitizedDestination}.zip`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    };


    return (
      <Section 
        id='Photos' 
        bg={PhotosBg}
        minHeightScreen={false}
      >
        <SectionHeader sectionTitle='NOS PHOTOS'>
          <MdOutlinePhotoCamera className="icon md:mt-4"/>
        </SectionHeader>
    
        {loadingFetch ? (
          <div className="flex flex-col gap-4 items-center">
              <RotatingLines
                strokeColor="green"
                strokeWidth="5"
                animationDuration="0.5"
                width="64"
                visible={true}
              />
            <p>Chargement...</p>
          </div>
        ) : (
          <SubSection className=''>
            <div className="mb-8 flex flex-wrap gap-2 justify-center items-center">
              <select
                id="photoSelect"
                value={selectedRandoDestination}
                onChange={handleRandoChange}
                className="md:cursor-pointer p-2 md:p-4 border border-gray-300 rounded-md text-black text-sm md:text-lg font-bold"
              >
                {randosData.map(rando => (
                  <option
                    key={rando.destination}
                    className="font-bold"
                    value={rando.destination}
                  >
                    {rando.date} - {rando.destination}
                  </option>
                ))}
              </select>
            </div>
    
            <div className="mb-2 xl:mx-48">
              {selectedRandoData && selectedRandoData.pictures && (
                <Gallery
                  items={selectedRandoData.pictures.map(imageUrl => ({
                    original: imageUrl,
                    originalHeight: 100,
                    thumbnail: imageUrl,
                  }))}
                />
              )}
            </div>
    
            <div className='text-center'>
              <p>{selectedRandoData ? selectedRandoData.description : "Chargement..."}</p>
            </div>
    
            <ArchiveDownloadButton 
              classname='md:ml-4'
              onClick={handleDownloadClick}
              linkName="TÉLÉCHARGER LES PHOTOS"
            />
          </SubSection>
        )}
    
        <ScrollTop/>
      </Section>
    );
}

export default Photos;
