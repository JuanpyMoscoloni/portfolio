import React, { useRef } from "react";
import EffectScroll from "../components/EffectScroll";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formElements = form.current.elements;
    let isFormValid = true;
  
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.type !== "submit" && element.value.trim() === "") {
        isFormValid = false;
        break;
      }
    }
  
    // Si algún campo está vacío, mostrar mensaje de error
    if (!isFormValid) {
      toast.error("Por favor, completa todos los campos del formulario. Espere antes de volver a enviar.",{
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    emailjs
      .sendForm(
        "service_m3419sr",
        "template_uvb598n",
        form.current,
        "hRfn9KBOMR7uEmgeR"
      )
      .then(
        (result) => {
          
          toast.success("¡Mail enviado!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        },
        (error) => {
          toast.error("Error al enviar mail. Intentelo devuelta.", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        },
        
      );
  };
  const ContactInput = ({ customPlaceHolder, type, nameInput }) => {
    return (
      <input
        placeholder={customPlaceHolder}
        type={type}
        name={nameInput}
        className="w-full border border-gray-300 p-3 shadow-sm focus:outline-colorPage"
      />
    );
  };

  return (
    <EffectScroll>
      <section
        id="contact"
        className="containerBox z-20 flex h-fit flex-col items-center justify-center pb-[13rem] pt-[6rem] lg:pb-[12rem] "
      >
        <div className="flex w-full flex-col items-center justify-center ">
          <h1 className="text-center text-5xl font-light">Contacto</h1>
          <h2 className="mb-16 text-sm font-extralight">
            moscolonijuanpablo@gmail.com
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex w-full flex-col items-center justify-center gap-4 px-7 lg:w-[50%]"
          >
            <ContactInput
              customPlaceHolder="Nombre*"
              nameInput="user_name"
              type="text"
            />
            <ContactInput
              customPlaceHolder="Email*"
              nameInput="user_email"
              type="email"
            />
            <textarea
              id="mensaje"
              name="message"
              placeholder="Mensaje*"
              rows="5"
              cols="27"
              className="h-full w-full resize-none border border-gray-300 bg-white px-3 py-2 shadow-md focus:outline-colorPage"
            ></textarea>
            <button
              type="submit"
              className="h-fit w-[50%] border border-gray-300 bg-white p-3 shadow-md"
            >
              Enviar Mail
            </button>
            <ToastContainer/>
          </form>
        </div>
      </section>
    </EffectScroll>
  );
};
