"use client";

import React from "react";
import Image from "next/image";

interface IProduct {
  name: string;
  price: string;
  image: string;
}

function ProductCard({ name, image, price }: IProduct) {
  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price); // Convertir en nombre
    const roundedPrice = numericPrice.toFixed(2); // Arrondir à deux décimales
    return roundedPrice; // Retourner la valeur arrondie
  };
  return (
    <div className="flex flex-col gap-2 justify-between h-full w-40 items-center bg-white border border-darkText rounded-t-lg shadow-xl">
      <Image
        src={image}
        width={100}
        height={200}
        alt={name}
        className="w-full h-32 border-b border-darkText rounded-t-lg"
      />
      <p className="text-center px-4 ">{name}</p>
      <p className="pb-4 px-4">{formatPrice(price)} €</p>
    </div>
  );
}

export default ProductCard;
