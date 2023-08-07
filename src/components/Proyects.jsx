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
    <div className="h-[500px] max-lg:h-[550px] w-[90%] max-w-[500px] rounded-md mx-auto border shadow-xl">
      <div className="flex h-full flex-col items-center justify-center gap-6  p-4">
        <div className="flex h-full w-full justify-center p-5">
          <img
            src={imgSrc}
            className="h-[9rem] w-[9rem] object-contain"
            alt={alt}
          />
        </div>
        <div className="mx-auto mt-4 flex h-full w-full flex-col gap-5">
          <h3 className="text-center font-semibold">{title}</h3>
          <p className="mx-auto w-full text-center font-normal leading-7">
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
