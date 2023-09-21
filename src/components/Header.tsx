import { Link } from 'react-scroll';

import { AiFillHome } from 'react-icons/ai';
import { GiStonePath } from 'react-icons/gi';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { LuBackpack } from 'react-icons/lu';



function Header() {
    return (
      <header className="">
        <ul className="flex justify-around md:justify-center md:gap-x-20 xl:gap-x-32 text-base md:text-lg xl:text-xl py-4 font-bold">
            <li className=''>
                <Link
                    to='Club'
                    smooth={true} 
                    className="flex flex-col items-center cursor-pointer md:hover:text-green-500"
                    >
                    <AiFillHome className='iconHeader'/>
                    Club
                </Link>
            </li>
            <li className=''>
                <Link
                    to='Parcours'
                    smooth={true} 
                    className="flex flex-col items-center cursor-pointer md:hover:text-green-500"
                    >
                    <GiStonePath className='iconHeader' />
                    Parcours
                </Link>
            </li>
            <li className=''>
                <Link
                    to='Photos'
                    smooth={true} 
                    className="flex flex-col items-center cursor-pointer md:hover:text-green-500"
                    >
                    <MdOutlinePhotoCamera className='iconHeader'/>
                    Photos
                </Link>
            </li>
            <li className=''>
                <Link
                    to='Rejoindre'
                    smooth={true} 
                    className="flex flex-col items-center cursor-pointer md:hover:text-green-500"
                    >
                    <LuBackpack className='iconHeader' />
                    Adhésion
                </Link>
            </li>
            
        </ul>
    </header>
    );
  }
export default Header;