import React from "react";
import { Internet } from "../utils/icons/Internet";
import { GitHub } from "../utils";

const Proyects = ({ title, description, imgSrc, gitUrl, demoUrl }) => {
  return (
    <div className="cardGeneral carousel-item shadow-md max-lg:hidden max-md:hidden max-sm:hidden">
      <span className="cardGeneral_top"></span>
      <span className="cardGeneral_right"></span>
      <span className="cardGeneral_bottom"></span>
      <span className="cardGeneral_left"></span>
      <div className="flex h-full w-full justify-center p-3">
        <div className="box">
          <div className="bg">
            <img
              src={imgSrc}
              className="h-[8rem] w-[8rem]"
              alt="Social Media"
            />
          </div>
          <span className="top"></span>
          <span className="right"></span>
          <span className="bottom"></span>
          <span className="left"></span>
          <div className="containerButton">
            <a href={gitUrl} target="_blank" class="btn">
              <GitHub width={35} height={35} />
            </a>
            <a href={demoUrl} target="_blank" class="btn">
              <Internet />
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col gap-3">
        <h3 className="text-center font-semibold md:text-2xl">{title}</h3>
        <p className="mx-auto w-[95%] text-center font-normal leading-7">
          {description}
        </p>
      </div>
      <div className="flex w-full justify-between gap-3 p-2"></div>
    </div>
  );
};

export default Proyects;
