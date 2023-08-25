import ListPrestationsPage from "@/components/homePage/prestations/ListPrestationsPage";
import ListProductPage from "../../src/components/homePage/prestations/ListProductsPage";
function page() {
  return (
    <div>
      {" "}
      <ListPrestationsPage />
      <ListProductPage />
    </div>
  );
}

export default page;
