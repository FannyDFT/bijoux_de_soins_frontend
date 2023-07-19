"use client";
import { getAll } from "@/service/axiosTools";
import { IProductsData } from "@/types/IProductsData";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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
        <h2 className="h-32 bg-terracota w-full flex justify-center items-center text-white text-2xl sm:text-3xl font-ibarra">
          Les Produits
        </h2>
      </div>
      <div className="flex flex-col sm:flex sm:flex-row">
        <div className="bg-beige bg-opacity-40 overflow-x-scroll sm:overflow-hidden w-full sm:w-1/4 gap-10 sm:gap-8 pb-10 p-6 sm:p-0 border-r-2 border-darkText flex flex-row sm:flex sm:flex-col sm:justify-start items:center sm:items-start font-imprima">
          <button
            className="buttonProducts"
            onClick={() => handleCategoryChange("pulpeProducts")}
          >
            Pulpe de vie
          </button>
          <button
            className="buttonProducts"
            onClick={() => handleCategoryChange("referenceProducts")}
          >
            Référence Cosmétique
          </button>
          <button
            className="buttonProducts"
            onClick={() => handleCategoryChange("zaoProducts")}
          >
            Zao Make Up
          </button>
          <button
            className="buttonProducts"
            onClick={() => handleCategoryChange("laboratoireProducts")}
          >
            Laboratoires de Biarritz
          </button>
          <button
            className="buttonProducts"
            onClick={() => handleCategoryChange("luxyProducts")}
          >
            Luxy Cils
          </button>
        </div>
        <div className="h-screen w-full sm:w-3/4 bg-beige bg-opacity-70 pb-10 ">
          <div className=" h-full w-full overflow-y-scroll">
            <div className="grid grid-cols-1 sm:grid sm:grid-cols-4 gap-16 px-32 py-16 sm:p-10 w-full h-full ">
              {selectedCategory &&
                productsData[selectedCategory] &&
                productsData[selectedCategory].map((item) => (
                  <div
                    key={item.id}
                    className="col-span-1 h-72 border bg-opacity-50 border-darkText rounded-t-lg hover:scale-110 transition-transform duration-300"
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
    </div>
  );
}

export default ProductPage;

//Afficher mes produits !
