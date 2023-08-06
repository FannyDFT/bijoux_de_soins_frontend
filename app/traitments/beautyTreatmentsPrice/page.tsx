"use client";

import BeautyTreatments from "@/components/soins/BeautyTreatments";
import { getAll } from "@/service/axiosTools";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ICare {
  id: string;
  name: string;
  description?: string;
  image?: string;
  type?: string;
}

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
    bodyPackageCategory: ICare[];
    faceCareCategory: ICare[];
    bodyCareCategory: ICare[];
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
    useState<CategoryType>("bodyCare");

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

      setServiceBodyCategory({
        bodyPackageCategory: data.bodyPackageCategory,
        faceCareCategory: data.faceCareCategory,
        bodyCareCategory: data.bodyCareCategory,
      });
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
        <h2 className="h-32 bg-terracota w-full flex justify-center items-center text-white text-2xl sm:text-3xl font-ibarra">
          Les Soins
        </h2>
        <div className="flex h-40 justify-center gap-8 sm:gap-20 w-full py-14 text-2xl font-ibarra">
          <button
            onClick={handleChangeFace}
            className="hover:text-terracota hover:scale-125 transition-transform duration-300"
          >
            Visages
          </button>
          <button
            onClick={handleChangeBody}
            className="hover:text-terracota hover:scale-125 transition-transform duration-300"
          >
            Corps
          </button>
          <button
            onClick={handleChangePackage}
            className="hover:text-terracota hover:scale-125 transition-transform duration-300"
          >
            Forfait
          </button>
        </div>
        <div className="flex flex-wrap gap-20 px-16 justify-center w-full pb-20">
          {serviceBody[selectedCategory]?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-60 h-full items-center gap-6 border border-1 border-darkText justify-between pb-2 bg-beige bg-opacity-60 hover:scale-125 transition-transform duration-300 rounded-b-lg"
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
