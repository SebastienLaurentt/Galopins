import { useState } from "react";
import Link from "../components/Link";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../components/Auth";

function Login () {

    const navigate = useNavigate(); 
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post('https://young-oasis-97886-5eb78d4cde61.herokuapp.com/api/login', {
            username: username,
            password: password,
        });



        // If success, set the state auth to true with the hook useAuth and log connexion response
        login();
        console.log('Réponse de la connexion:', response.data);

        // User data
        const user = response.data.data;
        
        // If success, redirection
        if (user) {
            navigate('/account');
        }
        } catch (error) {
        console.error('Erreur de connexion:', error);
        setError("Nom d'utilisateur ou mot de passe incorrect.");
        }

        // Reset Username and Password after Submit
        setUsername('');
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
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <input
                        type="username"
                        id="username"
                        className="text-black rounded-md p-1"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setError(null);
                        }}
                        required
                        />
                    </div>
                    <div className="flex flex-col gap-y-1 items-center">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                        type="password"
                        id="password"
                        className="text-black rounded-md p-1"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError(null);
                        }}
                        required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
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