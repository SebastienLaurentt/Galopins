interface SectionHeaderProps {
    sectionTitle:string;
    children:React.ReactNode;
}

function SectionHeader ({sectionTitle, children}: SectionHeaderProps) {
    return (
        <div className='flex items-center gap-x-4 mt-4 mb-12 justify-center md:justify-start'>
            <h2>{sectionTitle}</h2>
            {children}
        </div>
    )
}

export default SectionHeader;
