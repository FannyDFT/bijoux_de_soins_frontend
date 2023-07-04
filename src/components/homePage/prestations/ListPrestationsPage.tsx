"use client";

import React, { useEffect, useState } from "react";
import { ICategoryService } from "../../../types/ICategoryServcice";
import { getAll } from "../../../service/axiosTools";
import Link from "next/link";
import Image from "next/image";
import soins from "../../../../public/assets/soins.png";

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
    <div className="py-10 gap-10 sm:gap-0 bg-background flex flex-col sm:flex-row justify-center">
      {prestations.map((item) => (
        <div
          key={item.id}
          className="flex flex-col flex-1 bg-beige h-1/2 gap-6 rounded-t-lg border border-1 border-darkText mx-6 hover:scale-105 transition-transform duration-300"
        >
          {item.id === "7e457b03-8ba8-4760-a6e9-9edb1b898bc4" && (
            <Link href="/traitments/waxingPrice">
              <Image
                src={item.image}
                width={330}
                height={300}
                alt={item.name}
                className="rounded-t-lg w-full"
              />
              <div className="px-6 py-6 flex flex-col gap-6">
                <h2 className="font-MrsSaintDelafield text-4xl sm:text-3xl">
                  {item.name}
                </h2>
                <p className="font-imprima text-lg sm:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          )}

          {item.id === "efe2bca2-8877-4f60-91d3-0a40ab18514f" && (
            <Link href="/traitments/beautyTreatmentsPrice">
              <Image
                src={soins}
                width={330}
                height={200}
                alt={item.name}
                className="rounded-t-lg w-full"
              />
              <div className="px-6 py-6 flex flex-col gap-6">
                <h2 className="font-MrsSaintDelafield text-4xl sm:text-3xl">
                  {item.name}
                </h2>
                <p className="font-imprima text-lg sm:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          )}

          {item.id === "ac50566a-a6e6-41f2-98e4-50c849badcba" && (
            <Link href="/traitments/nailServicesPricesPage">
              <Image
                src={item.image}
                width={330}
                height={300}
                alt={item.name}
                className="rounded-t-lg w-full"
              />
              <div className="px-6 py-6 flex flex-col gap-6">
                <h2 className="font-MrsSaintDelafield text-4xl sm:text-3xl">
                  {item.name}
                </h2>
                <p className="font-imprima text-lg sm:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          )}

          {item.id === "f5aa067b-1c82-4d62-8da6-76a62c5eac8b" && (
            <Link href="/traitments/browAndLashColoringPricesPage">
              <Image
                src={item.image}
                width={330}
                height={300}
                alt={item.name}
                className="rounded-t-lg w-full"
              />
              <div className="px-6 py-6 flex flex-col gap-6">
                <h2 className="font-MrsSaintDelafield text-4xl sm:text-3xl">
                  {item.name}
                </h2>
                <p className="font-imprima text-lg sm:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListPrestationsPage;
