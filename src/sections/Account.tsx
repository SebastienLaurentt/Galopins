
import { useState } from 'react';
import Link from '../components/Link';
import { BiArrowBack } from 'react-icons/bi';
import { CiLogout } from "react-icons/ci";
import AccountRando from './AccountRando';
import AccountNews from './AccountNews';
import { useAuth } from '../components/Auth';
import { useNavigate } from 'react-router';


function Account() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('Infos'); // État initial avec le bouton "Infos" actif
  const { logout } = useAuth(); 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };



  const handleLogout = async () => {
    logout();
    navigate('/auth/login');
  };



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-300 p-4 ">

      <h3 className="text-black p-4 text-center">
        Bienvenue sur l'espace administrateur des Galopins ! 
      </h3>
      <p className='italic text-black'> Depuis cet espace, il est possible de gérer les informations du site des Galopins. </p>
      <p className='italic text-black'> Premierement, vous pouvez choisir le type d'informations avez lequel vous souhaitez interagir en cliquant sur les boutons ci-dessous. </p>
      <p className='italic text-black'> Deuxiemement, vous pourez choisir d'ajouter, supprimer ou modifier ces informations.  </p>

      <div className='flex flex-row gap-x-2 text-black mb-2'>
        <button
          className={`p-2 border-solid border-2 border-zinc-600 rounded-md ${
            activeButton === 'Infos' ? 'bg-zinc-600 text-white' : ''
          }`}
          onClick={() => handleButtonClick('Infos')}
        >
          Infos
        </button>
        <button
          className={`p-2 border-solid border-2 border-zinc-600 rounded-md ${
            activeButton === 'Rando' ? 'bg-zinc-600 text-white' : ''
          }`}
          onClick={() => handleButtonClick('Rando')}
        >
          Rando
        </button>
        <button
          className={`p-2 border-solid border-2 border-zinc-600 rounded-md ${
            activeButton === 'Liens' ? 'bg-zinc-600 text-white' : ''
          }`}
          onClick={() => handleButtonClick('Liens')}
        >
          Liens
        </button>
      </div>


      <div className="text-white bg-slate-900 p-4 rounded-md mb-4">
        {activeButton === 'Infos' && <AccountNews />}
        {activeButton === 'Rando' && <AccountRando />}
        {/* {activeButton === 'Liens' && <AccountLiens />} */}
      </div>

      <div className='flex gap-4'>
        <button
          className="flex  p-2 rounded-lg md:text-lg 2xl:text-2xl md:p-4 md:hover:bg-red-600 bg-red-800"
          onClick={handleLogout}
          >
            <div className='flex gap-x-2 items-center'>
              <span>
                Se déconnecter
              </span>
              <span className='text-lg md:text-2xl 2xl:text-3xl'>
                <CiLogout />
              </span>
            </div>
        </button>
        <Link
          href="/"
          linkName="Retourner sur le site"
          logo={<BiArrowBack />}
          classname=''
        />
      </div>
    </div>

  );
}

export default Account;



