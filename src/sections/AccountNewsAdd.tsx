import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AccountNewsAdd = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // Get token cookie for Authorization
      const token = Cookies.get('token');
      console.log(token)

      // Error gestion if token not available
      if (!token) {
        console.error('Le token n\'est pas disponible.');
        return;
      }

      // POST request to add new Info
      const response = await axios.post('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/infos', 
        {
          date,
          title,
          description,
        },
        {
        headers: {
          Authorization: `Bearer ${token}`,
          },
        }
      );

      // Reset form after submit success
      setDate('');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'informations :', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-300 p-4 ">
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 text-center bg-slate-900 p-8 rounded-md'>
            <div className='flex flex-col gap-y-1'>
                <label>Date:</label>
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} required className="text-black rounded-md p-1" />         
            </div>
            <div className='flex flex-col gap-y-1'>
                <label>Titre:</label>
                <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} required className="text-black rounded-md p-1"  />
            </div>
            <div className='flex flex-col gap-y-1'>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className="text-black rounded-md p-1" />      
            </div>
            <button type="submit" className='mt-4'>Créer la nouvelle information</button>
        </form>
    </div>

  );
};

export default AccountNewsAdd;
