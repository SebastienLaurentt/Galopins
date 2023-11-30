
interface CardProps {
  mainImage: string;
  description?: string;
}

function Card({ mainImage}: CardProps) {
  return (
  <div className="p-4 ">
  <img 
    src={mainImage} 
    alt="" 
    className="rounded-3xl transition-all duration-400 cursor-pointer "
  />
  </div> 
  );
}

export default Card;



{/* <div className="p-4 ">
<img 
  src={mainImage} 
  alt="" 
  className="rounded-3xl transition-all duration-400 cursor-pointer "
/>
</div> */}