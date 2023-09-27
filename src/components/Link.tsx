import { TfiLocationPin } from 'react-icons/tfi';


interface LinkProps {
    href:string;
    linkName:string;
    classname?:string;
}


function Link ({href, linkName, classname }: LinkProps) {

    return(
            <a 
                className={`flex  p-2 rounded-lg md:text-lg 2xl:text-2xl md:p-4 md:hover:bg-green-600 ${classname} bg-green-800`}
                href={href}
                target='_blank'
            >
                <div className='flex gap-x-2 items-center'>
                    {linkName}
                    <TfiLocationPin className="text-lg md:text-2xl 2xl:text-3xl"/>
                </div>
            </a>
        )


}

export default Link;