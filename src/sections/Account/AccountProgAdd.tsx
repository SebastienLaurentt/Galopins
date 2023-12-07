import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import Input from '../../components/Account/Input';
import AccountHeader from '../../components/Account/AccountHeader';
import { AiOutlineFilePdf } from 'react-icons/ai';
import ValidationButton from '../../components/Account/ValidationButton';
import { RotatingLines } from 'react-loader-spinner';

const AccountProgAdd = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [pdfContent, setPdfContent] = useState<string | null>(null);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handlePdfChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoadingPdf(true);
    const file = e.target.files?.[0];

    if (file) {
      try {
        const base64Pdf = await convertToBase64(file);
        setPdfContent(base64Pdf);
      } catch (error) {
        console.error('Erreur lors de la conversion du fichier PDF :', error);
      } finally {
        setLoadingPdf(false);
      }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoadingSubmit(true);
      const token = Cookies.get('token');

      if (!token) {
        console.error('Le token n\'est pas disponible.');
        return;
      }

      const response = await axios.post(
        'https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/progs',
        {
          name,
          content: pdfContent,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName('');
      setPdfContent(null);

      console.log(response.data);

      // Show success message
      setShowSuccessMessage(true);

      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/account');
      }, 3000);
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'informations :', error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-300 p-4">
      <AccountHeader />
      <h3 className="text-black text-center m-4">
        Formulaire d'ajout d'un nouveau programme
      </h3>

      <div className="flex flex-col justify-center items-center justify-center bg-stone-300 p-4 mt-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 text-center bg-slate-900 p-8 rounded-md"
        >
          <Input
            inputName="Nom du programme"
            value={name}
            setter={setName}
            placeholder="Nom du programme..."
          />
          <div className="flex flex-col gap-y-1 text-md">
            <label>
              Programme (PDF)
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <AiOutlineFilePdf size={64} />
                <p className="mb-0">
                  <span className="text-md">
                    Cliquer ici pour sélectionner le fichier PDF
                  </span>
                </p>
              </div>
              <input
                type="file"
                accept=".pdf"
                onChange={handlePdfChange}
                className="hidden"
              />
            </label>
            {/* Conditionally render the Loader based on the loading state */}
            {loadingPdf && (
              <span className="flex justify-center">
                <RotatingLines
                  strokeColor="green"
                  strokeWidth="5"
                  animationDuration="0.5"
                  width="32"
                  visible={true}
                />
              </span>
            )}
            {/* Display confirmation message */}
            {pdfContent && (
              <span className="text-green-600 mt-2 text-md">
                Fichier PDF sélectionné
              </span>
            )}
          </div>
          {/* Conditionally render the Loader based on the loading state */}
          {loadingSubmit ? (
            <span className="flex justify-center">
              <RotatingLines
                strokeColor="green"
                strokeWidth="5"
                animationDuration="0.5"
                width="32"
                visible={true}
              />
            </span>
          ) : null /* Don't render the button if loadingSubmit is true */}
          {/* Conditionally render the success message */}
          {showSuccessMessage && (
            <span className="text-green-600 mt-2 text-md">
              Programme créé ! Vous allez être redirigé.
            </span>
          )}
          {/* Render the button outside the form to prevent it from re-rendering */}
          {!loadingSubmit && !showSuccessMessage && (
            <ValidationButton buttonName="Ajouter le nouveau programme" />
          )}
        </form>
      </div>
    </div>
  );
};

export default AccountProgAdd;
