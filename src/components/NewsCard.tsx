interface NewsCardProps {
    title:string;
    location:string;
    frequency:string;
    description1:string;
    description2:string;

}

function NewsCard ({title, location, frequency, description1, description2, }: NewsCardProps) {
    return (
        <div className='flex flex-col'>
            <div className='bg-green-600 bg-opacity-40 rounded-2xl md:rounded-full xl:rounded-3xl p-4 md:p-8'>
                <h4 className="mb-0">
                    {title}
                </h4>
                <h5 className="mb-4">
                    {location}
                </h5>
                <p className="mb-0">
                    {frequency}
                </p>
                <ul className="mt-2">
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
        </div>
    )
}

export default NewsCard;
