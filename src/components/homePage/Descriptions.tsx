"use client";
import React, { useEffect, useState } from "react";

function Descriptions() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.getElementById("title");
      if (titleElement) {
        const rect = titleElement.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.8;

        setIsTitleVisible(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-auto flex justify-center py-14 bg-background opacity-80">
      <div className="w-2/3 flex flex-col gap-10 ">
        <div
          id="title"
          className={`flex items-center gap-4 ${
            isTitleVisible
              ? "transition-all duration-1000 transform translate-x-0"
              : "transform -translate-x-full"
          }`}
        >
          <hr className="w-10 border-1 border-darkText" />
          <h3 id="title" className="font-ibarra text-3xl">
            L&apos;institut
          </h3>
        </div>
        <div className="flex flex-col gap-10 font-imprima text-base">
          <div
            className={`flex flex-col items-center ${
              isTitleVisible
                ? "transition-all duration-1000 transform translate-x-0"
                : "transform translate-x-full"
            }`}
          >
            <p className="mr-40 sm:mr-72">
              Prendre soin de son <span className="textColor">corps</span>
            </p>
            <p>
              C&apos;est <span className="textColor">donner</span> envie à son
              âme d&apos;y rester
            </p>
          </div>

          <p>
            Bienvenue dans l&apos;univers de
            <span className="textColor"> Bijous de Soins</span>. Vous y
            retrouverez des prestations dédiés à la
            <span className="textColor"> beauté</span> et au
            <span className="textColor"> bien-être</span> pour une véritable
            parenthèse
            <span className="textColor"> détente</span>. Dans le but de réaliser
            des soins de beauté relaxants avec des résultats concrets, j&apos;ai
            choisi des
            <span className="textColor">
              marques françaises marques françaises respectueuses de
              l&apos;environnement
            </span>
            .
          </p>
          <p>
            Ces marques professionnelles proposent des produits de qualités
            d&apos;une réelle efficacité, composés d&apos;ingrédients
            d&apos;origine naturelle, conçus, développés et fabriqués
            exclusivement en France. Des produits cosmétiques Bio tel que le
            <span className="textColor"> maquillage</span>, les
            <span className="textColor"> soins pour le visage</span>,
            <span className="textColor"> le corps</span> et
            <span className="textColor"> l&apos;hygiène </span>
            sont disponibles à l&apos;institut pour prendre soin de soi même à
            la maison .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
