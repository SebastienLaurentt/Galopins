import { BiArrowBack } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";
import ButtonLink from "./ButtonLink";

function AccountHeader () {
    const { logout } = useAuth(); 
    
    const handleLogout = async () => {
        logout();
        };

    return (
        <header className=''>
            <ul className="flex flex-row justify-center">
                <li>
                    <ButtonLink
                        bgColor='bg-green-800'
                        bgHoverColor='bg-green-600'
                        href="/"
                        linkName="Retourner sur les Galopins"
                        logo={<BiArrowBack/>}
                        classname='md:ml-4'
                    />
                </li>
                <li>
                    <ButtonLink
                        bgColor='bg-green-800'
                        bgHoverColor='bg-green-600'
                        href="/account"
                        linkName="Espace Administrateur"
                        logo={<BiArrowBack/>}
                        classname='md:ml-4'
                    />
                </li>
                <li>
                    <ButtonLink
                        onClick={handleLogout}
                        bgColor='bg-red-800'
                        bgHoverColor='bg-red-600'
                        href="/auth/login"
                        linkName="Deconnexion"
                        logo={<CiLogout/>}
                        classname='md:ml-4'
                    />
                </li>
            </ul>

        </header>
    )
}

export default AccountHeader;