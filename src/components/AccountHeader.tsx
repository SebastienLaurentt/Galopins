import { BiArrowBack } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

function AccountHeader () {
    const navigate = useNavigate();
    const { logout } = useAuth(); 
    
    const handleLogout = async () => {
        logout();
        navigate('/auth/login');
        };

    return (
        <header className='flex gap-4'>
            <ul>
                <li>
                    <button
                    className="flex  p-2 rounded-lg md:text-lg 2xl:text-2xl md:p-4 md:hover:bg-red-600 bg-red-800"
                    onClick={handleLogout}
                    >
                        <div className='flex gap-x-2 items-center'>
                        <span>
                            Se déconnecter
                        </span>
                        <span className='text-lg md:text-2xl 2xl:text-3xl'>
                            <CiLogout />
                        </span>
                        </div>
                    </button>
                </li>
                <li>
                    <Link
                    href="/"
                    linkName="Retourner sur le site"
                    logo={<BiArrowBack />}
                    classname=''
                    />
                </li>
                <li>
                    
                </li>
            </ul>

        </header>
    )
}

export default AccountHeader;