import { useState } from 'react';
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
                className={` p-2 rounded-lg md:text-lg 2xl:text-2xl md:p-4 ${classname} bg-cyan-700 md:hover:bg-cyan-500 text-white ${isActive ? 'active' : ''}`}
                onClick={handleClick}
            >
                <div className='flex justify-center gap-x-2 items-center'>
                    CONTACT
                    <RiContactsFill className=" text-lg md:text-2xl 2xl:text-3xl" />
                </div>
                {isActive && (
                    <div className="text-left p-2 mt-4">
                        <p className='mb-2'>Gisèle : 06-80-47-55-38</p>
                        <p className='mb-0'>Allain : 06-24-01-60-30</p>
                    </div>
            )}
            </button>


        </div>
    )
}

export default ContactButton;
