"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

interface IServiceDetails {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

function ServiceDetails() {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const router = useRouter();
  const { id } = router.query;

  const [serviceDetails, setServiceDetails] = useState<IServiceDetails>();

  useEffect(() => {
    const getAllServiceById = async () => {
      if (id) {
        const serviceData = await axios.get(`${URL}/service/${id}`);
        setServiceDetails(serviceData.data);
      }
    };

    if (id) {
      getAllServiceById();
    }
  }, [id]);

  if (!serviceDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{serviceDetails.name}</h1>
      {/* Render other details */}
    </div>
  );
}

export default ServiceDetails;
