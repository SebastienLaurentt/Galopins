import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/Account/Input';
import AccountHeader from '../../components/Account/AccountHeader';
import Textarea from '../../components/Account/Textarea';
import ValidationButton from '../../components/Account/ValidationButton';

const AccountNewsUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtenir l'ID de la nouvelle depuis l'URL

  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loadingData, setLoadingData] = useState(true); // Ajouter un état de chargement pour les données
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('token');

        if (!token) {
          console.error('Le jeton n\'est pas disponible.');
          return;
        }

        const response = await axios.get(
          `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dataNouvelle = response.data.data; 

        setDate(dataNouvelle.date || '');
        setTitle(dataNouvelle.title || '');
        setDescription(dataNouvelle.description || '');

        setLoadingData(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la nouvelle :', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoadingSubmit(true);
      const token = Cookies.get('token');

      if (!token) {
        console.error('Le jeton n\'est pas disponible.');
        return;
      }

      const response = await axios.put(
        `https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos/${id}`,
        {
          date,
          title,
          description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      // Afficher le message de succès
      setShowSuccessMessage(true);

      // Masquer le message de succès après 2 secondes et rediriger
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/account');
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la nouvelle :', error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-300 p-4 ">
      <AccountHeader />
      <h3 className="text-black text-center m-4">
        Formulaire de mise à jour de l'information
      </h3>

      {loadingData ? (
        <div className="flex flex-col items-center gap-y-4">
          <p className="text-black"> Chargement des données de l'information</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center justify-center bg-stone-300 p-4 mt-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 text-center bg-slate-900 p-8 rounded-md"
          >
            <Input
              inputName="Date"
              value={date}
              setter={setDate}
              placeholder="JJ/MM/AAAA"
              isDate={true}
            />
            <Input
              inputName="Titre"
              value={title}
              setter={setTitle}
              placeholder="Titre de la nouvelle"
            />
            <Textarea
              textareaName="Description"
              value={description}
              onChange={setDescription}
              placeholder="Description de la nouvelle"
            />

            {/* Conditionally render the Loader based on the loading state */}
            {loadingSubmit ? (
              <div className="flex justify-center">
                <span>Chargement...</span>
              </div>
            ) : null /* Ne pas rendre le bouton si loadingSubmit est vrai */}
            {/* Conditionally render the success message */}
            {showSuccessMessage && (
              <span className="text-green-600 mt-2 text-md">
                Info mise à jour ! Redirection...
              </span>
            )}
            {/* Render the button outside the form to prevent it from re-rendering */}
            {!loadingSubmit && !showSuccessMessage && (
              <ValidationButton
                buttonName="Mettre à jour l'information"
              />
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default AccountNewsUpdate;
