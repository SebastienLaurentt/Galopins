import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth'; 
import { useEffect, useState } from 'react';
import axios from 'axios';


function Account() {
  const [randosData, setRandosData] = useState([]); // State with all Rando Data


  const { logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/auth/login');
  };


  const handleEdit = (id) => {
    // Logique pour éditer la randonnée avec l'ID spécifié
    console.log(`Édition de la randonnée avec l'ID ${id}`);
  };

  const handleDelete = (id) => {
    // Logique pour supprimer la randonnée avec l'ID spécifié
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
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h3 className="text-black p-4 text-center">
        Bienvenue sur l'espace administrateur des Galopins ! 
      </h3>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleLogout}
        >
        Se déconnecter
      </button>
      <div className='text-black'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date de la rando</th>
              <th>Nom de la rando</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {randosData.map((rando) => (
              <tr key={rando.id}>
                <td>{rando.id}</td>
                <td>{rando.date}</td>
                <td>{rando.name}</td>
                <td>
                  <button onClick={() => handleEdit(rando.id)}>Edit</button>
                  <button onClick={() => handleDelete(rando.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Account;



