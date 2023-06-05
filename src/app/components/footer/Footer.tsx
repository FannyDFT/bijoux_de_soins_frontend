"use client";

import React, { useEffect, useState } from "react";
import insta from "../../../../public/assets/insta.png";
import facebook from "../../../../public/assets/fb.png";
import arrow from "../../../../public/assets/arrowLogo.png";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const [imdobile, setImdobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setImdobile(window.innerWidth <= 750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-auto bg-terracota flex flex-col gap-3 justify-between items-center text-whiteText text-md font-imprima p-4 md:flex-row md:h-48 md:justify-between md:text-xl ">
      <div className="flex flex-col gap-1 text-center">
        <p>14 rue Colombet Solle</p>
        <p>42 270 Saint-Just-Saint-Rambert</p>
        <p> Contactez-moi</p>
        <p>07 78 69 33 86</p>
      </div>
      <div className="flex flex-col text-center gap-4">
        <div className="font-ibarra text-lg ">INFORMATIONS</div>
        <div className="flex flex-col gap-1">
          <p>Mardi: 9h30 - 19h00</p>
          <p>Mercredi: 9h00 - 13h00</p>
          <p>Jeudi: 10h30 - 20h00</p>
          <p>Vendredi -Samedi: 9h30 - 17h00</p>
        </div>
      </div>
      <div className=" flex flex-col h-full items-end justify-end  w-full md:w-auto md:gap-2">
        <div className="flex flex-col items-center w-full">
          <p className="font-MrsSaintDelafield text-4xl  ">Suivez moi:</p>
          <div className="flex gap-4 ">
            <Link href="https://www.instagram.com/bijou.xdesoins/">
              <Image src={insta} width={30} height={30} alt="logo instagram" />
            </Link>
            <Link href="https://www.facebook.com/bijoux.desoins">
              <Image
                src={facebook}
                width={30}
                height={30}
                alt="logo facebook"
              />
            </Link>
          </div>
        </div>
        <div className="flex w-full md:w-auto">
          <p className="w-full md:w-auto">copyright</p>
          {imdobile && (
            <button type="button" onClick={scrollToTop}>
              <Image src={arrow} width={30} height={30} alt="arrow logo" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
