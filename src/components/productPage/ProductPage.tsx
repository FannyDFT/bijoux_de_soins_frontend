"use client";
import { getAll } from "@/service/axiosTools";
import { IProductsData } from "@/types/IProductsData";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Banniere from "../Banniere";

type CategoryType =
  | "laboratoireProducts"
  | "pulpeProducts"
  | "referenceProducts"
  | "zaoProducts"
  | "luxyProducts";

function ProductPage() {
  const [productsData, setProductsData] = useState<{
    laboratoireProducts: Array<IProductsData>;
    pulpeProducts: Array<IProductsData>;
    referenceProducts: Array<IProductsData>;
    zaoProducts: Array<IProductsData>;
    luxyProducts: Array<IProductsData>;
  }>({
    laboratoireProducts: [],
    pulpeProducts: [],
    referenceProducts: [],
    zaoProducts: [],
    luxyProducts: [],
  });

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("pulpeProducts");
  // const selectedProducts = productsData[selectedCategory];

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();

      setProductsData({
        laboratoireProducts: data.laboratoireProducts,
        pulpeProducts: data.pulpeProducts,
        referenceProducts: data.referenceProducts,
        zaoProducts: data.zaoProducts,
        luxyProducts: data.luxyProducts,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col font-imprima">
      <div>
        <Banniere title="Les Produits" />
      </div>
      <div className="flex flex-col sm:flex sm:flex-row w-full sm:w-full h-full">
        <div className="w-full h-24 sm:h-screen sm:w-1/4 bg-beige bg-opacity-40 overflow-x-scroll overflow-hidden border-r-2 border-darkText flex flex-row gap-5 sm:flex sm:flex-col sm:items-start sm:gap-10 font-imprima">
          <button
            className="pt-0 pl-5 sm:pt-10 hover:text-terracota text-lg whitespace-nowrap"
            onClick={() => handleCategoryChange("pulpeProducts")}
          >
            Pulpe de vie
          </button>
          <button
            className="pl-5 hover:text-terracota text-lg whitespace-nowrap"
            onClick={() => handleCategoryChange("referenceProducts")}
          >
            Référence Cosmétique
          </button>
          <button
            className="pl-5 hover:text-terracota text-lg whitespace-nowrap"
            onClick={() => handleCategoryChange("zaoProducts")}
          >
            Zao Make Up
          </button>
          <button
            className="pl-5 hover:text-terracota text-lg whitespace-nowrap"
            onClick={() => handleCategoryChange("laboratoireProducts")}
          >
            Laboratoires de Biarritz
          </button>
          <button
            className="pl-5 hover:text-terracota text-lg whitespace-nowrap"
            onClick={() => handleCategoryChange("luxyProducts")}
          >
            Luxy Cils
          </button>
        </div>
        <div className="w-full h-screen sm:w-3/4 bg-beige bg-opacity-70 flex justify-center items-center">
          <div className="w-full h-4/5 flex flex-wrap gap-12 justify-center items-center overflow-y-scroll no-scrollbar">
            {selectedCategory &&
              productsData[selectedCategory] &&
              productsData[selectedCategory].map((item) => (
                <div
                  key={item.id}
                  className="h-60 w-40  hover:scale-110 transition-transform duration-300 "
                >
                  <ProductCard
                    name={item.name}
                    image={item.image}
                    price={item.price}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

//Afficher mes produits !
