import Image from "next/image";
import photoHome from "../../public/assets/photoHome.png";

function page() {
  return (
    <div>
      <Image src={photoHome} width={1400} height={157} alt="photo home page" />
    </div>
  );
}

export default page;
