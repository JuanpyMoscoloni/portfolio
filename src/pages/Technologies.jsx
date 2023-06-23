import React, { useRef } from "react";
import "animate.css";
import "../styles/styles.scss";
import { JS } from "../utils/icons/JS";
import { HTML } from "../utils/icons/HTML";
import { CSS } from "../utils/icons/CSS";
import { ReactIcon } from "../utils/icons/React";
import { Bootstrap } from "../utils/icons/Bootstrap";
import { TailwindIcon } from "../utils/icons/Tailwind";
import EffectScroll from "../components/EffectScroll";

export const Technologies = () => {
  const elements = [
    { icon: <HTML width={35} height={35}/>, name: "HTML" },
    { icon: <CSS width={35} height={35}/>, name: "CSS" },
    { icon: <JS  width={35} height={35}/>, name: "JavaScript" },
    { icon: <TailwindIcon width={35} height={35}/>, name: "Tailwind" },
    { icon: <ReactIcon width={35} height={35}/>, name: "React" },
    { icon: <Bootstrap width={35} height={35}/>, name: "Bootstrap" },
  ];

  function Element({ icon, name }) {
    return (
      <div className="flex flex-col items-center p-3 mx-auto border rounded-md hover:p-2 hover:border-colorPage">
        {icon}
        <h3 className="mt-2 text-center">{name}</h3>
      </div>
    );
  }

  function Elements() {
    return (
      <div className="w-full h-fit flex flex-col gap-14 md:w-[90%] md:items-center">
        <div className="w-full h-full grid grid-cols-3 transition-all gap-4">
          {elements.map((element, index) => (
            <Element key={index} {...element} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <EffectScroll>
        <section
          id="tech"
          className="containerBox h-screen flex flex-col items-center justify-center z-20"
        >
          <h1 className="text-5xl font-light text-center mb-20 ">
            Technologies
          </h1>
          <Elements />
        </section>
      </EffectScroll>
    </>
  );
};
