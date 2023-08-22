"use client";

import React from "react";
import Image from "next/image";
import time from "../../../public/assets/time.png";
import { formatPrice } from "@/service/utils";

interface IBeautyTraitment {
  name: string;
  price: string;
  image: string;
  duration: string;
}

function BeautyTreatments({ name, price, image, duration }: IBeautyTraitment) {
  return (
    <>
      <Image
        src={image}
        width={200}
        height={100}
        alt={name}
        className="w-48 sm:w-full h-2/4 sm:h-2/4 border-b border-darkText"
      />
      <div className="h-1/2 sm:h-2/4 flex flex-col justify-between">
        <h1 className="w-full h-full flex justify-center text-center px-2 pt-2 sm:px-4 sm:pt-4 text-base sm:text-base font-imprima ">
          {name}
        </h1>
        <div className="flex h-1/4  w-full items-center text-md pt-6 sm:text-md">
          <p className="pl-4 h-full flex items-end">{formatPrice(price)}€</p>
          <div className="flex justify-end w-full pr-4 gap-2 text-md sm:text-md h-full items-end">
            <p>{duration}&apos;</p>
            <Image src={time} width={30} height={30} alt="time" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BeautyTreatments;
