interface ClubIconProps {
    children:React.ReactNode;
    iconDescription:string;
}

function ClubIcon ({children, iconDescription}: ClubIconProps) {
    return (
        <div className='flex flex-col items-center text-center gap-y-2'>
            {children}
            <span className='mb-8'>{iconDescription}</span>
        </div>
    )
}

export default ClubIcon;
