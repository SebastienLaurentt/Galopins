
interface SectionProps {
  id?: string;
  className?: string;
  bg:string;
  children: React.ReactNode;
}

function Section({
  id,
  className,
  bg,
  children,
}: SectionProps) {

  return (
    <section
      id={`${id}`}
      className={` ${className} h-screen relative p-4 md:p-8 bg-center bg-cover w-full`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${bg})`,
    }}
    >
      {children}
    </section>
  );
}

export default Section;
