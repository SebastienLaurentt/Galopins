
interface SectionProps {
  id?: string;
  paddingBottom: boolean;
  className?: string;
  children: React.ReactNode;
}

function Section({
  id,
  paddingBottom,
  className,
  children,
}: SectionProps) {


  const isPaddingBottom = paddingBottom ? "pb-28 md:pb-32" : "";




  return (
    <section
      id={`${id}`}
      className={` ${isPaddingBottom} ${className} py-4 md:py-8 px-8 text-white`}
    >
      {children}
    </section>
  );
}

export default Section;
