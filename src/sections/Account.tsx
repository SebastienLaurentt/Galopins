import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from '../components/Link';
import { BiArrowBack } from 'react-icons/bi';
import { CiLogout } from "react-icons/ci";


function Account() {
  const [randosData, setRandosData] = useState([]); // State with all Rando Data


  const { logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/auth/login');
  };


  // const handleEdit = (id) => {
  //   console.log(`Édition de la randonnée avec l'ID ${id}`);
  // };

  const handleDelete = (id) => {
    setRandosData((prevRandos) => prevRandos.filter((rando) => rando.id !== id));
  };

    // Fetch all Randos Data
    useEffect(() => {
      axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/')
      .then(response => {
        setRandosData(response.data.data);
      })
  
    }, []); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-300 ">
      <h3 className="text-black p-4 text-center">
        Bienvenue sur l'espace administrateur des Galopins ! 
      </h3>
      <p className='italic text-black'> Depuis cet espace, il est possible de gérer les informations du site des Galopins. </p>
      <p className='italic text-black'> Premierement, vous pouvez choisir le type d'informations avez lequel vous souhaitez interagir en cliquant sur les boutons ci-dessous. </p>
      <p className='italic text-black'> Deuxiemement, vous pourez choisir d'ajouter, supprimer ou modifier ces informations.  </p>
      <div className='text-white bg-slate-900 p-8 rounded-md mb-4'>
        <table className="w-full">
          <thead>
            <tr className='border-b-2'>
              <th className="px-4 py-2">N°</th>
              <th className="px-4 py-2">Date de la rando</th>
              <th className="px-4 py-2">Nom de la rando</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {randosData.map((rando) => (
              <tr key={rando.id} className="border-b">
                <td className="px-4 py-2">{rando.id}</td>
                <td className="px-4 py-2">{rando.date}</td>
                <td className="px-4 py-2">{rando.name}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(rando.id)} className="text-red-500 md:hover:font-bold">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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



