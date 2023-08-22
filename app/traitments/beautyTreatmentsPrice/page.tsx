"use client";

import Banniere from "@/components/Banniere";
import BeautyTreatments from "@/components/soins/BeautyTreatments";
import { getAll } from "@/service/axiosTools";
import { ICategoryService } from "@/types/ICategoryServcice";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IBodyService {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

function BeautyTreatmentsPrice() {
  const [serviceBodyCategory, setServiceBodyCategory] = useState<{
    bodyPackageCategory: ICategoryService[];
    faceCareCategory: ICategoryService[];
    bodyCareCategory: ICategoryService[];
  }>({
    bodyPackageCategory: [],
    faceCareCategory: [],
    bodyCareCategory: [],
  });
  //Contient chaque type de soin (corps,)
  console.log("serviceBodyCategory:", serviceBodyCategory);

  type CategoryType = "faceCare" | "bodyCare" | "bodyPackage";

  const [serviceBody, setServiceBody] = useState<{
    faceCare: IBodyService[];
    bodyCare: IBodyService[];
    bodyPackage: IBodyService[];
  }>({
    faceCare: [],
    bodyCare: [],
    bodyPackage: [],
  });

  console.log("serviceBody:", serviceBody);

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("faceCare");

  const handleChangeBody = () => {
    setSelectedCategory("bodyCare");
  };

  const handleChangeFace = () => {
    setSelectedCategory("faceCare");
  };

  const handleChangePackage = () => {
    setSelectedCategory("bodyPackage");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      console.log(data);

      // setServiceBodyCategory({
      //   bodyPackageCategory: data.bodyPackageCategory,
      //   faceCareCategory: data.faceCareCategory,
      //   bodyCareCategory: data.bodyCareCategory,
      // });
      setServiceBody({
        faceCare: data.faceCare,
        bodyCare: data.bodyCare,
        bodyPackage: data.bodyPackage,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col bg-background">
        <Banniere title="Les Soins" />
        {/* <h2 className="h-32 bg-terracota w-full flex justify-center items-center text-white text-2xl sm:text-3xl font-ibarra">
          Les Soins
        </h2> */}
        <div className="flex h-40 justify-center gap-8 sm:gap-20 w-full py-14 text-2xl font-imprima">
          <button
            onClick={handleChangeFace}
            className={`hover:text-terracota hover:scale-125 transition-transform duration-300 ${
              selectedCategory === "faceCare" ? "activeButton" : ""
            }`}
          >
            Visages
          </button>
          <button
            onClick={handleChangeBody}
            className={`hover:text-terracota hover:scale-125 transition-transform duration-300 ${
              selectedCategory === "bodyCare" ? "activeButton" : ""
            }`}
          >
            Corps
          </button>
          <button
            onClick={handleChangePackage}
            className={`hover:text-terracota hover:scale-125 transition-transform duration-300 ${
              selectedCategory === "bodyPackage" ? "activeButton" : ""
            }`}
          >
            Forfait
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-10 sm:gap-x-14 px-10 sm:px-16 w-full h-full pb-20">
          {serviceBody[selectedCategory]?.map((item) => (
            <div
              key={item.id}
              className="w-48 sm:w-48 h-72 sm:h-80 items-center gap-6 border border-1 border-darkText justify-between pb-2 bg-beige bg-opacity-60 hover:scale-110 transition-transform duration-300 rounded-b-lg shadow-xl hover:bg-opacity-20"
            >
              <Link
                href={`traitments/beautyTreatmentsPrice/${item.id}`}
                className="w-full h-full flex flex-col justify-between"
              >
                <BeautyTreatments
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  duration={item.duration}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeautyTreatmentsPrice;
