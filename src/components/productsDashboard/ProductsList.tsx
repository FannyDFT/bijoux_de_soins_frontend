"use client";

import { getAll } from "@/service/axiosTools";
import { IProductsData } from "@/types/IProductsData";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productsDashboard/ProductsCard";
import more from "../../../public/assets/plus.png";
import Image from "next/image";
import Modal from "../Modal";

function ProductsList() {
  const [products, setProducts] = useState<IProductsData[]>([]);
  const [selectedProductCategory, setSelectedProductCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  //fonction pour l'affichage de la modale
  const handleShowModal = () => {
    setShowModal(true);
  };

  //fonction qui réccupère la saisie pour sélectionner un produit
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProductCategory(e.target.value);
  };

  //fonction qui réccupère tous les produits
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        const allProducts = Object.values(data.allProducts).flat();
        setProducts(allProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full pt-8 flex flex-col gap-10 justify-center">
      <div className="w-full h-1/5 flex justify-center">
        <input
          type="text"
          onChange={handleChangeInput}
          placeholder="Rechercher..."
          className="border border-darkText py-1 px-2"
        />
      </div>
      <div className="w-full h-96  overflow-y-scroll no-scrollbar flex flex-col gap-8 items-center">
        {products
          .filter((product) => {
            const categoryName = product.name.toLowerCase();
            const selectedCategory = selectedProductCategory?.toLowerCase();

            if (selectedCategory) {
              return categoryName.includes(selectedCategory);
            }

            return true;
          })
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              handleShowModal={handleShowModal}
            />
          ))}
      </div>

      <div className="w-full h-1/5 flex justify-end pr-28 ">
        <Image
          src={more}
          width={40}
          height={40}
          alt="more"
          onClick={handleShowModal}
          className="cursor-pointer"
        />
      </div>
      <div className=" w-full h-3/4">
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </div>
  );
}

export default ProductsList;
