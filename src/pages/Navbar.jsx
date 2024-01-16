import React, { useState, useRef } from "react";
import "../styles/styles.scss";
import { Bars } from "../utils";

export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isClose, setisClose] = useState(false);
  const elementoAnimadoRef = useRef(null);

  const openMenu = () => {
    if (!isOpen) {
      setisOpen(true);
      setisClose(false);
    } else {
      setisOpen(false);
      setisClose(true);
    }
  };

  return (
    <div className="fixed top-0 z-30 mx-auto w-[100%] lg:h-[7%]">
      <div
        className={`flex items-center ${
          !isOpen && "bg-[#fefbf8]"
        } absolute -top-1 z-30 h-full w-full justify-center shadow-md lg:hidden`}
      >
        <a href="#home" className="flex justify-center">
          {" "}
          <img src="./img/juanpyLogo.png" className="w-15 absolute top-5 h-6" />
        </a>

        <button className="absolute right-5 top-5" onClick={openMenu}>
          <Bars />
        </button>
      </div>
      <div className="absolute z-30 flex h-full w-full justify-center bg-[#fefbf8] shadow-md max-lg:hidden">
        <a href="#home">
          {" "}
          <img
            src="./img/juanpyLogo.png"
            className="w-15 absolute left-10 top-5 h-6"
          />
        </a>

        <ul className="text-md absolute top-5 flex items-center justify-center gap-12">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#works">Trabajos</a>
          </li>
          <li>
            <a href="#tech">Tecnologias</a>
          </li>
          <li>
            <a href="#about-me">Sobre mi</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul
          transition-style="in:custom:circle-swoop"
          ref={elementoAnimadoRef}
          className="absolute mb-[9rem] flex h-screen w-full flex-col justify-center gap-12 bg-colorPage text-center text-4xl"
        >
          <a href="#home" onClick={openMenu}>
            Inicio
          </a>
          <a href="#works" onClick={openMenu}>
          Trabajos
          </a>
          <a href="#tech" onClick={openMenu}>
            Tecnologias
          </a>
          <a href="#about-me-iphone" onClick={openMenu}>
            Sobre mi
          </a>
          <a href="#contact" onClick={openMenu}>
            Contacto
          </a>
        </ul>
      )}
      {isClose && (
        <ul
          transition-style="out:custom:circle-swoop"
          className="absolute mb-[9rem] flex h-screen w-full flex-col justify-center gap-12 bg-colorPage text-center text-4xl"
        >
          <li>Inicio</li>
          <li>Trabajos</li>
          <li>Tecnologias</li>
          <li>Sobre mi</li>
          <li>Contacto</li>
        </ul>
      )}
    </div>
  );
};
