import React from "react";
import FadeInDiv from "../utils/FadeInDiv";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="px-2 sm:px-16 md:px-24 lg:px-32 xl:px-64 flex flex-wrap gap-4 flex-col items-center w-full lg:items-start scroll-mt-24"
    >
      <FadeInDiv direction="up">
        <span className="text-6xl font-bold text-left">Contact</span>
      </FadeInDiv>
      <FadeInDiv direction="up" className="w-full">
        <ContactForm />
      </FadeInDiv>
    </div>
  );
};

export default Contact;
