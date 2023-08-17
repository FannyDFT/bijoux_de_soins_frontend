import React from "react";
import Image from "next/image";

interface ICardPrestation {
  name: string;
  description: string;
  image: string;
}

function CardProductPage({ name, description, image }: ICardPrestation) {
  return (
    <div className="w-3/4 flex flex-col gap-10 items-center h-full">
      <div className="flex items-center font-ibarra text-3xl italic justify-between h-1/5 py-16">
        <h1 className="pr-10">{name}</h1>
        <Image src={image} width={120} height={120} alt={name} />
      </div>
      <p className="h-4/5 text-center font-imprima text-lg">{description}</p>
    </div>
  );
}

export default CardProductPage;
