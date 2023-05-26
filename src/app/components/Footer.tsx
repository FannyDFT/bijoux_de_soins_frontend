import Image from "next/image";

function Footer() {
  return (
    <div className="bg-terracota text-whiteText  h-96 sm:h-48 w-full text">
      <div className="flex flex-col items-center h-4/5 justify-around">
        <div className="flex items-center w-full h-1/5 justify-center mr-8">
          <hr className="w-6 bg-white" />
          <h5 className="font-ibarra pl-3  text-base">INFORMATIONS</h5>
        </div>

        <div className="font-imprima text-sm h-4/5 flex flex-col items-center justify-around w-full">
          <div className="text-center">
            <p>
              Mardi: 9h30 - 19h00
              <br />
              Mercredi: 9h00 - 13h00
              <br />
              Jeudi: 10h30 - 20h00
              <br />
              Vendredi-Samedi: 9h30 - 17h00
            </p>
          </div>
          <div>07 78 69 33 86</div>
          <div className="text-center">
            <p>
              14 rue Colombet Solle
              <br />
              42 170 Saint-Just-Saint-Rambert
            </p>
          </div>
          <div className="flex w-full justify-center gap-4">
            <Image
              src="/assets/insta.png"
              width={40}
              height={40}
              alt="instaLogo"
            />
            <Image src="/assets/fb.png" width={40} height={40} alt="fbLogo" />
          </div>
        </div>
      </div>

      <div className="flex justify-between h-1/5 items-end px-4 pb-4">
        <div>
          <p>copyright@</p>
        </div>
        <div>
          <Image
            src="/assets/arrowLogo.png"
            width={40}
            height={40}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
