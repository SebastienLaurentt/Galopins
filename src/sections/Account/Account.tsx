
import { useState } from 'react';
import AccountRando from '../../components/Account/AccountRando';
import AccountNews from '../../components/Account/AccountNews';
import AccountHeader from '../../components/Account/AccountHeader';
import AccountProg from '../../components/Account/AccountProg';
import AccountAdhe from '../../components/Account/AccountAdhe';


function Account() {

  const [activeButton, setActiveButton] = useState('Infos'); // État initial avec le bouton "Infos" actif


  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };


  return (
    <div className="min-h-screen bg-stone-300  ">
      <AccountHeader />
      <div className=" flex flex-col items-center justify-center bg-stone-300 m-8  ">
        <h3 className="text-black  text-center">
          Bienvenue sur l'espace administrateur des Galopins ! 
        </h3>
        <div className='bg-stone-200 p-8 mb-4 rounded-xl text-center'>
          <p className='italic text-black'> Depuis cet espace, il est possible de gérer les informations du site des Galopins. </p>
          <ol className='text-center text-black '>
            <li>
              <p > <span className='font-bold'>Premierement</span>, vous pouvez choisir le type d'informations avez lequel vous souhaitez interagir en cliquant sur les boutons ci-dessous. </p>
            </li>
            <li>
              <p className='mb-0'> <span className='font-bold'>Deuxiemement</span>, vous pourez choisir d'ajouter, supprimer ou modifier ces informations.  </p>
            </li>
          </ol>
        </div>

        <div className='flex flex-row gap-x-2 text-black mb-2'>
          <button
            className={`p-2 border-solid border-2 border-zinc-600 rounded-md md:hover:bg-zinc-600 md:hover:text-white ${
              activeButton === 'Infos' ? 'bg-zinc-600 text-white' : ''
            }`}
            onClick={() => handleButtonClick('Infos')}
          >
            Infos
          </button>
          <button
            className={`p-2 border-solid border-2 border-zinc-600 rounded-md md:hover:bg-zinc-600 md:hover:text-white ${
              activeButton === 'Randos' ? 'bg-zinc-600 text-white' : ''
            }`}
            onClick={() => handleButtonClick('Randos')}
          >
            Randos
          </button>
          <button
            className={`p-2 border-solid border-2 border-zinc-600 rounded-md md:hover:bg-zinc-600 md:hover:text-white ${
              activeButton === 'Programmes' ? 'bg-zinc-600 text-white' : ''
            }`}
            onClick={() => handleButtonClick('Programmes')}
          >
            Programmes
          </button>
        </div>


        <div className="text-white bg-slate-900 p-4 rounded-md mb-4">
          {activeButton === 'Infos' && <AccountNews />}
          {activeButton === 'Randos' && <AccountRando />}
          {activeButton === 'Programmes' && <AccountProg />}
        </div>
      </div>
    </div>

  );
}

export default Account;



