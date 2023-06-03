import Link from "next/link";
import React from "react";
import Image from "next/image";

function Appointment() {
  return (
    <div className="h-96 flex justify-between px-48 font-ibarra text-2xl text-darkText bg-background">
      <div className="pt-14">
        <p className="mb-8">Pour une parenthèse de bien-être</p>
        <Link href="/appointments">
          <button
            type="button"
            className="border border-solid border-terracota border-1 text-terracota px-4 py-2"
          >
            Prendre Rendez-vous
          </button>
        </Link>
      </div>
      <div>
        <p>Image</p>
        {/* <Image src={} width={} height={} alt="photo institut" /> */}
      </div>
    </div>
  );
}

export default Appointment;
