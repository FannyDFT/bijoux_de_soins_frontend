"use client";
import Descriptions from "../src//components/homePage/Descriptions";
import Appointment from "../src/components/homePage/appointments/Appointment";
import PrestationsDescription from "../src/components/homePage/prestations/PrestationsDescription";
import photoHome from "../public/assets/photoHome.png";
import Image from "next/image";
import CarouselPrestations from "@/components/homePage/carousel/CarouselPrestations";

function page() {
  return (
    <div className="flex flex-col h-auto w-full">
      <div className="relative w-full ">
        <Image
          src={photoHome}
          width={1000}
          height={500}
          alt="photo home"
          className="w-full"
        />
        <h1 className="font-MrsSaintDelafield font-semibold text-transparent text-2xl  sm:text-7xl bg-clip-text bg-gradient-to-r from-white to-terracota absolute bottom-8  sm:bottom-40 left-5 sm:left-20 p-4">
          Institut Bijoux de Soins
        </h1>
      </div>
      <Descriptions />
      <PrestationsDescription />
      <Appointment />
      <CarouselPrestations />
    </div>
  );
}

export default page;
