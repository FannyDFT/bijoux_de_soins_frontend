"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICategoryService } from "../types/ICategoryServcice";
import CardPrestation from "./CardPrestation";

function Prestations() {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const [categories, setCategories] = useState<ICategoryService[]>([]);
  console.log(categories);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const res = await axios.get(`${URL}/category`);
        if (!res) {
          throw new Error("Nous n'avons pas pu récupérer les données");
        }
        const filteredCategories = res.data.filter(
          (category: ICategoryService) =>
            category.parentId === null && category.type === "SERVICE",
        );
        setCategories(filteredCategories);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, []);

  const getPersonalizedText = (name: string) => {
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
    <div className="flex flex-col md:flex-row w-full h-full  bg-terracota text-whiteText">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex-1 flex-col w-full h-full gap-4 px-8 py-10"
        >
          <CardPrestation
            name={category.name}
            description={category.description}
            personalizedText={getPersonalizedText(category.name)}
          />
        </div>
      ))}
    </div>
  );
}

export default Prestations;
