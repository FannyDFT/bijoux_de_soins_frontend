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
        height={300}
        alt={name}
        className="w-full h-60 border-b border-darkText"
      />
      <h1 className="flex w-full justify-center text-center px-4 pt-4 font-ibarra text-xl ">
        {name}
      </h1>
      <div className="flex w-full items-center text-md pt-6 sm:text-md">
        <p className="pl-4">{formatPrice(price)}€</p>
        <div className="flex justify-end items-center w-full pr-4 gap-2 text-md sm:text-md">
          <p>{duration}&apos;</p>
          <Image src={time} width={30} height={30} alt="time" />
        </div>
      </div>
    </>
  );
}

export default BeautyTreatments;
