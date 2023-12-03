import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import Input from '../../components/Account/Input';
import AccountHeader from '../../components/Account/AccountHeader';
import Textarea from '../../components/Account/TextArea';

const AccountNewsAdd = () => {
  const navigate = useNavigate();

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

      navigate('/account');
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'informations :', error);
    }
  };

  return (
    <div className="min-h-screen bg-stone-300 p-4 ">
      <AccountHeader />
      <h3 className="text-black  text-center m-8">
          Formulaire d'ajout d'une nouvelle information
      </h3>
      <div className=" flex flex-col justify-center items-center justify-center bg-stone-300 p-4 mt-16">
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 text-center bg-slate-900 p-8 rounded-md'>
          <Input 
            inputName='Date'
            value={date}  
            onChange={setDate}
            placeholder='JJ/MM/AAAA'
          />
          <Input 
            inputName='Titre'
            value={title}  
            onChange={setTitle}
            placeholder='Titre'
          />
          <Textarea
            textareaName='Description'
            value={description}
            onChange={setDescription}
            placeholder='Description'
          />
            <button type="submit" className='mt-4 md:hover:font-bold'>Créer la nouvelle information</button>
        </form>
      </div>
    </div>
  );
};

export default AccountNewsAdd;
