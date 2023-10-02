interface ClubIconProps {
    children:React.ReactNode;
    iconDescription:string;
}

function ClubIcon ({children, iconDescription}: ClubIconProps) {
    return (
        <div className='flex flex-col items-center text-center gap-y-2 p-6'>
            {children}
            <span className='mb-2'>{iconDescription}</span>
        </div>
    )
}

export default ClubIcon;
