import React from "react";
import EffectScroll from "../components/EffectScroll";

export const Contact = () => {
  return (
    <EffectScroll>
      <section
        id="contact"
        className="containerBox h-screen flex flex-col justify-center items-center z-20"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-8 font-light text-center">Contact me</h1>
          <div className="w-full flex flex-col gap-4 px-7 justify-center items-center">
            <input placeholder="Name" className="border border-gray-300 p-3 md:w-[70%]" />
            <input
              placeholder="Email"
              className="border border-gray-300 p-3 md:w-[70%] "
            />
            <input
              placeholder="Message"
              className="custom-input border border-gray-300 p-3 h-32 md:w-[70%]"
            />

            <button className="border p-3 border-gray-300 h-fit w-fit md:w-[30%]">
              Send Mail
            </button>
          </div>
        </div>
      </section>
    </EffectScroll>
  );
};
