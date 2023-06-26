import React from "react";


const Proyects = ({title, description, imgSrc,alt,width,height}) => {
  const ButtonProyects = ({ texto, link }) => {
    return (
      <a
        className="w-full rounded-md border bg-colorPage p-3 text-center"
        target="_blank"
        href={link}
      >
        {texto}
      </a>
    );
  };

  return (
    <div className="h-full w-[90%] max-w-[500px] rounded-md border shadow-xl">
    <div className="h-full flex flex-col items-center justify-center gap-3  p-4">
      <div className="flex h-full w-full justify-center p-5">
        <img src={imgSrc} className="h-[9rem] w-[9rem] object-contain" alt={alt} />
      </div>
      <div className="mx-auto my-2 mt-4 flex h-full w-[90%] flex-col gap-5">
        <h3 className="text-center font-semibold">{title}</h3>
        <p className="mx-auto w-[95%] text-center font-normal leading-7">
          {description}
        </p>
      </div>
      <div className="mt-2 my-2 flex w-full justify-around gap-2">
        <ButtonProyects
          texto="Ver"
          link={"https://social-application.web.app/"}
        />
        <ButtonProyects
          texto="Repositorio"
          link={"https://github.com/JuanpyMoscoloni/SocialApp"}
        />
      </div>
    </div>
  </div>
  );
};

export default Proyects;
