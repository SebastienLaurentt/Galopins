
interface SectionProps {
  id?: string;
  className?: string;
  minHeightScreen:boolean;
  bg?:string;
  children: React.ReactNode;
}

function Section({
  id,
  className,
  minHeightScreen,
  bg,
  children,
}: SectionProps) {

  const isMinHeightScreen = minHeightScreen ? "min-h-screen" : "";

  return (
    <section
      id={`${id}`}
      className={` ${className} ${isMinHeightScreen} relative p-4 md:p-8 bg-center bg-cover w-full`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
    }}
    >
      {children}
    </section>
  );
}

export default Section;
