"use client";

import { getAll } from "@/service/axiosTools";
import { IProductsData } from "@/types/IProductsData";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productsDashboard/ProductsCard";
import more from "../../../public/assets/plus.png";
import Image from "next/image";
import axios from "axios";
// import Modal from "../Modal";
// import { v4 as uuidv4 } from "uuid";

function ProductsList() {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [products, setProducts] = useState<IProductsData[]>([]);
  const [selectedProductCategory, setSelectedProductCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  console.log(products);
  console.log(selectedProductCategory);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProductCategory(e.target.value);
  };

  const handleDelete = async (productId: string) => {
    try {
      await axios.delete(`${URL}/product/${productId}`); // Appeler la fonction de suppression avec l'ID du produit
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId),
      );
    } catch (error) {
      console.log(error);
    }
  };

  //fonction permettant d'ajouter un produit à la base de données
  // const handleAddProduct = async (productData) => {
  //   try {
  //     const newProduct = {
  //       id: uuidv4(),
  //       ...productData,
  //     };

  //     const response = await axios.post(`${URL}/product`, newProduct);

  //     setProducts((prevProducts) => [...prevProducts, newProduct]);
  //     setShowModal(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
    <>
      <div className="w-full h-1/5 flex justify-center">
        <input
          type="text"
          onChange={handleChangeInput}
          placeholder="Rechercher"
          className="border border-darkText"
        />
      </div>
      <div className="w-full h-96 overflow-y-scroll flex flex-col gap-8 items-center">
        {products
          // .filter((product) => {
          //   const categoryName = product.name.toLowerCase();
          //   const selectedCategory = selectedProductCategory?.toLowerCase();

          //   if (selectedCategory) {
          //     return categoryName.includes(selectedCategory);
          //   }

          //   return true;
          // })
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              onDelete={() => handleDelete(product.id)}
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
      <div className="absolute w-full h-2/3">
        {showModal && (
          <Modal
            setProducts={setProducts}
            setShowModal={setShowModal}
            setSelectedProductCategory={setSelectedProductCategory}
            handleAddProduct={handleAddProduct}
          />
        )}
      </div>
    </>
  );
}

export default ProductsList;
