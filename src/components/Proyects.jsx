import React from "react";

const Proyects = ({ title, description, imgSrc, alt, gitUrl, demoUrl }) => {
  const ButtonProyects = ({ texto }) => {
    return (
      <>
        <a
          className="w-full rounded-md border bg-colorPage p-3 text-center"
          target="_blank"
          href={demoUrl}
        >
          Ver
        </a>
        <a
          className="w-full rounded-md border bg-colorPage p-3 text-center"
          target="_blank"
          href={gitUrl}
        >
          Repositorio
        </a>
      </>
    );
  };

  return (
    <div className="h-[500px] max-lg:h-[550px] w-full max-w-[500px] rounded-md mx-auto border shadow-xl">
      <div className="flex h-full flex-col items-center justify-center  p-4">
        <div className="flex h-[130px] w-[200px] justify-center">
          <img
            src={imgSrc}
            className="h-full w-full object-contain"
            alt={alt}
          />
        </div>
        <div className="mx-auto mt-4 flex h-[260px] w-[300px] flex-col gap-5">
          <h3 className="text-center font-semibold">{title}</h3>
          <p className="mx-auto w-full h-full text-center font-normal leading-7">
            {description}
          </p>
        </div>
        <div className="my-2 mt-2 flex w-full justify-around gap-2">
          <ButtonProyects />
        </div>
      </div>
    </div>
  );
};

export default Proyects;
