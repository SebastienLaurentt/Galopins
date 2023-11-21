import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth'; 


function Account() {
  const { logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h3 className="text-black p-4 text-center">Bienvenue sur l'espace administrateur des Galopins ! </h3>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleLogout}
        >
        Se déconnecter
      </button>
    </div>
  );
}

export default Account;



