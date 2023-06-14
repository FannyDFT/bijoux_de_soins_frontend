import React from "react";
import makeUpContact from "../../../public/assets/makeUpContact.jpg";
import contactImg from "../../../public/assets/contactImg.jpg"
import Image from "next/image";

function Contact() {
  return <div className="h-screen w-full flex py-12">
    
    <div className=" flex flex-col items-center justify-center flex-1">
      <Image src={makeUpContact} width={230} height={200} alt="makeUpContact" />
      <Image src={contactImg} width={400} height={280} alt="contactImg" />
    </div>
    <div className="flex flex-1 flex-col gap-20 justify-center"> 
    <h1 className="contact flex justify-center">Me Contacter</h1>
    <form className="flex flex-col">
      <label htmlFor="firstname" className="contact labelContact">Prénom *
        <input type="text" className="inputConection"/>
      </label>
      <label htmlFor="name" className="contact labelContact">Nom *
        <input type="text" className="inputConection"/>
      </label>
      <label htmlFor="email" className="contact labelContact">Email *
        <input type="text" className="inputConection"/>
      </label>
      <label htmlFor="message" className="contact labelContact inputConection">
        <textarea className="inputConection" >Message</textarea>
      </label>
      <button type="submit" className="buttonConection">Envoyer</button>
    </form></div>
   
  </div>
  
}

export default Contact;
