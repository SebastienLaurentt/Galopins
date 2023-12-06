
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiAddCircleLine } from "react-icons/ri";

import Cookies from 'js-cookie';
import AccountLinkButton from './AccountLinkButton';

interface ProgDataProps {
  id: number;
  name: string;
  content: string;
}

function AccountProg() {
  const [progsData, setProgsData] = useState<ProgDataProps[]>([]); // State with all Rando Data
  
  const handleDelete = async (id: number) => {
    try {
      // Get token cookie for Authorization
      const token = Cookies.get('token');

      console.log(token)

      // Error gestion if token not available
      if (!token) {
        console.error('Le token n\'est pas disponible.');
        return;
      }

      // Delete request
      await axios.delete(`https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/progs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Mettez à jour l'état pour refléter la suppression
      setProgsData((prevData) => prevData.filter((prog) => prog.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Fetch all Randos Data
  useEffect(() => {
    axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/progs/')
    .then(response => {
        setProgsData(response.data.data);
    })

  }, []); 

  return (
    <div className=''>
        <h5 className='mb-4 text-center'> Tableau de gestion des programmes </h5>
        <div className='flex items-start justify-start mb-2'>
          <AccountLinkButton
                  bgColor='bg-green-800'
                  href="/account/addnews"
                  linkName="Ajouter un nouveau programme"
                  logo={<RiAddCircleLine/>}
                  classname='md:hover:bg-green-600'
          />
        </div>
        <table className="mb-2">
          <thead>
            <tr className='border-b-2'>
              <th className="px-4 py-2">N°</th>
              <th className="px-4 py-2">Nom du programme</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {progsData.map((prog) => (
              <tr key={prog.id} className="border-b">
                <td className="px-4 py-2">{prog.id}</td>
                <td className="px-4 py-2">{prog.name}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(prog.id)} className="text-red-500 md:hover:font-bold">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

  );
}

export default AccountProg;



