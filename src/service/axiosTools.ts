import axios from "axios";
import { ICategoryService } from "../types/ICategoryServcice";

const URL = process.env.NEXT_PUBLIC_SERVER_URL;

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

        return {
          services: filteredCategoriesOfServices,
          products: filteredCategoriesOfProducts,
          beautyMain: beautyMainsCategory,
          beautyFeet: beautyFeetCategory,
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
        console.log(services);

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

    return {
      ...categoriesData,
      faceServicesData: faceServicesData,
      bodyServicesData: bodyServicesData,
      forfaitServicesData: forfaitServicesData,
      feetPricesData: feetPricesData,
      nailsPricesData: nailsPricesData,
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
    };
  }
};
