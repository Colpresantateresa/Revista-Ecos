import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Editorial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-24 pb-20 font-montserrat px-6 md:px-12 max-w-5xl mx-auto text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-500">

      {/* Encabezado tipo revista */}
      <div className="mb-10" data-aos="fade-up">
        <span className="uppercase tracking-widest text-sm text-[#058688] font-bold">
          San José de Cúcuta, 08 de octubre de 2026 · Edición N°7
        </span>

        <h1 className="text-3xl md:text-5xl font-black mt-2 leading-tight text-slate-900 dark:text-white uppercase">
          Lo que nos acerca genera encuentro: ¡Educar más allá de las pantallas!
        </h1>

        <h2 className="text-lg md:text-xl mt-3 text-slate-600 dark:text-slate-400 italic font-medium">
          Revista Institucional “ECOS PRESENTACIÓN” 2026
        </h2>

        <div className="w-24 h-1 bg-[#058688] mt-6"></div>
      </div>

      {/* Imagen tipo revista (Rectora) */}
      <div
        className="float-right md:w-64 w-52 ml-6 mb-4 text-center"
        data-aos="zoom-in"
      >
        <img
          src="/images/ImaArti/HnaO.jpg"
          alt="Hna. Omaira del C. Sánchez Ardila - Rectora"
          className="rounded-xl shadow-lg w-full h-auto object-cover border-4 border-slate-50 dark:border-slate-800"
        />
        <p className="mt-3 text-sm md:text-base font-bold">
          Hna. Omaira del C. Sánchez Ardila
          <br />
          <span className="font-light text-slate-600 dark:text-slate-400">
            Rectora
          </span>
        </p>
      </div>

      {/* Contenido */}
      <div className="text-justify leading-relaxed space-y-6 font-medium">

        {/* Cita bíblica principal */}
        <blockquote className="border-l-4 border-[#058688] pl-6 italic text-lg text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-6 rounded-r-lg shadow-sm">
          “Todo hombre prudente actúa con conocimiento…”.
          <span className="block text-right text-sm mt-2 font-bold not-italic">
            — Prov. 13.16a
          </span>
        </blockquote>

        <p>
          Este año 2026, se caracteriza por un compromiso asumido en corresponsabilidad y propósito, por hacer posible la práctica del valor de la prudencia.
        </p>

        <p>
          Con el entusiasmo de siempre, nos alegra llegar a ti, querido lector. En esta séptima edición de nuestra revista institucional <strong className="font-bold text-[#058688]">“ECOS PRESENTACIÓN”</strong>, destacamos la prudencia como un valor esencial que potencia nuestras habilidades y el conocimiento, recordándonos que ser conscientes y estar verdaderamente conectados es lo que nos acerca, genera encuentro y reafirma la misión de educar más allá de las pantallas.
        </p>

        <p>
          Frente al acelerado avance de la tecnología, buscamos mantenernos actualizados desde una mirada humana e institucional. Aunque los entornos digitales ofrecen múltiples herramientas, su exceso puede generar distancia; ningún dispositivo sustituye la riqueza ni la magia del contacto directo. El verdadero aprendizaje florece en el diálogo, en el estar presentes y en el compartir cotidiano.
        </p>

        <p>
          Escribir y leer nos permiten trascender fronteras, dar vida a personajes fantásticos y habitar la historia que hoy nos corresponde tejer. En estas páginas, las voces de nuestros estudiantes y docentes cobran vida a través de producciones y reflexiones que revelan su talento, imaginación y amor por el saber.
        </p>

        <p>
          Queremos asegurar un tiempo oportuno para disfrutar de la lectura como el arte para pensar y crear, pero, sobre todo, como un reto en familia: el de construir juntos una nueva mentalidad. Inspirados por la sabiduría que cultiva la prudencia y la autonomía que —al estilo de Marie Poussepin— genera libertad en la búsqueda de la verdad, anhelamos que nuestras palabras sean siempre sabias, verdaderas y fraternas, para que el saber nos humanice y deje una impronta indeleble en el corazón de nuestra comunidad.
        </p>

        <p>
          El compromiso de la comunidad educativa y de los lectores de esta nueva edición de la revista es hacer un uso responsable de la tecnología, sumándose con entusiasmo, esperanza y buena actitud a la cultura del encuentro. Los invitamos a pasar la página y descubrir, en cada artículo, ideas inspiradoras y herramientas prácticas para transformar nuestra experiencia digital.
        </p>

        {/* Llamado a la acción destacado */}
        <div className="bg-[#058688]/10 dark:bg-slate-800/80 border border-[#058688]/30 dark:border-slate-700 p-4 rounded-xl text-center my-6">
          <p className="text-[#058688] dark:text-[#058688] font-bold text-base md:text-lg">
            ¿Estamos usando la tecnología para conectarnos de verdad? Descúbrelo en nuestras páginas.
          </p>
        </div>

        {/* Cita de sabiduría */}
        <blockquote className="border-l-4 border-[#058688] pl-6 italic text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-4 rounded-r-lg">
          “Por eso pedí y se me concedió la prudencia; supliqué y me vino el espíritu de Sabiduría.”
          <span className="block text-right text-xs mt-1 font-bold not-italic">
            — Sab. 7, 7
          </span>
        </blockquote>

        <p>
          Que Nuestra Señora de La Presentación acompañe nuestros procesos educativos, nos conceda un corazón dispuesto a escuchar la Palabra de Dios y nos guíe con su sabiduría para innovar y transformar. ¡Bendiciones!
        </p>

        {/* Separador elegante y frase final */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-8 mt-10 text-center">
          <p className="font-bold text-xl text-[#058688]">
            El pasado nos hace conscientes, el presente nos conecta y el futuro es hoy y está en tus manos para vivirlo con propósito.
          </p>
        </div>
      </div>

      <div className="clear-both"></div>
    </section>
  );
}