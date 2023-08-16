import React from "react";

interface ModalConfirmationProps {
  deleteProduct: () => void; // Type de la fonction de suppression
  setShowModalConfirmation: React.Dispatch<React.SetStateAction<boolean>>; // Type pour la fonction de mise à jour
}

function ModalConfirmation({
  deleteProduct,
  setShowModalConfirmation,
}: ModalConfirmationProps) {
  return (
    <div className="flex flex-col justify-center absolute top-52 left-1/3 w-2/5 bg-terracota text-white font-imprima text-2xl gap-12 h-2/6 py-6 px-8">
      <h1 className="flex justify-center text-center">
        Êtes-vous sûr de vouloir supprimer ce produit ?{" "}
      </h1>
      <div className="flex justify-center gap-10">
        <button onClick={deleteProduct} className="buttonHover zoom px-4">
          Oui
        </button>
        <button
          onClick={() => setShowModalConfirmation(false)}
          className="buttonHover zoom px-4"
        >
          Non
        </button>
      </div>
    </div>
  );
}

export default ModalConfirmation;
