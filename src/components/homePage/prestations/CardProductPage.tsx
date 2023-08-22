import React from "react";
import Image from "next/image";

interface ICardPrestation {
  name: string;
  description: string;
  image: string;
}

function CardProductPage({ name, description, image }: ICardPrestation) {
  return (
    <div className="w-full sm:w-5/6 flex flex-col items-center h-full">
      <div className="flex items-start font-ibarra text-2xl sm:text-3xl italic justify-between h-1/5 py-16">
        <h1 className="pr-10">{name}</h1>
        <Image src={image} width={100} height={100} alt={name} />
      </div>
      <p className="h-4/5 flex items-center text-center font-imprima text-base sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default CardProductPage;
