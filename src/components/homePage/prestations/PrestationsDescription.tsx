"use client";

import React, { useEffect, useState } from "react";

import { ICategoryService } from "../../../../app/types/ICategoryServcice";
import { getAllCategoriesOfServices } from "../../../../app/service/axiosTools";
import CardPrestationDescription from "./CardPrestationDescription";

function PrestationsDescription() {
  const [categories, setCategories] = useState<ICategoryService[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredCategories = await getAllCategoriesOfServices();
        setCategories(filteredCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const personalizedText = (name: string) => {
    switch (name) {
      case "Epilation":
        return "Légèreté";
      case "Soins":
        return "Détente";
      case "Beauté des mains & pieds":
        return "Bien-être";
      case "Colorations":
        return "Beauté";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col sm:flex-row w-full h-full  bg-terracota text-whiteText">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex-1 flex-col w-full h-full gap-4 px-8 py-10"
        >
          <CardPrestationDescription
            name={category.name}
            description={category.description}
            personalizedText={personalizedText(category.name)}
          />
        </div>
      ))}
    </div>
  );
}

export default PrestationsDescription;
