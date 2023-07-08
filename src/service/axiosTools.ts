import axios from "axios";
import { ICategoryService } from "@/types/ICategoryServcice";
import { IProductsData } from "@/types/IProductsData";

const URL = process.env.NEXT_PUBLIC_SERVER_URL;

interface ICare {
  id: string;
  name: string;
}

export const getAll = async () => {
  try {
    const getAllCategories = async () => {
      try {
        const res = await axios.get(`${URL}/category`);

        if (!res) {
          throw new Error("Nous n'avons pas pu récupérer les données");
        }

        const categories = res.data;

        // Récupération des Services et des produits à part
        const filteredCategoriesOfServices = categories.filter(
          (category: ICategoryService) =>
            category.parentId === null && category.type === "SERVICE",
        );

        const filteredCategoriesOfProducts = categories.filter(
          (category: ICategoryService) =>
            category.parentId === null && category.type === "PRODUCT",
        );

        // Récupération de mes catégories par categoryId
        const beautyMainsCategory = categories.find(
          (category: ICategoryService) =>
            category.type === "SERVICE" &&
            category.id === "e21a3195-603a-4e9b-ab75-db7c98aca532",
        );

        const beautyFeetCategory = categories.find(
          (category: ICategoryService) =>
            category.type === "SERVICE" &&
            category.id === "491f31ff-8ab8-484d-b360-15db5f29fba9",
        );

        const bodyPackageCategory = categories.find(
          (category: ICare) =>
            category.id === "4e12a864-21ec-4561-bdec-fb94100c9e51",
        );

        const faceCareCategory = categories.find(
          (category: ICare) =>
            category.id === "1c1a30a2-da52-40e3-a698-109ff2a8047a",
        );

        const bodyCareCategory = categories.find(
          (category: ICare) =>
            category.id === "0e896296-7745-4267-ac1b-bc3bc3fe983a",
        );

        return {
          services: filteredCategoriesOfServices,
          products: filteredCategoriesOfProducts,
          beautyMain: beautyMainsCategory,
          beautyFeet: beautyFeetCategory,
          bodyPackageCategory: bodyPackageCategory,
          faceCareCategory: faceCareCategory,
          bodyCareCategory: bodyCareCategory,
        };
      } catch (error) {
        console.log(error);
        return { services: [], products: [] };
      }
    };

    const getServicesByCategory = async (categoryId: string) => {
      try {
        const res = await axios.get(`${URL}/service?categoryId=${categoryId}`);

        if (!res) {
          throw new Error("Nous n'avons pas pu récupérer les données");
        }

        const services = res.data;

        return services;
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    const categoriesData = await getAllCategories();

    const faceServicesData = await getServicesByCategory(
      "1ed16fd0-0856-4102-b713-dcb63c3bd8d2",
    );
    const bodyServicesData = await getServicesByCategory(
      "49134335-c8fd-4515-b449-bb28c00ad35f",
    );
    const forfaitServicesData = await getServicesByCategory(
      "4e12a864-21ec-4561-bdec-fb94100c9e51",
    );

    const feetPricesData = await getServicesByCategory(
      "491f31ff-8ab8-484d-b360-15db5f29fba9",
    );

    const nailsPricesData = await getServicesByCategory(
      "e21a3195-603a-4e9b-ab75-db7c98aca532",
    );

    const colorationPrices = await getServicesByCategory(
      "f5aa067b-1c82-4d62-8da6-76a62c5eac8b",
    );

    const faceCare = await getServicesByCategory(
      "1c1a30a2-da52-40e3-a698-109ff2a8047a",
    );

    const bodyCare = await getServicesByCategory(
      "0e896296-7745-4267-ac1b-bc3bc3fe983a",
    );

    const bodyPackage = await getServicesByCategory(
      "a4d06671-7d9c-4c73-979b-76112635bb0b",
    );

    const getAllProduct = async (categoryId: string) => {
      try {
        const res = await axios.get(`${URL}/product?categoryId=${categoryId}`);
        if (!res) {
          throw new Error("Nous n'avons pas pu récupérer les données");
        }
        const allProducts = res.data;
        return allProducts;
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    const pulpeProducts = await getAllProduct(
      "fec64e54-eea4-47e5-9364-5c3bde09bd04",
    );

    const laboratoireProducts = await getAllProduct(
      "7187ff30-cae3-4812-9936-bd92b3c62f7e",
    );
    const referenceProducts = await getAllProduct(
      "08962a21-7d18-450e-aef3-dcb3324f5185",
    );
    const zaoProducts = await getAllProduct(
      "631f9bb0-6b9d-4b53-b527-ffdbbd43b695",
    );
    const luxyProducts = await getAllProduct(
      "f744e5ee-25ac-4531-98e1-0b4068cd2b3c",
    );

    return {
      ...categoriesData,
      faceServicesData: faceServicesData,
      bodyServicesData: bodyServicesData,
      forfaitServicesData: forfaitServicesData,
      feetPricesData: feetPricesData,
      nailsPricesData: nailsPricesData,
      colorationPrices: colorationPrices,
      faceCare: faceCare,
      bodyCare: bodyCare,
      bodyPackage: bodyPackage,
      pulpeProducts: pulpeProducts,
      laboratoireProducts: laboratoireProducts,
      referenceProducts: referenceProducts,
      zaoProducts: zaoProducts,
      luxyProducts: luxyProducts,
    };
  } catch (error) {
    console.log(error);
    return {
      services: [],
      products: [],
      faceServicesData: [],
      bodyServicesData: [],
      forfaitServicesData: [],
      feetPricesData: [],
      nailsPricesData: [],
      beautyMain: {},
      beautyFeet: {},
      colorationPrices: [],
      faceCare: [],
      bodyCare: [],
      bodyPackage: [],
      pulpeProducts: [],
      laboratoireProducts: [],
    };
  }
};
