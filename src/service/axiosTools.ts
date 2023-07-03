import axios from "axios";
import { ICategoryService } from "../types/ICategoryServcice";

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

        const filteredCategoriesOfServices = categories.filter(
          (category: ICategoryService) =>
            category.parentId === null && category.type === "SERVICE",
        );

        const filteredCategoriesOfProducts = categories.filter(
          (category: ICategoryService) =>
            category.parentId === null && category.type === "PRODUCT",
        );

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

        const bodyPackageCategory = categories.filter(
          (category: ICare) =>
            category.id === "4e12a864-21ec-4561-bdec-fb94100c9e51",
        );

        console.log(bodyPackageCategory);

        const faceCareCategory = categories.filter(
          (category: ICare) =>
            category.id === "1c1a30a2-da52-40e3-a698-109ff2a8047a",
        );

        const bodyCareCategory = categories.filter(
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
    };
  }
};
