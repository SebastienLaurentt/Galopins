import HomeBg from '../../../public/static/img/home_forest.jpg';
import Header from '../../components/Header';

function Home() {
    const sectionStyle = {
        backgroundImage: `url(${HomeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className='h-screen relative' style={sectionStyle}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <Header/>
        </section>
    );
}

export default Home;
