"use client";
import React, { useEffect, useState } from "react";
import { getAll } from "../../service/axiosTools";
import { IServicesData } from "../../../src/types/IServicesData";

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
    <div className=" w-full  flex flex-col">
      <div className="h-48 bg-terracota flex justify-center">
        <h2 className="w-full flex text-white items-center font-ibarra">
          Les Epilations
        </h2>
      </div>

      <div className="w-full flex justify-center gap-20 font-ibarra">
        <p>Visage</p>
        <p>Corps</p>
        <p>Forfait</p>
      </div>

      <div className="flex flex-col w-full items-center my-24 gap-10">
        <h3 className="text-terracota font-imprima">
          Pose de masque pendant l&apos;épilation
        </h3>
        <div className="border border-1 border-darkText p-8">
          <p>Masque film naturel Hydra Repulpant 7.50€</p>
          <p>Masque naturel Purifiant Oxygénant 7.50€</p>
          <p>Pose masquee naturel Revitalisant Anti-Âge 7.50€</p>
          <p>Patchs Anti-Poches, Anti-Cernes 4.95€</p>
          <p>Patchs frais, lissant, délassant, Moment Détente 4.95€</p>
        </div>
      </div>
      <div className="border border-1 border-darkText p-8">
        {servicesData.faceServicesData.map((service) => (
          <p key={service.id}>
            {service.name} {service.duration} {service.price}€
          </p>
        ))}
        {servicesData.bodyServicesData.map((service) => (
          <p key={service.id}>
            {service.name} {service.duration} {service.price}€
          </p>
        ))}
        {servicesData.forfaitServicesData.map((service) => (
          <p key={service.id}>
            {service.name} {service.duration} {service.price}€
          </p>
        ))}
      </div>
    </div>
  );
}

export default WaxingPrice;
