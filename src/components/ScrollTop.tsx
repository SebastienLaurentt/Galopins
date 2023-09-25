import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ScrollTop() {
    const [hovered, setHovered] = useState(false);

    const fadeInAnimationsVariants = {
        initial: {
            opacity:0,
            y:-50,
        },
        animate: () => ({
            opacity:1,
            y:0,
            transition:{
                delay:0.5,
            },
        }),
    };

    return (
        <motion.div 
            className="w-12 mx-auto flex justify-center cursor-pointer md:hover:text-green-500 rounded-full"
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView='animate'
            viewport={{
                once:true,
            }}   
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link to='Accueil' smooth={true} className="flex flex-col items-center font-bold">
                <FaArrowUp className={`iconHeader transition-transform duration-300 ${hovered ? 'transform -translate-y-1' : ''}`} />
                <span>Accueil</span>
            </Link>
        </motion.div>
    );
}

export default ScrollTop;
