import React from "react";

type CardPrestationProps = {
  name: string;
  description: string;
  personalizedText: string;
};

function CardPrestationDescription({
  name,
  description,
  personalizedText,
}: CardPrestationProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-MrsSaintDelafield text-5xl text-transparent pt-4 bg-clip-text bg-gradient-to-r from-white to-beige">
        {personalizedText}
      </p>
      <h3 className="font-ibarra font-semibold flex justify-center w-full mb-8 text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-beige">
        {name}
      </h3>
      <hr className="w-36 border-1 border-whiteText" />
      <p className="text-center font-imprima mt-8 text-base">{description}</p>
    </div>
  );
}

export default CardPrestationDescription;
