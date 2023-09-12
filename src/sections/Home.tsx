import HomeBg from '../../public/static/img/home_forest.jpg';
import Header from '../components/Header';

function Home() {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${HomeBg})`,
    };

    return (
        <section className='h-screen relative p-8 bg-center bg-cover w-full' style={sectionStyle}>
            <Header/>
            {/* HERO CONTENT */}
            <div className='p-8 md:p-24 xl:p-48  xl:h-2/3 flex flex-col justify-center items-center  mx-auto'>
                    <h1>LES GALOPINS</h1>
                    <p className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, labore quibusdam deserunt aperiam dolor maiores impedit exercitationem consequatur nisi blanditiis rerum voluptatibus. Ab harum, doloremque, nihil magni neque recusandae aspernatur, tempora est necessitatibus fuga placeat accusamus hic. Asperiores accusamus aliquid distinctio praesentium ipsa aliquam quisquam ut nesciunt libero quo dolore id enim tempore, soluta hic, quis sint ullam fugit pariatur. Eligendi praesentium veniam expedita minima, dolorum veritatis illum eius. Totam natus, quaerat debitis, sapiente doloribus a aspernatur magnam quas officia illo perspiciatis voluptate, odit sint eligendi maiores dolore omnis eveniet numquam ab exercitationem cum voluptatibus velit porro? Id, aliquam alias?</p>
                    <button className='border-2 p-2 rounded-lg md:hover:bg-white md:hover:text-black'>DOCUMENT D'ADMISSION</button>
            </div>

        </section>
    );
}

export default Home;
