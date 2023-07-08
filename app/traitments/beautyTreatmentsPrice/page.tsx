"use client";

import BeautyTreatments from "@/components/soins/BeautyTreatments";
import { getAll } from "@/service/axiosTools";
import { IServicesWaxing } from "@/types/IServicesData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { parseClassName } from "react-toastify/dist/utils";

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
    bodyPackageCategory: Array<ICare>;
    faceCareCategory: Array<ICare>;
    bodyCareCategory: Array<ICare>;
  }>({
    bodyPackageCategory: [],
    faceCareCategory: [],
    bodyCareCategory: [],
  });

  type CategoryType = "faceCare" | "bodyCare" | "bodyPackage";

  const [serviceBody, setServiceBody] = useState<{
    faceCare: Array<IBodyService>;
    bodyCare: Array<IBodyService>;
    bodyPackage: Array<IBodyService>;
  }>({
    faceCare: [],
    bodyCare: [],
    bodyPackage: [],
  });

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
      setServiceBodyCategory(data);
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
        <div className="flex h-40 justify-center gap-20 w-full py-14 text-2xl font-ibarra">
          <div className="hover:scale-125 transition-transform duration-300 hover:text-terracota">
            {Array.from(serviceBodyCategory.bodyCareCategory).map((care) => (
              <button
                type="button"
                onClick={handleChangeBody}
                key={care.id}
                className={`${
                  selectedCategory === "bodyCare"
                    ? "text-terracota"
                    : "text-darkText"
                }`}
              >
                {care.name}
              </button>
            ))}
          </div>
          <div className="hover:scale-125 transition-transform duration-300 hover:text-terracota">
            {Array.from(serviceBodyCategory.faceCareCategory).map((care) => (
              <button
                type="button"
                onClick={handleChangeFace}
                key={care.id}
                className={`${
                  selectedCategory === "bodyCare"
                    ? "text-terracota"
                    : "text-darkText"
                }`}
              >
                {care.name}
              </button>
            ))}
          </div>
          <div className="hover:scale-125 transition-transform duration-300 hover:text-terracota">
            {Array.from(serviceBodyCategory.bodyPackageCategory).map((care) => (
              <button
                type="button"
                onClick={handleChangePackage}
                key={care.id}
                className={`${
                  selectedCategory === "bodyCare"
                    ? "text-terracota"
                    : "text-darkText"
                }`}
              >
                {care.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-44 justify-center w-full pb-48">
          {serviceBody[selectedCategory]?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-72 items-center gap-6 border border-1 border-darkText justify-between pb-2 bg-beige bg-opacity-60 hover:scale-125 transition-transform duration-300 rounded-b-lg"
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
