import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtLibroPasado() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-5xl font-black mb-4 text-center text-slate-900 dark:text-slate-100 leading-tight">
        El Libro del Pasado
      </h1>

      {/* AUTORÍA Y CRÉDITOS */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
        Autor: <span className="text-slate-800 dark:text-slate-200 font-semibold">Steven Jackson</span>
      </div>

      {/* IMAGEN DE APERTURA (BANNER EDITORIAL) */}
      <div className="mb-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <img
          src="/images/ImaArti/LibPas.jpg"
          alt="El Libro del Pasado y el portal a la historia"
          className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg"
        />
        <p className="text-center text-xs italic text-slate-500 mt-2">
          El misterioso ático y el portal mágico hacia la historia de nuestra patria.
        </p>
      </div>

      {/* CUERPO DEL ARTÍCULO CON FORMATO EDITORIAL */}
      <div className="space-y-6 text-lg leading-relaxed">
        
        {/* Bajada / Introducción destacada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-amber-600 pl-4 py-1">
          El 18 de mayo de 2007 en Cúcuta, un niño llamado Pablo se enfrentaba a una mudanza inesperada y a sus tropiezos con las Ciencias Sociales.
        </p>

        <p className="text-justify">
          A Pablito le encantaba su casa de dos pisos con sus ventanales y su habitación llena de juguetes. Como era olvidadizo y casi nada estudioso, iba perdiendo la materia de Ciencias Sociales. Al enterarse de que se mudarían, quiso hablar con sus padres, pero la decisión ya era permanente. El día de la mudanza, buscando distraerse con un pequeño plano que le dieron sus padres, recorrió largos pasillos y abrió altas puertas hasta encontrar unas escaleras secretas que no figuraban en el papel.
        </p>

        <p className="text-justify">
          Al subirlas, halló un ático abandonado lleno de arañas, libros viejos, candelabros rotos y lámparas de los años 70. En el centro de la habitación se topaba con una misteriosa puerta negra, sostenida por una puntilla y un antiquísimo letrero titulado: <em>“Biblioteca”</em>. Detrás de ella aguardaba una altísima biblioteca con un único ejemplar. Al encaramarse para alcanzarlo, descubrió la carátula: <em>“El libro del pasado”</em>.
        </p>

        {/* Cita destacada tipo revista */}
        <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-amber-500 rounded-r-xl italic text-slate-700 dark:text-slate-300 shadow-sm">
          "Una sacudida meneó con fuerza el ático... La gravedad desapareció mientras una luz cegadora emanaba del libro, y la habitación empezó a girar sobre sí misma."
        </blockquote>

        <p className="text-justify">
          Tras la tormenta de luz y el mareo, Pablo cayó al suelo sintiendo una extraña textura de piedra. Al alzar la vista, vio faroles y casas de ladrillo de otra época. Una voz ronca rompió el silencio: <em>“Ante ti, ni más ni menos: el General Simón Bolívar. ¿Quieres saber algo sobre mí?”</em>. Con la emoción a flor de piel, el pequeño aceptó la invitación del Libertador, quien lo guio a su casa, le explicó sus batallas y le mostró su ejército durante un inolvidable día de vivencias.
        </p>

        <p className="text-justify">
          Al caer la noche, alrededor de una fogata, Simón Bolívar le dejó una profunda reflexión sobre la realidad de aquel encuentro antes de que el reloj marcara las doce y todo quedara inmóvil. Un fuerte viento y una luz cegadora devolvieron a Pablo a su realidad en Cúcuta.
        </p>

        <p className="text-justify">
          Aquella inimaginable aventura transformó por completo su perspectiva: aprendió con detalle la historia patria, comenzó a sacar excelentes notas hasta conseguir un merecido 5.0 en la bimestral de Ciencias Sociales, y logró lo que tanto anhelaba: disfrutar de su vida como un niño normal, pero con el tesoro del conocimiento grabado en su memoria.
        </p>

        <p className="text-right font-semibold mt-8 text-base">
          Autor: Steven Jackson
        </p>

        {/* Botón de regreso a Ciencia y Literatura */}
        <div className="flex justify-center mt-12 mb-6">
          <button
            onClick={() => navigate("/ciencia-literatura")}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg shadow transition duration-200"
          >
            <img src="/images/Recursos26/flechaB.png" alt="Volver" className="w-6 h-6" />
            <span className="font-medium"></span>
          </button>
        </div>

      </div>
    </article>
  );
}