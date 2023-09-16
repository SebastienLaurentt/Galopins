interface TagProps {
    tagName:string;
    classname?:string;
}


function Tag ({tagName, classname }: TagProps) {

    return(
            <div className={`p-2 rounded-lg inline text-black font-bold ${classname}`}>
                {tagName}
            </div>
        )
}


export default Tag;