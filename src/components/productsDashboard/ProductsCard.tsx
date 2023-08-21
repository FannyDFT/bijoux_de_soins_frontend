"use client";

import React from "react";
import Image from "next/image";
import garbage from "../../../public/assets/poubelle.png";
import update from "../../../public/assets/editer.png";
import { formatPrice } from "@/service/utils";
import ModalConfirmation from "../ModalConfirmation";

interface IProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  handleShowModal: () => void;
  deleteProduct: (productId: string) => void;
  showModalConfirmation: boolean;
  setShowModalConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

function ProductsCard({
  name,
  image,
  price,
  id,
  handleShowModal,
  deleteProduct,
  showModalConfirmation,
  setShowModalConfirmation,
}: IProduct) {
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
        className="zoom cursor-pointer"
        onClick={handleShowModal}
      />
      <Image
        src={garbage}
        width={20}
        height={20}
        alt="delete"
        className="zoom cursor-pointer "
        onClick={() => setShowModalConfirmation(true)}
      />
      <div className=" w-full h-3/4">
        {showModalConfirmation && (
          <ModalConfirmation
            deleteProduct={() => deleteProduct(id)}
            setShowModalConfirmation={setShowModalConfirmation}
          />
        )}
      </div>
    </div>
  );
}

export default ProductsCard;
