interface CardProps {
    mainImage: string;
    description?: string;
  }

function Card({ mainImage, }: CardProps) {


    return (
            <div className="">
                <img src={`${mainImage}`} alt="" className=" rounded-3xl transition-all duration-400 hover:md:scale-[1.02] h-auto w-full " />
            </div>
    );
  }
  
  export default Card;