interface HomeIconProps {
    children:React.ReactNode;
    iconDescription:string;
}

function HomeIcon ({children, iconDescription}: HomeIconProps) {
    return (
        <div className='flex flex-col items-center text-center gap-y-2 p-6'>
            {children}
            <span className=''>{iconDescription}</span>
        </div>
    )
}

export default HomeIcon;
