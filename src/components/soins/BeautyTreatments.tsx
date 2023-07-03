"use client";

import React from "react";
import Image from "next/image";
import time from "../../../public/assets/time.png";

function BeautyTreatments({ name, price, image, duration }) {
  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price); // Convertir en nombre
    const roundedPrice = numericPrice.toFixed(2); // Arrondir à deux décimales
    return roundedPrice; // Retourner la valeur arrondie
  };
  return (
    <>
      <Image
        src={image}
        width={200}
        height={300}
        alt={name}
        className="w-full"
      />
      <h1 className="flex w-full justify-center text-center px-4">{name}</h1>
      <div className="flex w-full items-center">
        <p className="pl-4">{formatPrice(price)}€</p>
        <div className="flex justify-end w-full pr-4 gap-1">
          <p>{duration}</p>
          <Image src={time} width={30} height={30} alt="time" />
        </div>
      </div>
    </>
  );
}

export default BeautyTreatments;
