"use client";

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { getAll } from "../../../../app/service/axiosTools";
import CardProductPage from "./CardProductPage";
import { Carousel } from "@mantine/carousel";

function ListProductsPage() {
  const [productsCategories, setProductsCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        const filteredPrestations = data.products;
        setProductsCategories(filteredPrestations);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-96 bg-beige mt-14 flex justify-center items-center">
      <Carousel
        className="flex justify-center w-1/2"
        withIndicators
        styles={{
          indicator: {
            backgroundColor: "black",
          },
        }}
      >
        {productsCategories.map((result) => (
          <Carousel.Slide key={result.id}>
            <CardProductPage
              name={result.name}
              description={result.description}
              image={result.image}
              id={result.id}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default ListProductsPage;
