import { Link } from 'react-scroll';



function Header() {
    return (
      <header className="py-4 md:p-8 text-sm md:text-lg xl:text-xl">
        <ul className="flex justify-center gap-x-2 md:gap-x-10 xl:gap-x-28">
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
                            to='Conseils'
                            smooth={true} 
                            className="cursor-pointer md:hover:underline"
                            >
                            Conseils
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='Rejoindre'
                            smooth={true} 
                            className="cursor-pointer md:hover:underline"
                            >
                            Nous rejoindre
                        </Link>
                    </li>
        </ul>
    </header>
    );
  }
export default Header;