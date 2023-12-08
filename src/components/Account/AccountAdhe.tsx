import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface AdheDataProps {
  id: number;
  name: string;
  content: string;
}

function AccountAdhe() {
  const [adheData, setAdheData] = useState<AdheDataProps[]>([]); // State with all Rando Data
  
  // Fetch all Randos Data
  useEffect(() => {
    axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/adhe/')
    .then(response => {
        setAdheData(response.data.data);
    })

  }, []); 

  return (
    <div className=''>
        <h5 className='mb-4 text-center'> Tableau de gestion du fichier d'adhésion </h5>
        <table className="mb-2">
          <thead>
            <tr className='border-b-2'>
              <th className="px-4 py-2">N°</th>
              <th className="px-4 py-2">Nom du fichier</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {adheData.map((adhe) => (
              <tr key={adhe.id} className="border-b">
                <td className="px-4 py-2">{adhe.id}</td>
                <td className="px-4 py-2">{adhe.name}</td>
                <td className="px-4 py-2">
                    {/* Use Link for navigation to "/account/updateadhe" */}
                    <Link to="/account/updateadhe" className="text-cyan-500 hover:font-bold">
                    Mettre à jour
                    </Link>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

  );
}

export default AccountAdhe;



