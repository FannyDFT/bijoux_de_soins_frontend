"use client";
import { AppProps } from "next/app";
import Descriptions from "./components/homePage/Descriptions";
import Appointment from "./components/homePage/appointments/Appointment";
import CarouselPrestations from "./components/homePage/carousel/CarouselPrestations";
import PrestationsDescription from "./components/homePage/prestations/PrestationsDescription";
import { MantineProvider } from "@mantine/core";

function page(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider>
      <div className="flex flex-col h-auto">
        <div className="bg-banniere object-cover h-[410px] sm:h-[570px]">
          <h2 className="text-whiteText font-MrsSaintDelafield text-2xl absolute top-36 left-6 md:text-8xl md:absolute md:top-80 md:left-8">
            Institut Bijoux de Soins
          </h2>
        </div>
        <Descriptions />
        <PrestationsDescription />
        <Appointment />
        <CarouselPrestations />
      </div>
    </MantineProvider>
  );
}

export default page;
