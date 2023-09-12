import { useEffect, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import BurgerMenu from './MenuBurger';
import { Link } from 'react-scroll';



import data from '../data/navData'




function Header() {
  

  // BURGER STATE
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  useEffect(() => {
    if (burgerIsOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [burgerIsOpen]);

    return (
      <header className="py-4 md:p-8 text-sm md:text-lg xl:text-xl">
      <BurgerMenu 
        setBurgerIsOpen={setBurgerIsOpen} 
        burgerIsOpen={burgerIsOpen}
      />
        <ul className="flex justify-center  gap-x-4 md:gap-x-10 xl:gap-x-28">
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