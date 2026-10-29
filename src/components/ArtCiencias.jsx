import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtCiencias() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-5xl font-black mb-4 text-center text-slate-900 dark:text-slate-100 leading-tight">
        El Latido de la Tierra: La huella presencial es irremplazable
      </h1>

      {/* AUTORÍA Y CRÉDITOS */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
        Por <span className="text-slate-800 dark:text-slate-200 font-semibold">Equipo de Ciencias Naturales</span>
      </div>

      {/* IMAGEN DE APERTURA (BANNER EDITORIAL) */}
      <div className="mb-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <img
          src="/images/ImaArti/ArtiCien.jpeg"
          alt="Día de la Tierra"
          className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg"
        />
        <p className="text-center text-xs italic text-slate-500 mt-2">
          La reconexión directa con la naturaleza y los ecosistemas de nuestro entorno.
        </p>
      </div>

      {/* CUERPO DEL ARTÍCULO CON FORMATO EDITORIAL */}
      <div className="space-y-6 text-lg leading-relaxed">
        
        {/* Bajada / Introducción destacada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-emerald-600 pl-4 py-1">
          El 22 de abril no es solo una fecha en el calendario escolar; es un llamado global a la reconexión en un mundo saturado de filtros digitales.
        </p>

        <p className="text-justify">
          La presencialidad se erige como el puente esencial para entender que la Tierra no es un concepto abstracto, sino un organismo vivo que exige ser sentido, caminado y protegido. Estar presentes físicamente nos permite sintonizar nuestros sentidos con el entorno, transformando la conmemoración en una experiencia visceral que ninguna pantalla puede replicar.
        </p>

        <div className="pt-4">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-6 bg-emerald-600 rounded-sm"></span>
            Una dimensión integral del conocimiento
          </h2>
          <p className="text-justify mb-4 font-medium text-slate-700 dark:text-slate-300">
            Desde la visión experta de nuestras áreas fundamentales, el Día de la Tierra cobra un significado profundo:
          </p>
        </div>

        <ul className="space-y-4 text-justify pl-2">
          <li className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">Ciencias y entorno:</strong> La observación directa de la biodiversidad y el análisis del territorio permiten comprender la fragilidad de los ecosistemas, asumiendo nuestra responsabilidad ética en la construcción de una ciudadanía ambiental activa.
          </li>
          <li className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">Lenguaje y comunicación:</strong> El lenguaje se vuelve vivo a través del debate y la expresión poética sobre la naturaleza. Esto fomenta una comunicación empática y global sobre el cambio climático, intercambiando ideas tanto en nuestro idioma como a través de la conectividad con una lengua extranjera.
          </li>
          <li className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">Matemáticas aplicadas:</strong> El cálculo de la huella de carbono y el análisis de datos estadísticos sobre recursos hídricos cobran relevancia al aplicarse a la realidad tangible de nuestro entorno inmediato.
          </li>
          <li className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">Expresión física y artística:</strong> Las actividades al aire libre nos recuerdan que nuestro cuerpo es parte de la naturaleza, fortaleciendo la conciencia corporal mediante el movimiento en espacios verdes. Asimismo, la creación artística con materiales orgánicos y la interpretación estética del paisaje permiten una conexión sensorial que estimula la sensibilidad ambiental.
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">Espiritualidad y valores:</strong> La reflexión sobre el cuidado de "la casa común" promueve valores de trascendencia, gratitud y custodia de la creación. Bajo el legado de Marie Poussepin, asumimos el llamado a trabajar con humildad y sencillez para preservar la vida como reflejo del amor hacia la obra del Creador.
          </li>
        </ul>

        {/* Cita destacada tipo revista */}
        <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-emerald-500 rounded-r-xl italic text-slate-700 dark:text-slate-300 shadow-sm">
          "El conocimiento digital es informativo, pero el aprendizaje presencial es transformativo. Una cámara no puede captar el aroma de la tierra húmeda o la textura de una hoja."
        </blockquote>

        <p className="text-justify">
          En conclusión, constatamos una vez más que estos espacios presenciales son, sin duda, una experiencia enriquecedora. Nos permiten situarnos, pensar, reflexionar, profundizar y llevar a la práctica actitudes y acciones que nos reconectan y mejoran la interacción humana. El aprendizaje obtenido en esta jornada no habría sido el mismo a través de una pantalla.
        </p>

        <p className="text-justify">
          La presencialidad nos recuerda que somos parte del ecosistema, no solo espectadores. Al final del día, la Tierra no necesita más "likes", necesita manos dispuestas a trabajar y corazones capaces de conmoverse ante su majestuosidad.
        </p>

        <p className="text-right font-semibold mt-8 text-base">
          Autor: Equipo de Ciencias Naturales
        </p>

        {/* Botón de regreso a Ciencia y Literatura */}
        <div className="flex justify-center mt-12 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg shadow transition duration-200 cursor-pointer"
          >
            <img src="/images/Recursos26/flechaB.png" alt="Volver" className="w-6 h-6" />
            <span className="font-medium"></span>
          </button>
        </div>

      </div>
    </article>
  );
}