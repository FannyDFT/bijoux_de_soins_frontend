"use client";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
  fetchData: () => Promise<void>;
  // Autres props si nécessaire...
}

function Modal({ setShowModal, fetchData }: ModalProps) {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [file, setFile] = useState<File | null>();

  //State pour stocker les saisies du form
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    categoryId: "",
    category: "",
  });

  //fonction me permettant de récupérer les saisies du formulaire
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = name === "price" ? parseFloat(value) : value;

    if (name === "categoryId") {
      setProductData((prevData) => ({
        ...prevData,
        category: value,
      }));
    } else {
      setProductData((prevData) => ({ ...prevData, [name]: parsedValue }));
    }
  };

  //fonction qui me permet d'ajouter un nouveau produit à la soumission du form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`${URL}/product`, {
        ...productData,

        categoryId: productData.category, // Utiliser la valeur de category pour categoryId
      })
      .then((res) => {
        console.log(res.data);

        handleImageUpload(res.data.id);
        setShowModal(false);
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  //Fonction qui permet d'afficher l'image et les données
  const handleImageUpload = (productId: string) => {
    if (file) {
      const formData = new FormData();

      formData.append("image", file as File);

      axios
        .post(`${URL}/product/${productId}/upload/image`, formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className=" flex justify-center absolute top-24 left-40 w-full py-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-10 py-10 items-center gap-10 bg-terracota w-3/5 border border-darkText shadow-inner relative"
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-white font-bold cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <label htmlFor="name" className="labelProducts">
          <input
            type="text"
            name="name"
            placeholder="Nom du produit"
            className="inputProducts"
            onChange={handleChangeInput}
          />
        </label>
        <label htmlFor="description" className="labelProducts">
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="inputProducts"
            onChange={handleChangeInput}
          />
        </label>
        <label htmlFor="price" className="labelProducts">
          <input
            type="text"
            name="price"
            placeholder="Tarif"
            className="inputProducts"
            onChange={handleChangeInput}
          />
        </label>
        <label htmlFor="stock" className="labelProducts">
          <input
            type="text"
            name="stock"
            placeholder="Stock"
            className="inputProducts"
            onChange={handleChangeInput}
          />
        </label>
        <label htmlFor="image" className="labelProducts">
          <input
            type="file"
            name="image"
            placeholder="Lien de l'image"
            className="border border-darkText w-3/4 text-white"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </label>
        <label htmlFor="categoryId" className="labelProducts">
          <input
            type="text"
            name="categoryId"
            placeholder="Catégorie"
            className="inputProducts"
            onChange={handleChangeInput}
          />
        </label>
        <button type="submit" className="buttonHover px-4">
          Ajouter un nouveau produit
        </button>
      </form>
    </div>
  );
}

export default Modal;
