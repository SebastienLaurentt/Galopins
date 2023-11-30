import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import AccountHeader from '../components/AccountHeader';
import { useNavigate } from 'react-router';

const AccountRandoAdd = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPictures(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
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
          Authorization: `Bearer ${token}`,
          },
        }
      );

      setDate('');
      setDestination('');
      setDescription('');
      setPictures(null);

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
      <div className="flex flex-col justify-center items-center justify-center bg-stone-300 p-4 mt-16">
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-y-4 text-center bg-slate-900 p-8 rounded-md'
        >
          <div className='flex flex-col gap-y-1'>
            <label>Date:</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="text-black rounded-md p-1"
            />
          </div>
          <div className='flex flex-col gap-y-1'>
            <label>Destination:</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="text-black rounded-md p-1"
            />
          </div>
          <div className='flex flex-col gap-y-1'>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="10"
              className="text-black rounded-md p-1"
            />
          </div>
          <div className='flex flex-col gap-y-1'>
            <label>Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-black rounded-md p-1"
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
