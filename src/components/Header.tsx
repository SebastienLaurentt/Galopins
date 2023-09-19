import { Link } from 'react-scroll';

import { AiFillHome } from 'react-icons/ai';
import { GiStonePath } from 'react-icons/gi';
import { LuBackpack } from 'react-icons/lu';


function Header() {
    return (
      <header className="">
        <ul className="flex justify-around md:justify-center md:gap-x-20 xl:gap-x-32 text-base md:text-lg xl:text-xl py-4 font-bold">
            <li className='flex flex-col items-center cursor-pointer md:hover:text-green-700 '>
                <AiFillHome className='iconHeader'/>
                <Link
                    to='Club'
                    smooth={true} 
                    className=""
                    >
                    Club
                </Link>
            </li>
            <li className='flex flex-col items-center cursor-pointer md:hover:text-green-700'>
                <GiStonePath className='iconHeader' />
                <Link
                    to='Parcours'
                    smooth={true} 
                    className=""
                    >
                    Parcours
                </Link>
            </li>
            <li className='flex flex-col items-center cursor-pointer md:hover:text-green-700'>
                <AiFillHome className='iconHeader'/>
                <Link
                    to='Club'
                    smooth={true} 
                    className=""
                    >
                    Photos
                </Link>
            </li>
            <li className='flex flex-col items-center cursor-pointer md:hover:text-green-700'>
                <LuBackpack className='iconHeader' />
                <Link
                    to='Rejoindre'
                    smooth={true} 
                    className=""
                    >
                    Adhésion
                </Link>
            </li>
            
        </ul>
    </header>
    );
  }
export default Header;