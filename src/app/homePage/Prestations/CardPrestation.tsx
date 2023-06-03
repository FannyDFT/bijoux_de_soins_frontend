import React from "react";

type CardPrestationProps = {
  name: string;
  description: string;
  personalizedText: string;
};

function CardPrestation({
  name,
  description,
  personalizedText,
}: CardPrestationProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-MrsSaintDelafield text-5xl">{personalizedText}</p>
      <h3 className="font-ibarra flex justify-center w-full ml-20 mb-8 text-2xl">
        {name}
      </h3>
      <hr className="w-36 border-1 border-whiteText" />
      <p className="text-center font-imprima mt-8 text-lg">{description}</p>
    </div>
  );
}

export default CardPrestation;
