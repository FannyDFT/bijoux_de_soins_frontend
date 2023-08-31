"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { getAll } from "../../../service/axiosTools";
import CardProductPage from "./CardProductPage";
import Carousel from "react-multi-carousel";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

function ListProductsPage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [productsCategories, setProductsCategories] = useState<Product[]>([]);

  console.log(productsCategories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        const filteredBrands = data.products;
        setProductsCategories(filteredBrands);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center gap-2 pl-10 pt-10 font font-ibarra text-2xl text-darkText bg-beige bg-opacity-40">
        <hr className="border border-darkText w-5" />
        <Link
          href="/products"
          className="hover:text-terracota hover:cursor-pointer"
        >
          <h2>Les Marques Produits</h2>
        </Link>
      </div>
      <div className="w-full h-auto bg-beige bg-opacity-40 pb-14 flex justify-center items-center">
        <Carousel
          responsive={responsive}
          infinite
          // autoPlay
          swipeable
          autoPlaySpeed={3000}
          renderDotsOutside
          removeArrowOnDeviceType={["mobile"]}
          className="w-4/5 h-auto sm:h-60 flex justify-center"
        >
          {productsCategories &&
            productsCategories.map((result) => (
              <div
                key={result.id}
                className="flex justify-center h-full w-full px-16"
              >
                <CardProductPage
                  name={result.name}
                  description={result.description}
                  image={result.image}
                />
              </div>
            ))}
        </Carousel>
      </div>
    </>
  );
}

export default ListProductsPage;
