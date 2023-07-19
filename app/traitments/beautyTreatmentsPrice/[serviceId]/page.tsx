"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import time from "../../../../public/assets/time.png";
import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
import { formatPrice } from "@/service/utils";

interface IServiceDetails {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

function ServiceDetails({
  params,
}: {
  params: { serviceId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const [serviceDetails, setServiceDetails] = useState<IServiceDetails>();

  useEffect(() => {
    const getServiceDetails = async () => {
      try {
        const response = await axios.get(`${URL}/service/${params.serviceId}`);
        setServiceDetails(response.data);
      } catch (error) {}
    };

    getServiceDetails();
  }, [params.serviceId]);

  if (!serviceDetails) {
    return <div>Loading...</div>;
  }

  const formatDescription = (description: string) => {
    return description.replace(/\./g, ".\n");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center bg-terracota text-white h-32 relative">
        <div className="">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="absolute left-5 top-12"
          >
            <BsArrowLeftCircle
              size={32}
              color="white"
              className="hover:scale-125 transition-transform duration-300"
            />
          </button>
        </div>

        <h2 className=" text-xl text-center w-1/2 sm:text-2xl font-ibarra flex items-center justify-center">
          {serviceDetails.name}
        </h2>
      </div>

      <div className="bg-background w-full flex justify-center py-20 font-ibarra">
        <div className="flex-col sm:flex gap-6 sm:flex-row bg-beige bg-opacity-60 border border-1 border-darkText rounded-lg p-10 w-2/3">
          <div className="flex-1 flex flex-col items-center gap-8">
            <Image
              src={serviceDetails.image}
              alt={serviceDetails.name}
              width={230}
              height={330}
              className="w-48 sm:w-72 h-56 sm:h-80 rounded-lg border border-darkText"
            />
            <h3 className="text-terracota text-xl sm:text-xl text-center font-imprima">
              {serviceDetails.name}
            </h3>
            <div className="flex w-full justify-between text-lg sm:text-xl px-0 sm:px-10 gap-6 font-imprima">
              <p>{formatPrice(serviceDetails.price)}€</p>
              <p className="flex gap-2">
                {serviceDetails.duration}&apos;
                <Image src={time} width={30} height={30} alt="time" />
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between items-center gap-8 mt-10 sm:m-0">
            <p className="text-lg sm:text-xl font font-imprima">
              {formatDescription(serviceDetails.description)}
            </p>
            <Link href="/appointments">
              <button
                type="button"
                className="border border-1 border-terracota rounded-tl-xl bg-white text-terracota px-3 sm:px-6 py-2 sm:py-4 text-lg sm:text-xl hover:bg-terracota hover:text-white font-imprima"
              >
                Prendre Rendez-Vous
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
