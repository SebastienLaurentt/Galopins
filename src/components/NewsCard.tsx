interface NewsCardProps {
    title:string;
    date:string;
    description:string;

}

function NewsCard ({title, date, description}: NewsCardProps) {
    return (
        <div className='flex flex-col'>
            <div className='bg-gray-800 bg-opacity-80 rounded-2xl md:rounded-full xl:rounded-3xl py-4 px-6  md:pt-6'>
                <h4 className="mb-4 font-bold border-b pb-2 px-6">
                    {title}
                </h4>
                <p className="mb-2">
                    {description}
                </p>
                <h5 className="mb-0">
                    {date}
                </h5>
            </div>
        </div>
    )
}

export default NewsCard;
