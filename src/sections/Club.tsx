import ClubBg from '../static/img/club.jpg';
import { AiFillHome } from 'react-icons/ai';

import { BsFillPenFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FaHiking } from 'react-icons/fa';
import Header from '../components/Header';


BsFillPenFill

function Club() {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${ClubBg})`,
    };

    return (
        <section 
            className='h-screen relative p-4 bg-center bg-cover w-full' 
            style={sectionStyle}
            id ="Club"
        >
            <Header/>
            {/* Club CONTENT */}
            <div className='flex flex-col md:p-4 xl:p-8'>
                <div className='flex items-center gap-x-4 mb-4 justify-center md:justify-start'>
                    <h2>LE CLUB</h2>
                    <AiFillHome className="text-3xl md:text-4xl xl:text-5xl" />
                </div>
                <div className='text-center md:text-left md:px-8 xl:px-12 mb-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta maiores quae repellendus molestias laborum nobis asperiores quaerat, recusandae, sed placeat veniam. Qui aliquam delectus beatae? Cupiditate ea, ullam incidunt error culpa est optio ad odit officia, et voluptate quaerat placeat dolorem corrupti deleniti numquam aspernatur quod enim at ipsum.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-y-16 md:gap-y-0 md:justify-around '>
                    <div className='flex flex-col items-center gap-y-2'>
                        <BsFillPenFill className="text-3xl md:text-4xl xl:text-5xl" />
                        <span>Crée en Septembre 2004</span>
                    </div>
                    <div className='flex flex-col items-center gap-y-2'>
                        <BsPeopleFill className="text-3xl md:text-4xl xl:text-5xl" />
                        <span>70 adhérents en 2022</span>
                    </div>
                    <div className='flex flex-col items-center gap-y-2'>
                        <FaHiking className="text-3xl md:text-4xl xl:text-5xl" />
                        <span>200 randonnées en 2022</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Club;
