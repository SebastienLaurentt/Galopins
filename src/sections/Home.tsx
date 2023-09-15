import HomeBg from '../static/img/home.jpg';
import Header from '../components/Header';

import AdmissionFile from '../assets/Admission_Galopins.pdf'
import DownloadLink from '../components/DownloadLink';
import Section from '../components/Section';
import SubSection from '../components/SubSection';

function Home() {
    return (
        <Section
            id='Accueil'
            bg={HomeBg}
        >
            <Header/>
            <h1>LES GALOPINS</h1>
            {/* HERO CONTENT */}
            <SubSection
                className='text-center items-center'
            >
                <p className='italic'>Bienvenue sur notre site internet ! </p>
                <p>Nous sommes un club de randonnée situé à Montélimar, dans la Drôme, ayant pour but la découverte de la <strong>nature</strong> et du <strong>patrimoine</strong> dans la <strong>bonne humeur</strong> et en toute <strong>convivialité</strong>. Les randonnées ont lieu du <strong>1er Septembre au 15 Juin</strong>, chaque <strong>Lundi et Vendredi</strong> et sont organisées selon <strong>deux niveaux de difficultés</strong>.  </p>
                <p>Si vous souhaitez en savoir davantage, sentez vous libre d'explorer ce site ! Vous y trouverez des informations plus précises concernant notre <strong>club</strong>, les <strong>parcours que nous proposons</strong> mais aussi ce qui est <strong>nécessaire pour nous rejoindre</strong> ! </p>
                <DownloadLink 
                    file={AdmissionFile}
                    fileName="Admission_Galopins.pdf"
                    linkName="BULLETIN D'ADHÉSION"
                    classname='mt-4'
                />
            </SubSection>
        </Section>

    );
}

export default Home;
