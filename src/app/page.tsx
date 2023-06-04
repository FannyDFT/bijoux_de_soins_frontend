import Image from "next/image";
import photoHome from "../../public/assets/photoHome.png";
import Descriptions from "./homePage/Descriptions";
import Prestations from "./homePage/Prestations/Prestations";
import Appointment from "./homePage/appointments/Appointment";
import Carousel from "./homePage/carousel/Carousel";

function page() {
  return (
    <div className="flex flex-col h-auto">
      <div className="bg-banniere object-cover h-[410px] sm:h-[570px]">
        <h2 className="text-whiteText font-MrsSaintDelafield text-2xl absolute top-36 left-6 md:text-8xl md:absolute md:top-80 md:left-8">
          Institut Bijoux de Soins
        </h2>
      </div>
      <Descriptions />
      <Prestations />
      <Appointment />
      <Carousel />
    </div>
  );
}

export default page;
