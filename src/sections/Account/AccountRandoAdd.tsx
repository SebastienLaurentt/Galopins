import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import Input from '../../components/Account/Input';
import AccountHeader from '../../components/Account/AccountHeader';
import Textarea from '../../components/Account/Textarea';
import imageCompression from 'browser-image-compression';
import { AiOutlinePicture } from 'react-icons/ai';
import ValidationButton from '../../components/Account/ValidationButton';

const AccountRandoAdd = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState<string[]>([]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const imageArray = await Promise.all(
        Array.from(files).map(async (file) => {
          try {
            const compressedImage = await imageCompression(file, { maxSizeMB: 0.1 });
            const base64Image = await convertToBase64(compressedImage);
            return base64Image;
          } catch (error) {
            console.error('Erreur lors de la compression de l\'image :', error);
            return null;
          }
        })
      );

      const filteredImages = imageArray.filter(image => image !== null) as string[];

      setPictures(filteredImages);
    }
  };

  const convertToBase64 = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const renderSelectedImageCount = () => {
    if (pictures.length === 0) {
      return (
        <span className="text-red-500 mt-2 text-md">Aucune image sélectionnée</span>
      );
    } else {
      return (
        <span className="text-green-600 mt-2 text-md">
          {pictures.length} {pictures.length === 1 ? 'image sélectionnée' : 'images sélectionnées'} 
        </span>
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = Cookies.get('token');

      if (!token) {
        console.error('Le token n\'est pas disponible.');
        return;
      }

      const response = await axios.post(
        'https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/randos',
        {
          date,
          destination,
          description,
          pictures,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDate('');
      setDestination('');
      setDescription('');
      setPictures([]);

      console.log(response.data);
      
      navigate('/account');
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'informations :', error);
    }
  };

  return (
    <div className="min-h-screen bg-stone-300 p-4 ">
      <AccountHeader />
      <h3 className="text-black text-center m-4">
        Formulaire d'ajout d'une nouvelle randonnée
      </h3>
      <div className="flex flex-col justify-center items-center justify-center bg-stone-300 p-4 mt-8">
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-y-4 text-center bg-slate-900 p-8 rounded-md'
        >
          <Input 
            inputName='Date'
            value={date}  
            setter={setDate}
            placeholder='JJ/MM/AAAA'
            isDate={true}
          />
          <Input 
            inputName='Destination'
            value={destination}  
            setter={setDestination}
            placeholder='Destination de la randonnée...'
          />
          <Textarea
            textareaName='Description'
            value={description}
            onChange={setDescription}
            placeholder='Description de la randonnée...'
          />
          <div className='flex flex-col gap-y-1 text-md'>
            <label>
              Images
            <div className="flex flex-col items-center justify-center   cursor-pointer">
              <AiOutlinePicture size={64} />
              <p className="mb-0">
                <span className="text-md">
                  Cliquer pour sélectionner les images
                </span>
              </p>
            </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                multiple
              />
            </label>
            {/* Afficher le nombre d'images sélectionnées à côté du bouton */}
            {renderSelectedImageCount()}
          </div>
          <ValidationButton
            buttonName='Créer la nouvelle information'
          />
        </form>
      </div>
    </div>
  );
};

export default AccountRandoAdd;
