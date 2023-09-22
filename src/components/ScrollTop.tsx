import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

function ScrollTop() {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="w-12 mx-auto flex justify-center cursor-pointer md:hover:text-green-500 rounded-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link to='Accueil' smooth={true} className="flex flex-col items-center font-bold">
                <FaArrowUp className={`iconHeader transition-transform duration-300 ${hovered ? 'transform -translate-y-1' : ''}`} />
                Accueil
            </Link>
        </div>
    );
}

export default ScrollTop;
