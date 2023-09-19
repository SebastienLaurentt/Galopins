interface ParcoursCardProps {
    day:string;
    level?:string;
    description1:string;
    description2:string;
    description3?:string;
}

function ParcoursCard ({day, level, description1, description2, description3}: ParcoursCardProps) {
    return (
        <div className='flex flex-col'>
            <div className='bg-green-600 bg-opacity-40 rounded-2xl md:rounded-full xl:rounded-3xl p-4 md:p-8'>
                <h3 className="mb-0">
                    {day}
                </h3>
                <span className='italic'>
                    {level}
                </span>
                <ul className="mt-4">
                    <li>
                        <p className="mb-0">
                            {description1}
                        </p>
                    </li>
                    <li>
                        <p className="mb-0">
                            {description2}
                        </p>
                    </li>
                    <li>
                        <p className="mb-0">
                            {description3}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ParcoursCard;
