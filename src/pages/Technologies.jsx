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
import { Git, GitHub, Postman, SASS } from "../utils";

export const Technologies = () => {
  const elements = [
    { icon: <HTML />, name: "HTML" },
    { icon: <CSS />, name: "CSS" },
    { icon: <JS />, name: "JavaScript" },
    { icon: <TailwindIcon />, name: "Tailwind" },
    { icon: <ReactIcon />, name: "React" },
    { icon: <Bootstrap />, name: "Bootstrap" },
    { icon: <SASS />, name: "SASS" },
    { icon: <GitHub width={"w-full"} height={"h-full"} />, name: "GitHub" },
    { icon: <Postman />, name: "Postman" },
    { icon: <Git />, name: "Git" },
  ];

  function Element({ icon, name }) {
    return (
      <div className="flex w-full flex-col items-center justify-center rounded-2xl border bg-white/30 p-2 shadow-md hover:border-colorPage">
        <div className="w-[40%]">{icon}</div>
        <h3 className="mt-2 text-center">{name}</h3>
      </div>
    );
  }

  function Elements() {
    return (
      <div className="flex h-fit w-full flex-col gap-14">
        <div className="grid h-full grid-cols-2 lg:gap-6 max-lg:gap-4 md:grid-cols-3 lg:grid-cols-4">
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
          className="containerBox z-20 flex min-h-screen flex-col items-center justify-center max-lg:pt-[4rem]"
        >
          <h1 className="mb-16 text-center text-5xl font-light ">
            Tecnologias
          </h1>
          <Elements />
        </section>
      </EffectScroll>
    </>
  );
};
