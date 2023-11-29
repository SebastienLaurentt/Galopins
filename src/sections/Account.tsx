
import { useState } from 'react';
import AccountRando from '../components/AccountRando';
import AccountNews from '../components/AccountNews';
import AccountHeader from '../components/AccountHeader';


function Account() {

  const [activeButton, setActiveButton] = useState('Infos'); // État initial avec le bouton "Infos" actif


  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };


  return (
    <div className="min-h-screen bg-stone-300 p-4 ">
      <AccountHeader />
      <div className=" flex flex-col items-center justify-center bg-stone-300 p-4 ">
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
      </div>
    </div>

  );
}

export default Account;



