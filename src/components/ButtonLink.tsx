import { Link } from "react-router-dom";

interface LinkProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    bgColor:string;
    bgHoverColor:string;
    href:string;
    linkName:string;
    logo: React.ReactNode;
    classname?:string;
}


function ButtonLink ({onClick, bgHoverColor, bgColor, href, linkName, logo, classname }: LinkProps) {

    return(
        <button
        onClick={onClick}>
            <Link
                className={`flex  p-2 md:p-4 rounded-lg md:text-lg 2xl:text-2xl  ${classname} ${bgColor} md:hover:${bgHoverColor}`}
                to={href}
                target='_blank' 
            >
                <div className='flex gap-x-2 items-center'>
                    {linkName}
                    <span className="text-lg md:text-2xl 2xl:text-3xl">{logo}</span>
                </div>
            </Link>
        </button>

        )


}

export default ButtonLink;