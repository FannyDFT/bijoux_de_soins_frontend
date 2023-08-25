"use client";

import React, { useEffect, useState } from "react";
import { ICategoryService } from "../../../types/ICategoryServcice";
import { getAll } from "../../../service/axiosTools";
import Link from "next/link";
import Image from "next/image";
import soins from "../../../../public/assets/soins.png";
import Banniere from "@/components/Banniere";

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
    <div>
      <Banniere title="Les Soins" />
      <div className="w-full h-full py-14 px-14 p-0 sm:px-28 bg-background flex flex-wrap sm:flex-nowrap sm:flex-row gap-10 sm:gap-20 justify-center">
        {prestations.map((item) => (
          <div
            key={item.id}
            className="flex flex-1 bg-beige h-60 w-48 sm:h-auto sm:w-full gap-6 rounded-t-lg border border-1 border-darkText hover:scale-105 transition-transform duration-300"
          >
            {item.id === "7e457b03-8ba8-4760-a6e9-9edb1b898bc4" && (
              <Link
                href="/traitments/waxingPrice"
                className="h-full w-full shadow-xl"
              >
                <Image
                  src={item.image}
                  width={330}
                  height={300}
                  alt={item.name}
                  className="rounded-t-lg w-full h-2/5 sm:h-2/5"
                />
                <div className="p-3 sm:p-6 flex flex-col gap-3 sm:gap-6 h-3/5 sm:h-56 w-full">
                  <h2 className="font-MrsSaintDelafield text-2xl sm:text-3xl w-full">
                    {item.name}
                  </h2>
                  <p className="font-imprima text-md sm:text-base overflow-y-scroll no-scrollbar">
                    {item.description}
                  </p>
                </div>
              </Link>
            )}

            {item.id === "efe2bca2-8877-4f60-91d3-0a40ab18514f" && (
              <Link
                href="/traitments/beautyTreatmentsPrice"
                className="h-full shadow-xl"
              >
                <Image
                  src={soins}
                  width={330}
                  height={160}
                  alt={item.name}
                  className="rounded-t-lg w-full h-2/5 sm:h-2/5 "
                />
                <div className="p-3 sm:p-6 flex flex-col gap-3 sm:gap-6 h-3/5 sm:h-56">
                  <h2 className="font-MrsSaintDelafield text-2xl sm:text-3xl">
                    {item.name}
                  </h2>
                  <p className="font-imprima text-md sm:text-base overflow-y-scroll no-scrollbar">
                    {item.description}
                  </p>
                </div>
              </Link>
            )}

            {item.id === "ac50566a-a6e6-41f2-98e4-50c849badcba" && (
              <Link
                href="/traitments/nailServicesPricesPage"
                className="h-full shadow-xl"
              >
                <Image
                  src={item.image}
                  width={330}
                  height={300}
                  alt={item.name}
                  className="rounded-t-lg w-full h-2/5 sm:h-2/5"
                />
                <div className="p-3 sm:p-6 flex flex-col gap-3 sm:gap-6 h-3/5 sm:h-3/5">
                  <h2 className="font-MrsSaintDelafield text-2xl sm:text-3xl">
                    {item.name}
                  </h2>
                  <p className="font-imprima text-md sm:text-base overflow-y-scroll no-scrollbar">
                    {item.description}
                  </p>
                </div>
              </Link>
            )}

            {item.id === "f5aa067b-1c82-4d62-8da6-76a62c5eac8b" && (
              <Link
                href="/traitments/browAndLashColoringPricesPage"
                className="h-full shadow-xl"
              >
                <Image
                  src={item.image}
                  width={330}
                  height={300}
                  alt={item.name}
                  className="rounded-t-lg w-full h-2/5 sm:h-2/5"
                />
                <div className="p-3 sm:p-6 flex flex-col gap-3 sm:gap-6 h-3/5 sm:h-56">
                  <h2 className="font-MrsSaintDelafield text-2xl sm:text-3xl">
                    {item.name}
                  </h2>
                  <p className="font-imprima text-md sm:text-base overflow-y-scroll no-scrollbar">
                    {item.description}
                  </p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListPrestationsPage;
