import { BiSolidDownload } from 'react-icons/bi';


interface ArchiveDownloadButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    classname?:string;
    linkName:string;
}


function ArchiveDownloadButton ({onClick, classname, linkName, }: ArchiveDownloadButtonProps) {
    return(
        <div className="mb-4 xl:mb-0 flex flex-wrap   justify-center">
            <button 
                className={`flex flex-wrap justify-center mb-4 xl:mb-0 p-2 md:p-4 rounded-lg md:text-lg 2xl:text-2xl  md:hover:bg-green-600 ${classname} bg-green-800`}
                onClick={onClick}
            >
                <div className='flex gap-x-2 items-center'>
                    <span>{linkName}</span>
                    <BiSolidDownload className="text-lg md:text-2xl 2xl:text-3xl"/>
                </div>
            </button>
        </div>
        )
}


export default ArchiveDownloadButton;