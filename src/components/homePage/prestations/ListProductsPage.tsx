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
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [productsCategories, setProductsCategories] = useState<Product[]>([]);

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
    <>
      <div className="flex items-center gap-2 pl-10 pt-10 font font-ibarra text-2xl text-darkText bg-beige">
        <hr className="border border-darkText w-5" />
        <Link
          href="/products"
          className="hover:text-terracota hover:cursor-pointer"
        >
          <h2>Les Produits</h2>
        </Link>
      </div>
      <div className="w-full h-auto bg-beige py-14 flex justify-center items-center">
        <Carousel
          responsive={responsive}
          infinite
          //   autoPlay
          autoPlaySpeed={3000}
          renderDotsOutside
          removeArrowOnDeviceType={["mobile"]}
          className="w-2/3 flex justify-center"
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
