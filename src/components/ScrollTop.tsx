import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';


function ScrollTop() {
    const [isActive, setIsActive] = useState(false);

    const handleHover = () => {
        setIsActive(true);
    }

    const handleUnhover = () => {
        setIsActive(false);
    }

    return (
        <div 
            className={`w-12 mx-auto flex justify-center cursor-pointer md:hover:text-green-500 rounded-full ${isActive ? 'hovered' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
        >
            <Link
                to='Accueil'
                smooth={true} 
                className="flex flex-col items-center font-bold"
            >
                <FaArrowUp className={`iconHeader ${isActive ? 'icon-hover' : ''}`} />
                Accueil
            </Link>
        </div>
    );
}

export default ScrollTop;
