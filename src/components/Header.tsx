import { Link } from 'react-scroll';
import data from '../data/navData'




function Header() {
  


    return (
      <header className="py-4 md:p-8 text-sm md:text-lg xl:text-xl">
        <ul className="flex justify-center gap-x-4 md:gap-x-10 xl:gap-x-28">
            {data.map((value) => {
                return (
                    <li>
                        <Link
                            to={value.to}
                            smooth={true} 
                            className="cursor-pointer md:hover:underline"
                            >
                            {value.content}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </header>
    );
  }
export default Header;