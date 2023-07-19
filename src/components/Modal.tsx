// "use client";
// import axios from "axios";
// import React, { ChangeEvent, useState } from "react";
// interface IProps {
//   refresh: () => void;
//   setProducts: () => void;
//   setShowModal: () => void;
//   setSelectedProductCategory: () => void;
//   handleAddProduct: (productData: any) => void;
// }

// function Modal({
//   refresh,
//   setProducts,
//   setShowModal,
//   setSelectedProductCategory,
//   handleAddProduct,
// }: IProps) {
//   const URL = process.env.NEXT_PUBLIC_SERVER_URL;
//   const [file, setFile] = useState<File | null>();
//   const [postProducts, setPostProducts] = useState({
//     name: "",
//     image: "",
//     price: "",
//     description: "",
//     stock: "",
//     categoryId: "",
//   });

//   const handleChangePostProduct = (e: ChangeEvent<HTMLInputElement>) => {
//     setPostProducts({ ...postProducts, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     handleAddProduct(postProducts);
//     handleImageUpload();
//   };

//   const handleImageUpload = () => {
//     const formData = new FormData();

//     formData.append("image", file as File);

//     axios
//       .post(`${URL}/product/upload/image`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .then(() => {
//         refresh();
//       });
//   };

//   return (
//     <div className=" flex justify-center  w-5/6  py-6">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col p-10 items-center gap-10 bg-beige bg-opacity-80 w-3/4 border border-darkText"
//       >
//         {/* <button type="button" onClick={() => setShowModal(false)}>
//           X
//         </button> */}
//         <label htmlFor="name">
//           <input
//             type="text"
//             name="name"
//             placeholder="Nom du produit"
//             className="border border-darkText"
//             onChange={handleChangePostProduct}

//           />
//         </label>
//         <label htmlFor="description">
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             className="border border-darkText"
//             onChange={handleChangePostProduct}

//           />
//         </label>
//         <label htmlFor="price">
//           <input
//             type="text"
//             name="price"
//             placeholder="Tarif"
//             className="border border-darkText"
//             onChange={handleChangePostProduct}

//           />
//         </label>
//         <label htmlFor="stock">
//           <input
//             type="text"
//             name="stock"
//             placeholder="Stock"
//             className="border border-darkText"
//             onChange={handleChangePostProduct}

//           />
//         </label>
//         <label htmlFor="image">
//           <input
//             type="file"
//             name="image"
//             placeholder="Lien de l'image"
//             className="border border-darkText"
//             onChange={(e) => setFile(e.target.files[0])}

//           />
//         </label>
//         <label htmlFor="categoryId">
//           <input
//             type="text"
//             name="categoryId"
//             placeholder="Catégorie"
//             className="border border-darkText"
//             onChange={handleChangePostProduct}

//           />
//         </label>
//         <button type="submit">Ajouter un nouveau produit</button>
//       </form>
//     </div>
//   );
// }

// export default Modal;
