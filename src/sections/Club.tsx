import ClubBg from '../static/img/club.jpg';

import { AiFillHome } from 'react-icons/ai';



function Club() {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${ClubBg})`,
    };

    return (
        <section 
            className='h-screen relative p-8 bg-center bg-cover w-full' 
            style={sectionStyle}
        >
            
            {/* Club CONTENT */}
            <div className=' xl:p-16  flex flex-col'>
                <div className='flex items-center gap-x-4 mb-4 '>
                    <h2>LE CLUB</h2>
                    <AiFillHome size={76} className="" />
                </div>
                <div className='px-8'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta maiores quae repellendus molestias laborum nobis asperiores quaerat, recusandae, sed placeat veniam. Qui aliquam delectus beatae? Cupiditate ea, ullam incidunt error culpa est optio ad odit officia, et voluptate quaerat placeat dolorem corrupti deleniti numquam aspernatur quod enim at ipsum.</p>
                </div>
            </div>

        </section>
    );
}

export default Club;
