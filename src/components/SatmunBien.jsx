import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BienvenidaSatmun() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16 px-6 md:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Imagen de fondo translúcida y difuminada */}
      <div className="absolute inset-0">
        <img
          src="/images/GalSat26/IMG_9333.JPG"
          alt="SATMUN fondo"
          className="w-full h-full object-cover opacity-15 dark:opacity-20 blur-sm"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600 dark:text-yellow-400 font-serif mb-3">
            SATMUN
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold italic text-gray-900 dark:text-gray-100 max-w-2xl mx-auto">
            “Mientras perdemos el tiempo dudando, la vida pasa” — Séneca
          </h2>
        </div>

        {/* Cuerpo del artículo */}
        <div
          className="text-justify text-base md:text-lg leading-relaxed md:columns-2 md:gap-12 space-y-6"
          data-aos="fade-up"
        >
          <p>
            Hace 6 años, por primera vez, fui adentrado gracias a la institución en una nueva aventura, el mundo de la diplomacia, la oratoria y el debate. Conocí, siendo un pequeño infante cursante de sexto grado, el grandioso modelo de las naciones unidas de la institución educativa denominado SATMUN, que, aunque siendo inexperto en el ámbito, traté de dar mi mejor versión en pro de la nación que fui delegado.
          </p>

          <p>
            Tras 5 años de gran trayectoria por el modelo, puedo concluir que SATMUN es una experiencia muy bonita y que tiene algo muy particular: nos genera emociones en tiempos de automatización, frialdad y avances tecnológicos; nos hace sentir, cualidad que caracteriza al ser humano a diferencia de una máquina. El modelo, sea cual sea nuestro cargo o asignación, nos genera una diversidad de emociones que nos definen como seres vivos: felicidad al lograr lo propuesto, angustia por lo que creemos que puede fallar, incertidumbre y preocupación por lo futuro, y anhelo para que todo se desarrolle como lo planeado.
          </p>

          <p>
            Cada uno de nosotros, siendo dependencia, delegado o Junta Directiva, somos y seremos pieza fundamental del gran rompecabezas que compone este hermoso modelo.
          </p>

          <p>
            Para los delegados, este es un grato espacio donde podemos hacer valer nuestras opiniones, ampliar nuestros conocimientos, donde la búsqueda de soluciones, el esfuerzo y las ganas de un futuro mejor cobran importancia y quedan plasmados en cada portafolio, papel resolutivo y proyecto de ley.
          </p>

          <p>
            Al igual que los delegados, quienes tienen su paso por las dependencias viven una experiencia maravillosa. Prensa y edición son los encargados de dejar en nuestros recuerdos y mostrar al mundo, a través de la pantalla, los bellos momentos que transcurren en nuestro modelo. Crisis es la cuna de la imaginación y la creatividad; cada que entran en acción, son los encargados de generar momentos de presión, sorpresa e intensidad a los delegados, dándole así ese toque de interés a las plenarias. Logística y Staff son quienes, con su amabilidad, colaboración y agilidad, aseguran que el modelo transcurra en un orden y calma dignos de una plenaria que busca un mejor mañana.
          </p>

          <p>
            En esta doceava edición les extiendo una gran invitación: disfruten y den lo mejor de sí mismos a fin de que, dejando huella, queden así plasmados en nuestra memoria grandes momentos que, al recordarlos, generen nostalgia y alegría, aportando como jóvenes, líderes del cambio, nuestro granito de arena al mundo.
          </p>

          <p>
            Finalmente, quienes dan forma y origen a estos grandes momentos: la Junta Directiva, un equipo de trabajo incansable que, día tras día, con su esfuerzo imparable, piensa en cada detalle del modelo para que, en mejora de sí mismo, SATMUN (Santa Teresa para el Mundo) se convierta en un acontecimiento que perdure en los corazones de todo aquel que lo vive.
          </p>
        </div>

        {/* Firma */}
        <div className="text-right mt-12 mr-4 md:mr-10" data-aos="fade-up">
          <p className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 mb-1">
            Con orgullo y gratitud
          </p>
          <p
            className="text-3xl md:text-4xl italic text-gray-800 dark:text-gray-200"
            style={{ fontFamily: "Brush Script MT, cursive" }}
          >
            Juan Tomás Trujillo Peñaranda
          </p>
        </div>
      </div>
    </section>
  );
}

