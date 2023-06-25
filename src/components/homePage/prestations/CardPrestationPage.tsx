import Image from "next/image";
import Link from "next/link";

type Prestation = {
  name: string;
  description: string;
  image: string;
  id: string;
};

function CardPrestationPage({ name, image, description, id }: Prestation) {
  return (
    <Link
      href={`/prestationsPrices/${id}`}
      className="flex flex-col flex-1 bg-beige h-1/2 gap-6 rounded-t-lg border border-1 border-darkText mx-6"
    >
      <Image
        src={image}
        width={330}
        height={300}
        alt={name}
        className="rounded-t-lg"
      />
      <div className="px-6 pb-6 flex flex-col gap-6">
        <h2 className="font-MrsSaintDelafield text-3xl">{name}</h2>
        <p className="font-imprima text-base">{description}</p>
      </div>
    </Link>
  );
}

export default CardPrestationPage;
