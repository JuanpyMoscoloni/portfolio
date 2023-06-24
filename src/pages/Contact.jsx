import React from "react";
import EffectScroll from "../components/EffectScroll";

export const Contact = () => {
  const ContactInput = ({ customPlaceHolder }) => {
    return (
      <input
        placeholder={customPlaceHolder}
        className="w-full border border-gray-300 p-3 shadow-sm focus:outline-colorPage md:w-[70%]"
      />
    );
  };
  return (
    <EffectScroll>
      <section
        id="contact"
        className="containerBox z-20 flex h-screen flex-col items-center justify-center"
      >
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="mb-8 text-center text-5xl font-light">Contact me</h1>
          <div className="flex w-full flex-col items-center justify-center gap-4 px-7">
            <ContactInput customPlaceHolder="Name" />
            <ContactInput customPlaceHolder="Email" />
            <textarea
              id="mensaje"
              placeholder="Mensaje"
              rows="5"
              cols="27"
              className="h-full w-full resize-none border border-gray-300 bg-white px-3 py-2 shadow-md focus:outline-colorPage"
            ></textarea>
            <button className="h-fit w-[50%] border border-gray-300 bg-white p-3 shadow-md md:w-[30%]">
              Send Mail
            </button>
          </div>
        </div>
      </section>
    </EffectScroll>
  );
};
