import React from "react";

function page() {
  return (
    <div className="w-full flex font-imprima h-screen">
      <div className="bg-beige w-1/4 border-r-2 border-darkText flex flex-col">
        <button className="w-full h-40 flex justify-center items-center text-2xl border-b-2 border-darkText hover:bg-white hover:text-terracota text-terracota">
          Gestion Produits
        </button>
        <button className="w-full h-40 flex justify-center items-center text-2xl border-b-2 border-darkText hover:bg-white hover:text-terracota text-terracota">
          Gestion Rendez-vous
        </button>
        <button className="w-full h-40 flex justify-center items-center text-2xl border-b-2 border-darkText hover:bg-white hover:text-terracota text-terracota">
          Gestion Prestations
        </button>
      </div>
      <div className="w-3/4"></div>
    </div>
  );
}

export default page;
