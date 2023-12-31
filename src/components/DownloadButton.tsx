import { BiSolidDownload } from 'react-icons/bi';


interface DownloadButtonProps {
    classname?:string;
    file?:string;
    fileName?:string;
    linkName:string;
}


function DownloadButton ({ classname, file, fileName, linkName, }: DownloadButtonProps) {

    return(
            <a 
                className={`flex  p-2 rounded-lg md:text-lg 2xl:text-2xl md:p-4 md:hover:bg-green-600 ${classname} bg-green-800`}
                href={file}
                download ={fileName}
                target="_blank"
            >
                <div className='flex gap-x-2 items-center'>
                    <span>{linkName}</span>
                    <BiSolidDownload className="text-lg md:text-2xl 2xl:text-3xl"/>
                </div>
            </a>
        )


}


export default DownloadButton;