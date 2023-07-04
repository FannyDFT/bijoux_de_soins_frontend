"use client";

import React from "react";
import Image from "next/image";
import time from "../../../public/assets/time.png";

interface IBeautyTraitment {
  name: string;
  price: string;
  image: string;
  duration: string;
}

function BeautyTreatments({ name, price, image, duration }: IBeautyTraitment) {
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
        className="w-full h-72"
      />
      <h1 className="flex w-full justify-center text-center px-4 font-ibarra text-2xl sm:text-xl">
        {name}
      </h1>
      <div className="flex w-full items-center text-lg sm:text-base">
        <p className="pl-4">{formatPrice(price)}€</p>
        <div className="flex justify-end w-full pr-4 gap-2">
          <p>{duration}&apos;</p>
          <Image src={time} width={30} height={30} alt="time" />
        </div>
      </div>
    </>
  );
}

export default BeautyTreatments;
