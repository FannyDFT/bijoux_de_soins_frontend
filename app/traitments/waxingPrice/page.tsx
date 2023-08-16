"use client";
import React, { useEffect, useState } from "react";
import { getAll } from "../../../src/service/axiosTools";
import { IServicesWaxing } from "../../../src/types/IServicesData";
import Image from "next/image";
import time from "../../../public/assets/time.png";
import { formatPrice } from "@/service/utils";

function WaxingPrice() {
  const [servicesData, setServicesData] = useState<{
    faceServicesData: Array<IServicesWaxing>;
    bodyServicesData: Array<IServicesWaxing>;
    forfaitServicesData: Array<IServicesWaxing>;
  }>({
    faceServicesData: [],
    bodyServicesData: [],
    forfaitServicesData: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      setServicesData(data);
    };

    fetchData();
  }, []);

  return (
    <div className=" w-full flex flex-col bg-background gap-10 h-auto">
      <h2 className="h-32 bg-terracota w-full flex justify-center items-center text-white text-2xl sm:text-4xl font-ibarra">
        Les Epilations
      </h2>

      <div className="w-full flex justify-center gap-6 sm:gap-20 font-ibarra text-xl ">
        <a
          href="#visage"
          className="hover:scale-125 transition-transform duration-300 hover:text-terracota"
        >
          Visage
        </a>
        <a
          href="#corps"
          className="hover:scale-125 transition-transform duration-300 hover:text-terracota"
        >
          Corps
        </a>
        <a
          href="#forfait"
          className="hover:scale-125 transition-transform duration-300 hover:text-terracota"
        >
          Forfait
        </a>
      </div>

      <div className="flex flex-col w-full items-center gap-10 font-ibarra text-lg">
        <h3 className="text-terracota font-imprima text-lg sm:text-xl text-center">
          Pose de masque pendant l&apos;épilation
        </h3>
        <div className="w-full flex justify-center text-sm sm:text-base">
          <div className="flex flex-col gap-4 bg-whiteText py-6 items-center text-center sm:text-left w-3/4 sm:w-1/2 border border-1 border-darkText px-4 sm:px-0">
            <p className="">Masque film naturel Hydra Repulpant 7.50€</p>
            <p>Masque naturel Purifiant Oxygénant 7.50€</p>
            <p>Pose masquee naturel Revitalisant Anti-Âge 7.50€</p>
            <p>Patchs Anti-Poches, Anti-Cernes 4.95€</p>
            <p>Patchs frais, lissant, délassant, Moment Détente 4.95€</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-16 font-ibarra text-lg mb-14">
        <div className="flex flex-col items-center gap-10 w-full">
          <h4
            id="visage"
            className="flex justify-center text-terracota font-imprima text-xl sm:text-2xl border-b border-darkText pb-2"
          >
            Epilations Visage
          </h4>

          <div className="flex flex-col w-2/3 h-full text-sm sm:text-base">
            {servicesData.faceServicesData.map((service) => (
              <div
                key={service.id}
                className="flex flex-1 items-center border-b border-darkText p-2"
              >
                <p className="flex-1 text-terracota text-lg">{service.name}</p>

                <div className="flex flex-1 gap-4 justify-center">
                  <p>{service.duration}&apos;</p>
                  <Image src={time} width={30} height={30} alt="time" />
                </div>

                <p className="flex flex-1 justify-end">
                  {formatPrice(service.price)}€
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <h4
            id="corps"
            className="flex justify-center  text-terracota font-imprima text-xl sm:text-2xl border-b border-darkText pb-2"
          >
            Epilations Corps
          </h4>

          <div className="flex flex-col w-2/3 h-full text-sm sm:text-base">
            {servicesData.bodyServicesData.map((service) => (
              <div
                key={service.id}
                className="flex flex-1 items-center border-b border-darkText p-2"
              >
                <p className="flex-1 text-terracota text-lg">{service.name}</p>

                <div className="flex flex-1 gap-4 justify-center">
                  <p>{service.duration}&apos;</p>
                  <Image src={time} width={30} height={30} alt="time" />
                </div>

                <p className="flex flex-1 justify-end">
                  {formatPrice(service.price)}€
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <h4
            id="forfait"
            className="flex justify-center text-terracota font-imprima text-xl sm:text-2xl border-b border-darkText pb-2"
          >
            Forfaits Epilations
          </h4>

          <div className="flex flex-col w-2/3 h-full v">
            {servicesData.forfaitServicesData.map((service) => (
              <div
                key={service.id}
                className="flex flex-1 items-center border-b border-darkText p-2"
              >
                <p className="flex-1 text-terracota text-lg">{service.name}</p>

                <div className="flex flex-1 gap-4 justify-center">
                  <p>{service.duration}&apos;</p>
                  <Image src={time} width={30} height={30} alt="time" />
                </div>

                <p className="flex flex-1 justify-end">
                  {formatPrice(service.price)}€
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaxingPrice;
