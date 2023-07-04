"use client";
import { getAll } from "@/service/axiosTools";
import React, { useEffect, useState } from "react";
import { IColorations } from "@/types/IColorations";
import Image from "next/image";
import cils from "../../../public/assets/cil.jpg";
import time from "../../../public/assets/time.png";

function BrowAndLashColoringPricesPage() {
  const [servicesData, setServicesData] = useState<{
    colorationsPrices: Array<IColorations>;
  }>({
    colorationsPrices: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();

      setServicesData({
        colorationsPrices: data.colorationPrices,
      });
    };

    fetchData();
  }, []);

  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price); // Convertir en nombre
    const roundedPrice = numericPrice.toFixed(2); // Arrondir à deux décimales
    return roundedPrice; // Retourner la valeur arrondie
  };

  const eyesBrow = servicesData.colorationsPrices.find(
    (coloration) => coloration.id === "1d938131-7448-49f0-8e81-1a4089c039b3",
  );

  const eyesLash = servicesData.colorationsPrices.find(
    (coloration) => coloration.id === "4eccaa2e-fde6-4c24-a34a-69f7c8d7443e",
  );

  return (
    <div className="w-full flex flex-col bg-background">
      <h2 className="h-32 bg-terracota w-full flex justify-center items-center text-white text-2xl sm:text-4xl font-ibarra">
        Coloration des Cils & Sourcils
      </h2>

      <div className="flex flex-col  sm:flex-row w-full items-center px-9 py-20 gap-10 sm:gap-6">
        <div className="flex flex-col flex-1 border border-1 border-darkText rounded-lg">
          {eyesBrow && (
            <div className="flex flex-col w-full items-center gap-10 font-ibarra">
              <Image
                src={eyesBrow.image}
                width={150}
                height={300}
                alt={eyesBrow.name}
                className="w-full rounded-lg border border-1 border-darkText"
              />
              <h2 className="text-terracota text-3xl sm:text-xl w-full flex justify-center">
                {eyesBrow.name}
              </h2>
              <p className="text-2xl sm:text-lg text-center px-5">
                {eyesBrow.description}
              </p>
              <div className="flex w-full justify-between px-5 pb-5 text-2xl sm:text-lg">
                <p>{formatPrice(eyesBrow.price)}€</p>
                <div className="flex gap-1 items-center ">
                  <p>{eyesBrow.duration}&apos;</p>
                  <Image src={time} width={30} height={30} alt="time" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 font-imprima text-center text-2xl sm:text-lg text-terracota">
          <p className="px-4">
            La coloration des sourcils & des cils est la solution idéale pour
            avoir l&apos;air maquillé sans le moindre effort. Ce soin express
            apporte à vos yeux une définition plus intense sans maquillage, pour
            un résultat remarquable en seulement quelques minutes et pour près
            d&apos;un mois.
          </p>
        </div>
        <div className="flex flex-col flex-1 border border-1 border-darkText rounded-lg">
          {eyesLash && (
            <div className="flex flex-col w-full items-center gap-10 font-ibarra">
              <Image
                src={cils}
                width={150}
                height={300}
                alt={eyesLash.name}
                className="w-full rounded-lg border border-1 border-darkText"
              />
              <h2 className="text-terracota text-3xl sm:text-xl w-full flex justify-center">
                {eyesLash.name}
              </h2>
              <p className="text-2xl sm:text-lg text-center px-5">
                {eyesLash.description}
              </p>
              <div className="flex w-full justify-between px-5 pb-5 text-2xl sm:text-lg">
                <p>{formatPrice(eyesLash.price)}€</p>
                <div className="flex gap-1 items-center ">
                  <p>{eyesLash.duration}&apos;</p>
                  <Image src={time} width={30} height={30} alt="time" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowAndLashColoringPricesPage;
