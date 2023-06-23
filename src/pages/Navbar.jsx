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
    <div className="fixed mx-auto z-20 w-full h-[5%]">
      <div
        className={`flex items-center ${
          !isOpen && "bg-white"
        } absolute h-full justify-center w-full z-30`}
      >
        <img src="./img/juanpyLogo.png" className="w-15 h-6 absolute top-3" />
        <button className="absolute right-5 top-3" onClick={openMenu}>
          <Bars />
        </button>
      </div>

      {isOpen && (
        <ul
          transition-style="in:custom:circle-swoop"
          useRef={elementoAnimadoRef}
          className="w-full h-screen absolute bg-colorPage flex justify-center flex-col text-center mb-[9rem] gap-12 text-4xl"
        >
          <a href="#home" onClick={openMenu}>
            Home
          </a>
          <a href="#works" onClick={openMenu}>
            Works
          </a>
          <a href="#tech" onClick={openMenu}>
            Technologies
          </a>
          <a href="#about-me" onClick={openMenu}>
            About Me
          </a>
          <a href="#contact" onClick={openMenu}>
            Contact
          </a>
        </ul>
      )}
      {isClose && (
        <ul
          transition-style="out:custom:circle-swoop"
          className="w-full h-screen absolute bg-colorPage flex justify-center flex-col text-center mb-[9rem] gap-12 text-4xl"
        >
          <li>Home</li>
          <li>Works</li>
          <li>Technologies</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};
