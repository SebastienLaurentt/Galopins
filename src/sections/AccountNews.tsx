
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiAddCircleLine } from "react-icons/ri";



function AccountNews() {
  const [infosData, setInfosData] = useState([]); // State with all Rando Data

  const handleDelete = (id) => {
    setInfosData((prevInfos) => prevInfos.filter((info) => info.id !== id));
  };

    // Fetch all Randos Data
    useEffect(() => {
      axios.get('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/')
      .then(response => {
        setInfosData(response.data.data);
      })
  
    }, []); 

  return (
    <div className=''>
        <h5 className='mb-4 text-center'> Tableau de gestion des dernières infos </h5>
        <div className='flex items-start justify-start mb-2'>
            <button className='flex flex-row  items-center gap-x-1 p-2 rounded-md bg-green-800 md:hover:bg-green-600'> 
                <span>
                    Créer une nouvelle information 
                </span>
                <span>
                    <RiAddCircleLine />
                </span>  
            </button>
        </div>
        <table className="mb-2">
          <thead>
            <tr className='border-b-2'>
              <th className="px-4 py-2">N°</th>
              <th className="px-4 py-2">Date de l'info</th>
              <th className="px-4 py-2">Titre de l'info</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {infosData.map((info) => (
              <tr key={info.id} className="border-b">
                <td className="px-4 py-2">{info.id}</td>
                <td className="px-4 py-2">{info.date}</td>
                <td className="px-4 py-2">{info.title}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(info.id)} className="text-red-500 md:hover:font-bold">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

  );
}

export default AccountNews;



