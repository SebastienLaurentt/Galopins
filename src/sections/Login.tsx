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
        <div className="min-h-screen flex flex-col items-center justify-center gap-y-4 bg-stone-300">
            <div className="bg-slate-900 p-8 rounded-md">
                <h3 className="text-center">
                    Les Galopins
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-1 items-center">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        className="text-black rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div className="flex flex-col gap-y-1 items-center">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                        type="password"
                        id="password"
                        className="text-black rounded-md"
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
                    linkName="Retourner sur le site"
                    logo={<BiArrowBack />}
                    classname=''
            />

        </div>
    );
}

export default Login;