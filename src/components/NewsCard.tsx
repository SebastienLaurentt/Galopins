interface NewsCardProps {
    title:string;
    date:string;
    description:string;

}

function NewsCard ({title, date, description}: NewsCardProps) {
    return (
        <div className='flex flex-col'>
            <div className='bg-gray-800 bg-opacity-80 rounded-2xl md:rounded-full xl:rounded-3xl p-4 md:p-8'>
                <h4 className="mb-0">
                    {title}
                </h4>
                <h5 className="mb-4">
                    {date}
                </h5>
                <p className="mb-0">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default NewsCard;
