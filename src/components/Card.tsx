interface CardProps {
    mainImage: string;
    description?: string;
  }

function Card({ mainImage, }: CardProps) {


    return (
            <div className="">
                <img src={`${mainImage}`} alt="" className=" rounded-3xl transition-all duration-400 hover:md:scale-[1.02] h-[8rem] md:h-[24rem] xl:h-[31rem] mx-auto" />
            </div>
    );
  }
  
  export default Card;