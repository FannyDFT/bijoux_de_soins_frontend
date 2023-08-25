import React from "react";

function Banniere({ title }: { title: string }) {
  return (
    <>
      <h2 className="flex w-full items-center justify-center bg-terracota text-white h-20 sm:h-24 text-xl text-center sm:text-3xl font-ibarra">
        {title}
      </h2>
    </>
  );
}

export default Banniere;
