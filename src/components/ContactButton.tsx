import React, { useState } from 'react';
import { RiContactsFill } from 'react-icons/ri';

interface ContactButtonProps {
    classname?: string;
}

function ContactButton({ classname }: ContactButtonProps) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <button
                className={` p-2 rounded-lg md:text-lg md:p-4 ${classname} bg-white text-black ${isActive ? 'active' : ''}`}
                onClick={handleClick}
            >
                <div className='flex flex-row justify-center gap-x-2'>
                    Contact
                    <RiContactsFill className="text-xl md:text-2xl" />
                </div>
                {isActive && (
                    <div className="text-left p-2 mt-4">
                        <p>Adresse mail : blabla@email.fr</p>
                        <p>Téléphone : 01 23 45 67 89</p>
                    </div>
            )}
            </button>


        </div>
    )
}

export default ContactButton;
