import { useEffect, useRef } from "react";
function EffectScroll({ children }) {
  const elementoAnimadoRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const elementoAnimado = elementoAnimadoRef.current;
      const scrollPos = window.scrollY + window.innerHeight;
      if (elementoAnimado.offsetTop < scrollPos) {
        elementoAnimado.classList.add("animate__animated", "animate__fadeIn");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div ref={elementoAnimadoRef}>{children}</div>;
}
export default EffectScroll;
