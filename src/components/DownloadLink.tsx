import { BiSolidDownload } from 'react-icons/bi';


interface DownloadLinkProps {
    file:string;
    fileName:string;
    linkName:string;
    classname?:string;
}


function DownloadLink ({file, fileName, linkName, classname }: DownloadLinkProps) {

    return(
            <a 
                className={`flex  p-2 rounded-lg md:text-lg md:p-4 md:hover:bg-green-600 ${classname} bg-green-800`}
                href={file}
                download ={fileName}
            >
                <div className='flex gap-x-2'>
                    {linkName}
                    <BiSolidDownload className="text-xl md:text-2xl"/>
                </div>
            </a>
        )


}


export default DownloadLink;