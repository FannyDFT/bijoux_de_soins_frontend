import { getAll } from "@/service/axiosTools";
import { IProductsData } from "@/types/IProductsData";
import React, { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState<{
    laboratoireProducts: Array<IProductsData>;
    pulpeProducts: Array<IProductsData>;
    referenceProducts: Array<IProductsData>;
    zaoProducts: Array<IProductsData>;
    luxyProducts: Array<IProductsData>;
  }>({
    laboratoireProducts: [],
    pulpeProducts: [],
    referenceProducts: [],
    zaoProducts: [],
    luxyProducts: [],
  });
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();

      setProducts({
        laboratoireProducts: data.laboratoireProducts,
        pulpeProducts: data.pulpeProducts,
        referenceProducts: data.referenceProducts,
        zaoProducts: data.zaoProducts,
        luxyProducts: data.luxyProducts,
      });
    };

    fetchData();
  }, []);

  return <div>ProductsList</div>;
}

export default ProductsList;
