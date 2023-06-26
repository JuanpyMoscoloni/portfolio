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
    <div className="fixed z-20 mx-auto h-[6%] w-full lg:h-[7%]">
      <div
        className={`flex items-center ${
          !isOpen && "bg-[#fffaf6]"
        } absolute z-30 h-full w-full justify-center shadow-md lg:hidden`}
      >
        <a href="#home" className="flex justify-center">
          {" "}
          <img src="./img/juanpyLogo.png" className="w-15 absolute top-3 h-6" />
        </a>

        <button className="absolute right-5 top-3" onClick={openMenu}>
          <Bars />
        </button>
      </div>
      <div className="absolute z-30 flex h-full w-full justify-center bg-[#fffaf6] shadow-md max-lg:hidden">
        <a href="#home">
          {" "}
          <img
            src="./img/juanpyLogo.png"
            className="w-15 absolute left-10 top-5 h-6"
          />
        </a>

        <ul className="text-md absolute top-5 flex items-center justify-center gap-12">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#tech">Technologies</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul
          transition-style="in:custom:circle-swoop"
          useRef={elementoAnimadoRef}
          className="absolute mb-[9rem] flex h-screen w-full flex-col justify-center gap-12 bg-colorPage text-center text-4xl"
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
          <a href="#about-me-iphone" onClick={openMenu}>
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
          className="absolute mb-[9rem] flex h-screen w-full flex-col justify-center gap-12 bg-colorPage text-center text-4xl"
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
