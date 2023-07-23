"use client";

import React from "react";
import Image from "next/image";
import garbage from "../../../public/assets/poubelle.png";
import update from "../../../public/assets/editer.png";
import { formatPrice } from "@/service/utils";

interface IProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  handleShowModal: () => void;
}

function ProductsCard({ name, image, price, handleShowModal }: IProduct) {
  return (
    <div className="flex flex-wrap justify-around gap-6 pb-4 items-center border-b border-darkText w-5/6 font-imprima ">
      <p className="flex-1">{name}</p>
      <Image
        src={image}
        width={40}
        height={40}
        alt="product"
        className="w-10 h-10"
      />
      <p className="flex-1">Tarif: {formatPrice(price)}€</p>
      <Image
        src={update}
        width={20}
        height={20}
        alt="update"
        className=" cursor-pointer"
        onClick={handleShowModal}
      />
      <Image
        src={garbage}
        width={20}
        height={20}
        alt="delete"
        className=" cursor-pointer"
      />
    </div>
  );
}

export default ProductsCard;
