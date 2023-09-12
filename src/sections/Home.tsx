import HomeBg from '../static/img/home.jpg';
import Header from '../components/Header';

function Home() {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${HomeBg})`,
    };

    return (
        <section 
            className='h-screen relative p-4 md:p-8 bg-center bg-cover w-full' 
            style={sectionStyle}
            id ="Accueil"
        >
            <Header/>
            {/* HERO CONTENT */}
            <div className='p-8 md:p-24 xl:p-60   xl:h-3/4 flex flex-col justify-center items-center  mx-auto'>
                    <h1>LES GALOPINS</h1>
                    <p className='italic text-center mb-8'>Bienvenue sur notre site internet ! </p>
                    <p className=' text-center'>Nous sommes un club de randonnée situé à Montélimar, dans la Drôme, ayant pour but la découverte de la <strong>nature</strong> et du <strong>patrimoine</strong> dans la <strong>bonne humeur</strong> et en toute <strong>convivialité</strong>. Les randonnées ont lieu du <strong>1er Septembre au 15 Juin</strong>, chaque <strong>Lundi et Vendredi</strong> et sont organisées selon <strong>deux niveaux de difficultés</strong>.  </p>
                    <p className=' text-center'>Si vous souhaitez en savoir davantage, sentez vous libre d'explorer ce site ! Vous y trouverez des informations plus précises concernant notre <strong>club</strong>, les <strong>parcours que nous proposons</strong> mais aussi ce qui est <strong>nécessaire pour nous rejoindre</strong> ! </p>
                    
                    <button className='border-2 p-2 rounded-lg md:hover:bg-white md:hover:text-black mt-8'>DOCUMENT D'ADMISSION</button>
            </div>

        </section>
    );
}

export default Home;
