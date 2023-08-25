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
      <div className=" w-full ">
        <Image
          src={photoHome}
          width={1000}
          height={600}
          alt="photo home"
          className="w-full h-52"
        />
        {/* <h1 className=" absolute top-48 sm:top-96 left-4 sm:left-10 font-MrsSaintDelafield font-semibold text-transparent text-2xl  sm:text-7xl bg-clip-text bg-gradient-to-r from-white to-terracota  p-4">
          Institut Bijoux de Soins
        </h1> */}
      </div>
      <Descriptions />
      <PrestationsDescription />
      <Appointment />
      <CarouselPrestations />
    </div>
  );
}

export default page;
