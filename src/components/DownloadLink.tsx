interface DownloadLinkProps {
    file:string;
    fileName:string;
    linkName:string;
    classname?:string;
}


function DownloadLink ({file, fileName, linkName, classname }: DownloadLinkProps) {

    return(
            <a 
                className={`border-2 p-2 rounded-lg md:text-lg md:p-4 md:hover:bg-white md:hover:text-black ${classname}`}
                href={file}
                download ={fileName}
            >
                {linkName}
            </a>
        )


}


export default DownloadLink;