import Link from "next/link";
import React from "react";
import Image from "next/image";
import institut from "../../../../public/assets/institut.jpg";

function Appointment() {
  return (
    <div className="h-96 flex flex-col-reverse  justify-between px-0 font-ibarra text-2xl text-darkText bg-background opacity-80 sm:flex sm:flex-row sm:px-48 ">
      <div className=" flex flex-col items-center sm:flex sm:items-start pb-6 sm:pt-14 text-lg sm:text-md">
        <p className="mb-8 font-ibarra">Pour une parenthèse de bien-être</p>
        <Link href="/appointments">
          <button
            type="button"
            className="border border-solid border-terracota border-1 text-terracota px-4 py-2 font-imprima"
          >
            Prendre Rendez-vous
          </button>
        </Link>
      </div>
      <div className="relative -top-6 flex justify-center">
        <Image
          src={institut}
          width={345}
          height={280}
          alt="photo institut"
          className="object-cover border border-darkText p-4 bg-white h-[200px] sm:h-[280px] w-[260px] sm:w-[345px]"
        />
      </div>
    </div>
  );
}

export default Appointment;
