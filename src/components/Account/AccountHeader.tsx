import { BiArrowBack } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "./Auth";
import { useLocation } from 'react-router-dom';
import AccountLinkButton from "./AccountLinkButton";

function AccountHeader () {
    const { logout } = useAuth(); 
    const location = useLocation();

    const isAccountRoute = location.pathname === '/account';

    const handleLogout = async () => {
        logout();
        };

    return (
        <header className='p-4'>
            <ul className="flex flex-wrap gap-4 justify-center">
                <li>
                    <AccountLinkButton
                        bgColor='bg-sky-800'
                        href="/"
                        linkName="Retourner sur les Galopins"
                        logo={<BiArrowBack/>}
                        classname='md:hover:bg-sky-600'
                    />
                </li>
                {!isAccountRoute && (
                <li>
                    <AccountLinkButton
                        bgColor='bg-sky-800'
                        href="/account"
                        linkName="Espace Administrateur"
                        logo={<BiArrowBack/>}
                        classname='md:hover:bg-sky-600'
                    />
                </li>
                )}
                <li>
                    <AccountLinkButton
                        onClick={handleLogout}
                        bgColor='bg-red-800'
                        href="/auth/login"
                        linkName="Deconnexion"
                        logo={<CiLogout/>}
                        classname='md:hover:bg-red-600'
                    />
                </li>
            </ul>

        </header>
    )
}

export default AccountHeader;