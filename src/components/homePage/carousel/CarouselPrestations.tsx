import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAll } from "../../../service/axiosTools";
import { ICategoryService } from "../../../types/ICategoryServcice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselPrestations() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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
  const [prestations, setPrestations] = useState<ICategoryService[]>([]);

  console.log("prestations:", prestations);

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
    <div className="bg-beige w-full">
      <div className="flex items-center gap-2 m-10 font font-ibarra text-2xl text-darkText ">
        <hr className="border border-darkText w-5 hover:zoom hover:text-terracota" />
        <Link href="/traitments">
          <h2 className="font-imprima hover:zoom hover:text-terracota animate-bounce">
            Les Prestations
          </h2>
        </Link>
      </div>
      <div className="mb-10 ">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          transitionDuration={300}
          renderDotsOutside
          removeArrowOnDeviceType={["mobile"]}
          className="w-full px-28 "
        >
          {prestations &&
            prestations.map((item) => (
              <div key={item.id}>
                <h2 className="flex w-full py-4 justify-center font-MrsSaintDelafield text-4xl text-darkText pt-4 ">
                  {item.name}
                </h2>

                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={600}
                    className="border border-1 border-darkText h-64 hover:opacity-80"
                  />
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselPrestations;
