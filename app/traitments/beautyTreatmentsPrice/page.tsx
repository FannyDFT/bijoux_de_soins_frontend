"use client";

import BeautyTreatments from "@/components/soins/BeautyTreatments";
import { getAll } from "@/service/axiosTools";
import { IServicesWaxing } from "@/types/IServicesData";
import React, { useEffect, useState } from "react";

interface ICare {
  id: string;
  name: string;
  description?: string;
  image?: string;
  type?: string;
}

interface IBodyService {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

function BeautyTreatmentsPrice() {
  const [serviceBodyCategory, setServiceBodyCategory] = useState<{
    bodyPackageCategory: Array<ICare>;
    faceCareCategory: Array<ICare>;
    bodyCareCategory: Array<ICare>;
  }>({
    bodyPackageCategory: [],
    faceCareCategory: [],
    bodyCareCategory: [],
  });
  console.log(serviceBodyCategory);

  const [serviceBody, setServiceBody] = useState<{
    faceCare: Array<IBodyService>;
    bodyCare: Array<IBodyService>;
    bodyPackage: Array<IBodyService>;
  }>({
    faceCare: [],
    bodyCare: [],
    bodyPackage: [],
  });

  console.log(serviceBody);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      setServiceBodyCategory(data);
      setServiceBody({
        faceCare: data.faceCare,
        bodyCare: data.bodyCare,
        bodyPackage: data.bodyPackage,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="w-full ">
      <div className="flex flex-col bg-[#EEE2DF]">
        <h2 className="h-32 bg-terracota w-full flex justify-center items-center text-white text-4xl font-ibarra">
          Les Soins
        </h2>
        <div className="flex justify-center gap-4 w-full py-14 text-xl font-ibarra">
          <div>
            {serviceBodyCategory.bodyCareCategory.map((care) => (
              <p key={care.id}>{care.name}</p>
            ))}
          </div>
          <div>
            {serviceBodyCategory.faceCareCategory.map((care) => (
              <p key={care.id}>{care.name}</p>
            ))}
          </div>
          <div>
            {serviceBodyCategory.bodyPackageCategory.map((care) => (
              <p key={care.id}>{care.name}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-52 justify-center w-full pb-48">
          {serviceBody.bodyCare.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-72 items-center gap-6 border border-1 border-darkText justify-between pb-7 bg-[#EEE2DF]"
            >
              <BeautyTreatments
                image={item.image}
                name={item.name}
                price={item.price}
                duration={item.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeautyTreatmentsPrice;
