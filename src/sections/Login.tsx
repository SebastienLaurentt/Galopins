import { useState } from "react";
import Link from "../components/Link";
import { BiArrowBack } from "react-icons/bi";

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

          // Ajoutez ici la logique de connexion, comme l'envoi des données au serveur

    console.log('Email:', email);
    console.log('Password:', password);

    // Réinitialise les champs après la soumission
    setEmail('');
    setPassword('');
  };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-y-4 ">
            <div className="bg-slate-900 p-4">
                <h3 className="text-center">
                    Les Galopins
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                        type="email"
                        id="email"
                        className="text-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe: </label>
                        <input
                        type="password"
                        id="password"
                        className="text-black"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit" className="md:hover:font-bold">Se connecter</button>
                </form>
            </div>

            <Link 
                    href="/"
                    linkName="Retourner sur le site des Galopins"
                    logo={<BiArrowBack />}
                    classname='md:ml-4'
            />

        </div>
    );
}

export default Login;