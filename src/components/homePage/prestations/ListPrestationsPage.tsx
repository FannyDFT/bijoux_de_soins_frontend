"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICategoryService } from "../../../types/ICategoryServcice";

import CardPrestationPage from "./CardPrestationPage";

function ListPrestationsPage() {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const [prestations, setPrestations] = useState<ICategoryService[]>([]);
  console.log(prestations);

  const getAllPrestations = async () => {
    try {
      const res = await axios.get(`${URL}/category`);

      if (!res) {
        throw new Error("Nous n'avons pas pu récupérer les données ");
      }
      const filteredPrestations = res.data.filter(
        (prestation: ICategoryService) =>
          prestation.parentId === null && prestation.type === "SERVICE",
      );
      setPrestations(filteredPrestations);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPrestations();
  }, []);
  return (
    <div className="text-darkText flex gap-4 my-12 mx-5 w-full justify-around ">
      {prestations.map((item) => (
        <CardPrestationPage
          key={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ListPrestationsPage;
