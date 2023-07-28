"use client";
import { AppProps } from "next/app";

import Descriptions from "@/components/homePage/Descriptions";
import Appointment from "@/components/homePage/appointments/Appointment";
import PrestationsDescription from "@/components/homePage/prestations/PrestationsDescription";
import photoHome from "../public/assets/photoHome.png";
import Image from "next/image";
import CarouselPrestations from "@/components/homePage/carousel/CarouselPrestations";

function page(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    // <MantineProvider>
    <div className="flex flex-col h-auto w-full">
      <div>
        <Image
          src={photoHome}
          width={1000}
          height={300}
          alt="photo home"
          className="w-full h-auto"
        />
        {/* <h2 className="font-MrsSaintDelafield text-white">Institut Bijoux de Soins</h2> */}
      </div>
      <Descriptions />
      <PrestationsDescription />
      <Appointment />
      <CarouselPrestations />
    </div>

    // </MantineProvider>
  );
}

export default page;
