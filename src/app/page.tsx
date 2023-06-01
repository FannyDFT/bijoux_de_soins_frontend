import Image from "next/image";
import photoHome from "../../public/assets/photoHome.png";

function page() {
  return (
    <div className="flex flex-col">
      <div>
        <Image
          src={photoHome}
          width={1600}
          height={157}
          alt="photo home page"
        />
        <p className="text-gray font-MrsSaintDelafield text-2xl relative bottom-28 left-4 sm:text-8xl sm:relative sm:bottom-80">
          Institut Bijoux de Soins
        </p>
      </div>
      <div>
        <h3 className="font-ibarra">L&apos;Institut</h3>
        <p>Prendre soin de son corps</p>
        <p>C&apos;est donner envie à son âme d&apos;y rester </p>
        <p>
          Bienvenue dans l&apos;univers de Bijoux de Soins. Vous y retrouverez
          des prestations dédiés à la beauté et au bien-être pour une véritable
          parenthèse détente. Dans le but de réaliser des soins de beauté
          relaxants avec des résultats concrets, j&apos;ai choisi des marques
          françaises respectueuses de l&apos;environnement
        </p>
        <p>
          Ces marques professionnelles proposent des produits de qualités
          d&apos;une réelle efficacité, composés d&apos;ingrédients
          d&apos;origine naturelle, conçus, développés et fabriqués
          exclusivement en France. Des produits cosmétiques Bio tel que le
          maquillage , les soins pour le visage , le corps et l&apos;hygiène
          sont disponibles à l&apos;institut pour prendre soin de soi même à la
          maison .
        </p>
      </div>
    </div>
  );
}

export default page;
