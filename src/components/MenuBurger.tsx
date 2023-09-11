import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Link } from 'react-scroll';

import data from '../data/navData'
import Section from './Section';



interface BurgerMenuProps {
  setBurgerIsOpen: Function;
  burgerIsOpen: boolean;
}

function BurgerMenu({setBurgerIsOpen, burgerIsOpen}: BurgerMenuProps) {

  const position = burgerIsOpen ? 'top-0 h-screen no-scroll' : '-top-full h-0';

  return (
    <Section   
  
      paddingBottom={false}
      className={`absolute left-0 ${position} duration-500 px-8 w-full z-50 transition-all rounded-b-2xl`}
    >
      <div
        className="py-16"
        onClick={() => setBurgerIsOpen(false)}
      >
        <AiOutlineCloseCircle
          size={32}
          className={'absolute top-12 left-16  cursor-pointer'}
          onClick={() => setBurgerIsOpen(false)}
        />
        <nav>
          <ul
            className="flex flex-col gap-12 text-center text-xl mt-12"
            onClick={() => setBurgerIsOpen(false)}
          >
              {data.map((value) => {
                      return (
                          <li>
                              <Link
                                  to={value.to}
                                  smooth={true} 
                                  className="text-xl"
                                  onClick={() => setBurgerIsOpen(false)}
                                  >
                                  {value.content}
                              </Link>
                          </li>
                      );
                  })}
          </ul>
        </nav>

      </div>
    </Section>
  );
}

export default BurgerMenu;

