import { Link } from 'react-scroll';



function Header() {
    return (
      <header className="">
        <ul className="flex justify-around text-base md:text-xl xl:text-2xl py-4 md:p-8 ">
            <li className=''>
                <Link
                    to='Accueil'
                    smooth={true} 
                    className="cursor-pointer md:hover:underline"
                    >
                    Accueil
                </Link>
            </li>
            <li>
                <Link
                    to='Club'
                    smooth={true} 
                    className="cursor-pointer md:hover:underline"
                    >
                    Club
                </Link>
            </li>
            <li>
                <Link
                    to='Parcours'
                    smooth={true} 
                    className="cursor-pointer md:hover:underline"
                    >
                    Parcours
                </Link>
            </li>
            <li>
                <Link
                    to='Rejoindre'
                    smooth={true} 
                    className="cursor-pointer md:hover:underline"
                    >
                    Adhésion
                </Link>
            </li>
        </ul>
    </header>
    );
  }
export default Header;