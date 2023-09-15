interface SectionHeaderProps {
    sectionTitle:string;
    children:React.ReactNode;
}

function SectionHeader ({sectionTitle, children}: SectionHeaderProps) {
    return (
        <div className='flex items-center gap-x-2 md:gap-x-4 mt-12 mb-8 md:ml-4 xl:ml-8  justify-center md:justify-start'>
            <h2>{sectionTitle}</h2>
            {children}
        </div>
    )
}

export default SectionHeader;
