"use client";
import React, { useEffect, useState } from "react";
import { getAll } from "../../../src/service/axiosTools";
import { IServicesData } from "../../../src/types/IServicesData";
import Image from "next/image";
import time from "../../../public/assets/time.png";
import Link from "next/link";

function WaxingPrice() {
  const [servicesData, setServicesData] = useState<{
    faceServicesData: Array<IServicesData>;
    bodyServicesData: Array<IServicesData>;
    forfaitServicesData: Array<IServicesData>;
  }>({
    faceServicesData: [],
    bodyServicesData: [],
    forfaitServicesData: [],
  });

  console.log(servicesData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      setServicesData(data);
    };

    fetchData();
  }, []);

  return (
    <div className=" w-full  flex flex-col bg-beige gap-10 h-auto">
      <div className="w-full h-1/4 bg-terracota">
        <h2 className="w-full flex justify-center text-white text-4xl font-ibarra">
          Les Epilations
        </h2>
      </div>

      <div className="w-full flex justify-center gap-20 font-ibarra text-xl">
        <a href="#visage">Visage</a>
        <a href="#corps">Corps</a>
        <a href="#forfait">Forfait</a>
      </div>

      <div className="flex flex-col w-full items-center gap-10">
        <h3 className="text-terracota font-imprima text-xl">
          Pose de masque pendant l&apos;épilation
        </h3>
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 bg-whiteText py-6 items-center w-1/2 border border-1 border-darkText">
            <p className="">Masque film naturel Hydra Repulpant 7.50€</p>
            <p>Masque naturel Purifiant Oxygénant 7.50€</p>
            <p>Pose masquee naturel Revitalisant Anti-Âge 7.50€</p>
            <p>Patchs Anti-Poches, Anti-Cernes 4.95€</p>
            <p>Patchs frais, lissant, délassant, Moment Détente 4.95€</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col gap-10 w-full ">
          <div className="flex justify-center">
            <h4 id="visage">Epilations Visage</h4>
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            {servicesData.faceServicesData.map((service) => (
              <div
                key={service.id}
                className="flex justify-between flex-1 border-b-2 border-black"
              >
                <p className="flex-1">{service.name}</p>
                <div className="flex flex-1">
                  <p>
                    {service.duration}
                    {"'"}
                  </p>
                  <Image src={time} width={30} height={30} alt="time" />
                </div>

                <p className="flex-1">{service.price}€</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="flex justify-center">
            <h4 id="corps">Epicaltions Corps</h4>
          </div>
          <div className="flex flex-col gap-2">
            {servicesData.bodyServicesData.map((service) => (
              <div
                key={service.id}
                className="flex justify-between flex-1 border-b-2 border-black"
              >
                <p className="flex-1">{service.name}</p>
                <div className="flex flex-1">
                  <p>
                    {service.duration}
                    {"'"}
                  </p>
                  <Image src={time} width={30} height={30} alt="time" />
                </div>

                <p className="flex-1">{service.price}€</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="flex justify-center">
            <h4 id="forfait">Forfaits Epilations</h4>
          </div>
          <div className="flex flex-col gap-2">
            {servicesData.forfaitServicesData.map((service) => (
              <div
                key={service.id}
                className="flex justify-between flex-1 border-b-2 border-black"
              >
                <p className="flex-1">{service.name}</p>
                <div className="flex flex-1">
                  <p>
                    {service.duration}
                    {"'"}
                  </p>
                  <Image src={time} width={30} height={30} alt="time" />
                </div>

                <p className="flex-1">{service.price}€</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaxingPrice;
