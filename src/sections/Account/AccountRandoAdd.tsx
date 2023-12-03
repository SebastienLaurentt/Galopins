import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import Input from '../../components/Account/Input';
import AccountHeader from '../../components/Account/AccountHeader';
import Textarea from '../../components/Account/Textarea';

const AccountRandoAdd = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const imageArray = Array.from(files).map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();

          reader.onloadend = () => {
            resolve(reader.result as string);
          };

          reader.onerror = reject;

          if (file) {
            reader.readAsDataURL(file);
          }
        });
      });

      Promise.all(imageArray).then((base64Images: string[]) => {
        setPictures(base64Images);
      });
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
      <h3 className="text-black text-center m-8">
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
            placeholder='Destination'
          />
          <Textarea
            textareaName='Description'
            value={description}
            onChange={setDescription}
            placeholder='Description'
          />
          <div className='flex flex-col gap-y-1'>
            <label>Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-black rounded-md p-1"
              multiple
            />
          </div>
          <button type="submit" className='mt-4 md:hover:font-bold'>
            Créer la nouvelle randonnée
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountRandoAdd;
