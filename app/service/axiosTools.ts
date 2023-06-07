import axios from "axios";
import { ICategoryService } from "../types/ICategoryServcice";

const URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getAllCategoriesOfServices = async () => {
  try {
    const res = await axios.get(`${URL}/category`);

    if (!res) {
      throw new Error("Nous n'avons pas pu récupérer les données");
    }

    const categories = res.data;
    const filteredCategories = categories.filter(
      (category: ICategoryService) =>
        category.parentId === null && category.type === "SERVICE",
    );

    return filteredCategories;
  } catch (error) {
    console.log(error);
    return [];
  }
};
