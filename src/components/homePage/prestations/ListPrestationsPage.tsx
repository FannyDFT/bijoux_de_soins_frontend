"use client";

import React, { useEffect, useState } from "react";
import { ICategoryService } from "../../../../app/types/ICategoryServcice";
import CardPrestationPage from "./CardPrestationPage";
import { getAll } from "../../../../app/service/axiosTools";
import ListProductsPage from "./ListProductsPage";

function ListPrestationsPage() {
  const [prestations, setPrestations] = useState<ICategoryService[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        const filteredPrestations = data.services;
        setPrestations(filteredPrestations);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center mt-20 mpx-20 ">
        {prestations.map((item) => (
          <CardPrestationPage
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      <ListProductsPage />
    </>
  );
}

export default ListPrestationsPage;
