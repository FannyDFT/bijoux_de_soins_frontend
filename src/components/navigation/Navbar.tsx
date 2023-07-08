"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoBjx from "../../../public/assets/logoBjx.png";
import conection from "../../../public/assets/conection.png";
import { RiCloseLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import navigationLinks from "./navigationLinks";
import { useAuth } from "../../context/AuthContext";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const { user, isAuth, signout } = useAuth();

  const isAdmin = user?.email === "laura.d.du42@hotmail.fr";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    setShowDashboard(isAuth && isAdmin);
    return () => window.removeEventListener("resize", handleResize);
  }, [isAuth]);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const handleSignout = async () => {
    await signout();
  };

  return (
    <div className="bg-whiteText opacity-80">
      {/*Desktop Menu*/}
      {!isMobile ? (
        <div className="flex items-center justify-between border-b border-darkText  w-full py-3 ">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Image
              src={logoBjx}
              width={100}
              height={100}
              alt="logo bijoux de soins"
              className={
                activeLink === "/" ? "text-terracota " : "text-darkText"
              }
            />
          </Link>

          <div className="flex gap-10 mr-4 text-darkText font-ibarra text-2xl ">
            {showDashboard && (
              <Link
                href="/dashboard"
                onClick={() => handleLinkClick("/dashboard")}
                className="text-terracota"
              >
                Dashboard
              </Link>
            )}
            {navigationLinks.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="hover:text-terracota"
                onClick={() => handleLinkClick(item.path)}
              >
                {item.title}
              </Link>
            ))}
            {isAuth ? (
              <div className="flex gap-2">
                <p className="text-terracota">Bonjour {user?.firstname}</p>
                <button type="button" onClick={handleSignout}>
                  <RiLogoutCircleRLine />
                </button>
              </div>
            ) : (
              <Link
                href="/auth/signup"
                className={"hover:text-terracota"}
                onClick={() => handleLinkClick("/signin")}
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4">
          <div>
            <Link href="/signin" className="flex items-center gap-2 ">
              <Image src={conection} width={35} height={35} alt="50" />
              <p>Se Connecter</p>
            </Link>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="h-16 w-10 text-terracota"
          >
            {isOpenMenu ? (
              <RiCloseLine className="text-3xl" />
            ) : (
              <CiMenuBurger className="text-3xl" />
            )}
          </button>
        </div>
      )}
      {/*Mobile Menu*/}
      {isMobile && isOpenMenu && (
        <div className="flex flex-col gap-4 pl-16 font-ibarra text-xl absolute bg-white w-full h-52 ">
          <Link href="/" onClick={toggleMenu}>
            Accueil
          </Link>
          {navigationLinks.map((item) => (
            <Link key={item.id} href={item.path} onClick={toggleMenu}>
              {item.title}
            </Link>
          ))}
          {!isMobile && <Link href="/auth">Se Connecter</Link>}
        </div>
      )}
    </div>
  );
}

export default Navbar;
