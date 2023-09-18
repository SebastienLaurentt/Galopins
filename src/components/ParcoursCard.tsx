interface ParcoursCardProps {
    day:string;
    level:string;
    description1:string;
    description2:string;
}

function ParcoursCard ({day, level, description1, description2}: ParcoursCardProps) {
    return (
        <div className='flex flex-col rounded-2xl md:rounded-full xl:rounded-3xl p-8 bg-yellow-900 opacity-90'>
            <h3>
                {day}
            </h3>
            <span className='italic mb-4'>
                {level}
            </span>
            <ul >
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
            </ul>
        </div>
    )
}

export default ParcoursCard;