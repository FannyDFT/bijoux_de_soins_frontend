"use client";
import { getAll } from "@/service/axiosTools";
import { IServicesManicure } from "@/types/IServicesManicure";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import time from "../../../public/assets/time.png";
import { formatPrice } from "@/service/utils";

interface IMainFeet {
  name: string;
  image: string;
}

function NailServicesPricesPage() {
  const [servicesData, setServicesData] = useState<{
    feetPricesData: Array<IServicesManicure>;
    nailsPricesData: Array<IServicesManicure>;
    beautyMain: IMainFeet;
    beautyFeet: IMainFeet;
  }>({
    feetPricesData: [],
    nailsPricesData: [],
    beautyMain: { name: "", image: "" },
    beautyFeet: { name: "", image: "" },
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();

      setServicesData({
        feetPricesData: data.feetPricesData,
        nailsPricesData: data.nailsPricesData,
        beautyMain: data.beautyMain,
        beautyFeet: data.beautyFeet,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="bg-background">
      <h2 className="h-32 bg-terracota w-full flex justify-center items-center text-white  text-2xl sm:text-3xl font-ibarra">
        Beauté des mains & des pieds
      </h2>
      <div className="w-full flex flex-col gap-20">
        <div className="flex flex-col items-center sm:flex-row sm:items-start w-full gap-6 sm:pl-9 mt-14">
          <div className="w-1/3 flex flex-col items-center gap-10">
            <h4 className="text-terracota font-imprima text-2xl sm:text-lg text-center sm:text-left border-b border-darkText pb-5">
              {servicesData.beautyMain.name}
            </h4>
            <Image
              className="rounded-lg border border-darkText"
              src={servicesData.beautyMain.image}
              width={400}
              height={350}
              alt={servicesData.beautyMain.name}
            />
          </div>
          <div className="w-5/6 sm:w-2/3 flex justify-center">
            <div className=" flex flex-col w-4/5 gap-4 ">
              {" "}
              {servicesData.nailsPricesData.map((price) => (
                <div
                  key={price.id}
                  className="w-full flex items-center border-b border-darkText pb-2 font-ibarra text-base"
                >
                  <p className="flex-1 text-terracota text-base text:base ">
                    {price.name}
                  </p>
                  <div className="flex flex-1 gap-2">
                    <p className="flex flex-1 justify-end text-lg text:base ">
                      {price.duration}&apos;
                    </p>
                    <Image
                      className=""
                      src={time}
                      width={30}
                      height={30}
                      alt="time"
                    />
                  </div>
                  <p className="flex flex-1 justify-end text-lg text:base">
                    {formatPrice(price.price)}€
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:items-start w-full gap-6 sm:pl-9 mt-14 pb-9">
          <div className="w-1/3 flex flex-col items-center gap-10">
            <h4 className="text-terracota font-imprima text-2xl sm:text-lg border-b border-darkText pb-5 text-center sm:text-left">
              {servicesData.beautyFeet.name}
            </h4>
            <Image
              className="rounded-lg border border-darkText"
              src={servicesData.beautyFeet.image}
              width={400}
              height={350}
              alt={servicesData.beautyFeet.name}
            />
          </div>
          <div className="w-5/6 sm:w-2/3 flex justify-center">
            <div className=" flex flex-col w-4/5 gap-4 ">
              {" "}
              {servicesData.feetPricesData.map((price) => (
                <div
                  key={price.id}
                  className="w-full flex items-center border-b border-darkText pb-2 font-ibarra text-base"
                >
                  <p className="flex-1 text-terracota">{price.name}</p>
                  <div className="flex flex-1 gap-2">
                    <p className="flex flex-1 justify-end text-lg text:base ">
                      {price.duration}&apos;
                    </p>
                    <Image
                      className=""
                      src={time}
                      width={30}
                      height={30}
                      alt="time"
                    />
                  </div>
                  <p className="flex flex-1 justify-end text-lg text:base">
                    {formatPrice(price.price)}€
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NailServicesPricesPage;
