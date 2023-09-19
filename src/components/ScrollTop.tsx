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
            className={`flex justify-center cursor-pointer text-green-500 rounded-full ${isActive ? 'hovered' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
        >
            <Link
                to='Accueil'
                smooth={true} 
                className="flex flex-col items-center"
            >
                <FaArrowUp className={`iconHeader ${isActive ? 'icon-hover' : ''}`} />
                Accueil
            </Link>
        </div>
    );
}

export default ScrollTop;
