import Image from "next/image";
import Link from "next/link";

type Prestation = {
  name: string;
  description: string;
  image: string;
};

function CardPrestationPage({ name, image, description }: Prestation) {
  return (
    <div className="flex flex-col border border-1 border-darkText rounded-lg h-full gap-6 bg-beige">
     
     
     <Image
        src={image}
        width={378}
        height={231}
        alt={name}
        className="rounded-t-lg"
      />
      <div className="px-6">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      
    </div>
  );
}

export default CardPrestationPage;
