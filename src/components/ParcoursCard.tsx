interface ParcoursCardProps {
    day:string;
    level:string;
    description1:string;
    description2:string;
}

function ParcoursCard ({day, level, description1, description2}: ParcoursCardProps) {
    return (
        <div className='flex flex-col border rounded-lg p-4 bg-'>
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