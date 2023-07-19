import ProductsList from "../../src/components/productsDashboard/ProductsList";
import React from "react";

function page() {
  return (
    <div className="w-full flex font-imprima h-full">
      <div className="bg-beige w-1/4 border-r border-darkText flex flex-col">
        <button className="w-full h-40 flex justify-center items-center text-xl border-b border-darkText hover:bg-white hover:text-terracota text-dark">
          Gestion Produits
        </button>
        <button className="w-full h-40 flex justify-center items-center text-xl border-b border-darkText hover:bg-white hover:text-terracota text-dark">
          Gestion Rendez-vous
        </button>
        <button className="w-full h-40 flex justify-center items-center text-xl border-b border-darkText hover:bg-white hover:text-terracota text-dark">
          Gestion Prestations
        </button>
      </div>
      <div className="w-full h-full flex flex-col gap-10 py-8 justify-center ">
        <ProductsList />
      </div>
    </div>
  );
}

export default page;
