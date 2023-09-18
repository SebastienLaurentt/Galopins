interface SubSectionProps {
  className?: string;
  children: React.ReactNode;
}

function SubSection({
  className,
  children,
}: SubSectionProps) {

  return (
    <section
      className={` ${className} text-center md:text-left flex flex-col mx-auto p-4 md:p-8 xl:p-20  `}
    >
      {children}
    </section>
  );
}

export default SubSection;
