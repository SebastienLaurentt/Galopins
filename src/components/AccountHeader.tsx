import { BiArrowBack } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "./Auth";
import ButtonLink from "./ButtonLink";
import { useLocation } from 'react-router-dom';

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
                    <ButtonLink
                        bgColor='bg-green-800'
                        bgHoverColor='bg-green-600'
                        href="/"
                        linkName="Retourner sur les Galopins"
                        logo={<BiArrowBack/>}
                        classname=''
                    />
                </li>
                {!isAccountRoute && (
                <li>
                    <ButtonLink
                        bgColor='bg-green-800'
                        bgHoverColor='bg-green-600'
                        href="/account"
                        linkName="Espace Administrateur"
                        logo={<BiArrowBack/>}
                        classname=''
                    />
                </li>
                )}
                <li>
                    <ButtonLink
                        onClick={handleLogout}
                        bgColor='bg-red-800'
                        bgHoverColor='bg-red-600'
                        href="/auth/login"
                        linkName="Deconnexion"
                        logo={<CiLogout/>}
                        classname=''
                    />
                </li>
            </ul>

        </header>
    )
}

export default AccountHeader;