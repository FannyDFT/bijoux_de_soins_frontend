"use client";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { getAllCategoriesOfServices } from "../../../../app/service/axiosTools";
import { ICategoryService } from "../../../../app/types/ICategoryServcice";

function CarouselPrestations() {
  const [prestations, setPrestations] = useState<ICategoryService[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredPrestations = await getAllCategoriesOfServices();
        setPrestations(filteredPrestations);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="bg-beige w-full">
      <div className="flex items-center gap-2 m-10 font font-ibarra text-2xl text-darkText  ">
        <hr className="border border-darkText w-5" />
        <h2>Les Prestations</h2>
      </div>
      <div className="mb-10">
        <Carousel
          maw={300}
          mx="auto"
          withIndicators
          height={200}
          dragFree
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          slideGap="md"
          align="center"
          styles={{
            indicator: {
              backgroundColor: "black",
            },
          }}
        >
          {prestations.map((item) => (
            <Carousel.Slide key={item.id}>
              <Link href="/traitments">
                <h2 className="flex w-full justify-center font-MrsSaintDelafield text-3xl">
                  {item.name}
                </h2>
              </Link>
              <div>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={600}
                  className="border border-1 border-darkText"
                />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselPrestations;
