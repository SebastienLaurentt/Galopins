
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { RiAddCircleLine } from 'react-icons/ri';
import AccountLinkButton from './AccountLinkButton';

interface InfoDataProps {
  id: number;
  date: string;
  destination: string;
}

function AccountRando() {
  const [randosData, setRandosData] = useState<InfoDataProps[]>([]); // State with all Rando Data

  const handleDelete = async (id: number) => {
    try {
      // Get token cookie for Authorization
      const token = Cookies.get('token');

      // Error gestion if token not available
      if (!token) {
        console.error('Le token n\'est pas disponible.');
        return;
      }

      // Delete request
      await axios.delete(`https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Mettez à jour l'état pour refléter la suppression
      setRandosData((prevData) => prevData.filter((rando) => rando.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Fetch all Randos Data
  useEffect(() => {
    axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos/')
    .then(response => {
      setRandosData(response.data.data);
    })

  }, []); 

  return (
    <div className='flex flex-col '>
        <h5 className='mb-4 text-center'> Tableau de gestion des randonnées </h5>
        <div className='flex items-start justify-start mb-2'>
          <AccountLinkButton
                  bgColor='bg-green-800'
                  href="/account/addrando"
                  linkName="Créer une nouvelle randonnée"
                  logo={<RiAddCircleLine/>}
                  classname='md:hover:bg-green-600'
          />
        </div>
        <table className="">
          <thead>
            <tr className='border-b-2'>
              <th className="px-4 py-2">N°</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Destination</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {randosData.map((rando) => (
              <tr key={rando.id} className="border-b">
                <td className="px-4 py-2">{rando.id}</td>
                <td className="px-4 py-2">{rando.date}</td>
                <td className="px-4 py-2">{rando.destination}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(rando.id)} className="text-red-500 md:hover:font-bold">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

  );
}

export default AccountRando;



