import { TfiLocationPin } from 'react-icons/tfi';


interface LinkProps {
    href:string;
    linkName:string;
    classname?:string;
}


function Link ({href, linkName, classname }: LinkProps) {

    return(
            <a 
                className={`flex  p-2 rounded-lg md:text-lg md:p-4 md:hover:bg-green-600 ${classname} bg-green-800`}
                href={href}
                target='_blank'
            >
                <div className='flex gap-x-2'>
                    {linkName}
                    <TfiLocationPin className="text-xl md:text-2xl"/>
                </div>
            </a>
        )


}

export default Link;