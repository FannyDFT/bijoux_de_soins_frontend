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
      <div>
        <Image
          src={photoHome}
          width={1000}
          height={300}
          alt="photo home"
          className="w-full h-56 sm:h-auto"
        />
        {/* <h2 className="font-MrsSaintDelafield text-white">Institut Bijoux de Soins</h2> */}
      </div>
      <Descriptions />
      <PrestationsDescription />
      <Appointment />
      <CarouselPrestations />
    </div>
  );
}

export default page;
