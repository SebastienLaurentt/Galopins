

interface CardProps {
  mainImage: string;
  description?: string;
  onZoomClick: (image: string) => void;
}

function Card({ mainImage, onZoomClick }: CardProps) {
  return (
    <div className="mb-8">
      <img 
        src={mainImage} 
        alt="" 
        className="rounded-3xl transition-all duration-400 hover:md:scale-[1.04] h-[12rem] md:h-[24rem] xl:h-[28rem] mx-auto cursor-pointer"
        onClick={() => onZoomClick(mainImage)}
      />
    </div>
  );
}

export default Card;
