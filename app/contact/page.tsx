import React from "react";
import makeUpContact from "../../public/assets/makeUpContact.jpg";
import contactImg from "../../public/assets/contactImg.jpg";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-full flex flex-col pt-12">
      <div className="flex w-full">
        <div className=" flex flex-col items-center justify-center flex-1 w-1/2">
          <Image
            src={makeUpContact}
            width={230}
            height={200}
            alt="makeUpContact"
            className="origin-top-right -rotate-12 border border-1 border-darkText p-4"
          />
          <Image
            src={contactImg}
            width={400}
            height={280}
            alt="contactImg"
            className="origin-top-center rotate-12 border border-1 border-darkText p-4"
          />
        </div>
        <div className="flex flex-1 flex-col items-center gap-20 justify-center w-1/2">
          <h1 className="contact flex justify-center">Me Contacter</h1>
          <form className="flex flex-col w-2/3 gap-6">
            <label htmlFor="firstname" className="contact labelContact">
              Prénom *
              <input type="text" className="inputConection" />
            </label>
            <label htmlFor="name" className="contact labelContact">
              Nom *
              <input type="text" className="inputConection" />
            </label>
            <label htmlFor="email" className="contact labelContact">
              Email *
              <input type="text" className="inputConection" />
            </label>
            <label
              htmlFor="message"
              className="contact labelContact inputConection"
            >
              <textarea
                className="inputConection"
                defaultValue="Message"
              ></textarea>
            </label>
            <button type="submit" className="buttonConection mt-9">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div className="w-full mt-32">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.478770845175!2d4.239674015558657!3d45.50043997910148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5b3de825ce535%3A0xda62b5dd2bc2cb34!2sInstitut%20Bijoux%20de%20soins%20St-Just%20St-Rambert!5e0!3m2!1sfr!2sfr!4v1687884264168!5m2!1sfr!2sfr"
          className="w-full h-64"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
