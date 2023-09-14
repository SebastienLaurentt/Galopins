import HomeBg from '../static/img/home.jpg';
import Header from '../components/Header';

import AdmissionFile from '../assets/Admission_Galopins.pdf'
import DownloadLink from '../components/DownloadLink';
import Section from '../components/Section';

function Home() {
    return (
        <Section
            id='Accueil'
            bg={HomeBg}
        >
            <Header/>
            {/* HERO CONTENT */}
            <div className='p-4 py-24 md:p-24 xl:px-60   flex flex-col justify-center items-center  mx-auto'>
                    <h1>LES GALOPINS</h1>
                    <p className='italic text-center mb-8'>Bienvenue sur notre site internet ! </p>
                    <p className=' text-center'>Nous sommes un club de randonnée situé à Montélimar, dans la Drôme, ayant pour but la découverte de la <strong>nature</strong> et du <strong>patrimoine</strong> dans la <strong>bonne humeur</strong> et en toute <strong>convivialité</strong>. Les randonnées ont lieu du <strong>1er Septembre au 15 Juin</strong>, chaque <strong>Lundi et Vendredi</strong> et sont organisées selon <strong>deux niveaux de difficultés</strong>.  </p>
                    <p className=' text-center mb-12'>Si vous souhaitez en savoir davantage, sentez vous libre d'explorer ce site ! Vous y trouverez des informations plus précises concernant notre <strong>club</strong>, les <strong>parcours que nous proposons</strong> mais aussi ce qui est <strong>nécessaire pour nous rejoindre</strong> ! </p>
                    <DownloadLink 
                        file={AdmissionFile}
                        fileName="Admission_Galopins.pdf"
                        linkName="BULLETIN D'ADHÉSION"
                    />
            </div>
        </Section>

    );
}

export default Home;
