
import { Link } from 'react-scroll';

import { FaArrowUp } from 'react-icons/fa';



function ScrollTop() {
    return (
        <div className='flex justify-center cursor-pointer md:hover:text-green-500 rounded-full '>
            <Link
                to='Accueil'
                smooth={true} 
                className="flex flex-col items-center"
                >
                <FaArrowUp className='iconHeader'/>
                Accueil
            </Link>
        </div>
    );
  }
export default ScrollTop;

