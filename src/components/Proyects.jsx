import React from "react";
import { Git } from "../utils/icons/Git";
import { Internet } from "../utils/icons/Internet";

const Proyects = ({ title, description, imgSrc, gitUrl, demoUrl }) => {
  return (
    <div className="cardGeneral carousel-item md:w-[60%]">
      <span class="cardGeneral_top"></span>
      <span class="cardGeneral_right"></span>
      <span class="cardGeneral_bottom"></span>
      <span class="cardGeneral_left"></span>
      <div className="flex justify-center w-full h-full p-3">
        <div class="box md:w-full">
          <div class="bg">
            <img
              src={imgSrc}
              className="w-[8rem] h-[8rem]"
              alt=""
            />
          </div>
          <span class="top"></span>
          <span class="right"></span>
          <span class="bottom"></span>
          <span class="left"></span>
          <div className="containerButton md:left-[44%]">
            <a href={gitUrl} target="_blank" class="btn">
              <Git width={35} height={35} />
            </a>
            <a href={demoUrl} target="_blank" class="btn">
              <Internet />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative gap-3 w-full h-full">
        <h3 className="text-center font-semibold">{title}</h3>
        <p className="font-normal leading-7 text-center">{description}</p>
      </div>
      <div className="flex gap-3 w-full p-2 justify-between"></div>
    </div>
  );
};

export default Proyects;
