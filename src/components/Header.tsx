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
      <header className="flex justify-between items-center p-8 lg:py-16  xl:w-4/5 lg:mx-auto ">
      <BurgerMenu 
        setBurgerIsOpen={setBurgerIsOpen} 
        burgerIsOpen={burgerIsOpen}
      />
        <ul className="hidden md:flex  gap-6 lg:gap-12 ">
            {data.map((value) => {
                return (
                    <li>
                        <Link
                            to={value.to}
                            smooth={true} 
                            className="cursor-pointer md:hover:text-sky-500"
                            >
                            {value.content}
                        </Link>
                    </li>
                );
            })}
        </ul>
        <div className='flex flex-row-reverse justify-between w-full md:w-1/5'>
          <div className="md:hidden">
            <IoMdMenu
              size={32}
              className={'cursor-pointer'}
              onClick={() => {
                setBurgerIsOpen(true);
              }}
            />
          </div>
        </div>
    </header>
    );
  }
export default Header;