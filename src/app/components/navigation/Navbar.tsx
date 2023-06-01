"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoBjx from "../../../../public/assets/logoBjx.png";
import conection from "../../../../public/assets/conection.png";
import { RiCloseLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import navigationLinks from "./navigationLinks";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="bg-whiteText opacity-80">
      {/*Desktop Menu*/}
      {!isMobile ? (
        <div className="flex items-center justify-between border-b border-darkText  w-full py-5">
          <Link href="/">
            <Image
              src={logoBjx}
              width={130}
              height={130}
              alt="logo bijoux de soins"
            />
          </Link>

          <div className="flex gap-10 mr-4 text-darkText font-ibarra text-2xl">
            {navigationLinks.map((item) => (
              <Link key={item.id} href={item.path}>
                {item.title}
              </Link>
            ))}
            <Link href="/signin">Connexion</Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4">
          <div>
            <Link href="/signin" className="flex items-center gap-2">
              <Image src={conection} width={42} height={42} alt="50" />
              <p>Se Connecter</p>
            </Link>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="h-16 w-10 text-terracota"
          >
            {isOpenMenu ? <RiCloseLine /> : <CiMenuBurger />}
          </button>
        </div>
      )}
      {/*Mobile Menu*/}
      {isMobile && isOpenMenu && (
        <div className="flex flex-col gap-4 pl-16 font-ibarra text-xl absolute bg-white w-full h-52 ">
          <Link href="/">Accueil</Link>
          {navigationLinks.map((item) => (
            <Link key={item.id} href={item.path}>
              {item.title}
            </Link>
          ))}
          {!isMobile && <Link href="/signin">Se Connecter</Link>}
        </div>
      )}
    </div>
  );
}

export default Navbar;

// changer les icones du burger menus + transition
// mise en pages menu mobile - list style type - couleur qui change en fonction du lien cliqué
