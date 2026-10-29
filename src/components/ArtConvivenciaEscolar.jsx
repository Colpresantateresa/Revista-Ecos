import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtConvivenciaEscolar() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-5xl font-black mb-3 text-center text-slate-900 dark:text-slate-100 leading-tight">
        Día de la Convivencia Escolar
      </h1>

      {/* AUTORÍA Y CRÉDITOS */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-10">
        Colegio de La Presentación Santa Teresa – Cúcuta <br />
        Por: <span className="text-slate-800 dark:text-slate-200 font-semibold">Adeida Serrano Manrique</span> <br />
        <span className="italic text-slate-400">Coordinadora de convivencia escolar</span>
      </div>

      {/* CUERPO DEL ARTÍCULO CON IMAGEN FLOTANTE A LA IZQUIERDA */}
      <div className="text-lg leading-relaxed space-y-6">
        
        {/* IMAGEN FLOTANTE EN LA ESQUINA SUPERIOR IZQUIERDA */}
        <div 
          className="float-left mr-6 mb-4 w-full sm:w-[45%] max-w-sm bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg"
          data-aos="fade-right" 
          data-aos-duration="1200"
        >
          <img
            src="/images/ImaArti/DIACE.JPG"
            alt="Día de la Convivencia Escolar"
            className="w-full h-auto object-contain"
          />
          <p className="p-2 text-center text-xs italic text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80">
            ¡Hola! Soy Convi, la voz de la convivencia en nuestro colegio.
          </p>
        </div>

        {/* Bajada / Introducción destacada y justificada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-indigo-600 pl-4 py-1 text-justify">
          ¡Hola! Soy Convi, la voz de la convivencia en nuestro colegio. Hoy vengo a recordarte que cada 20 de febrero celebramos el Día de la Convivencia Escolar, una ocasión especial para fortalecer nuestro desarrollo personal y social.
        </p>

        <p className="text-justify">
          Esta fecha promueve procesos de enseñanza e interacción que resaltan la importancia del buen trato en nuestra formación integral. ¿Sabías que tengo una norma que me respalda? ¡Así es! La Ley 1620 de 2013 crea el Sistema Nacional de Convivencia Escolar para prevenir y mitigar la violencia, el acoso (bullying) y el embarazo adolescente, promoviendo los derechos humanos y la formación ciudadana.
        </p>

        <p className="text-justify">
          Gracias a esta ley, el Gobierno Nacional establece mecanismos de prevención, detección temprana y denuncia de cualquier conducta que atente contra nuestro bienestar, ciudadanía y derechos dentro y fuera de la institución.
        </p>

        <p className="text-justify">
          Como tu amiga la Convivencia Escolar, te recuerdo que mi presencia implica generar y respetar acuerdos compartidos. Esto fortalece un ambiente inclusivo, seguro y respetuoso donde florecen la empatía, la comunicación efectiva y la resolución pacífica de conflictos.
        </p>

        {/* Limpiador de flotado para que el resto baje ordenadamente */}
        <div className="clear-both"></div>

        <div className="pt-2">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Cuando vivimos en armonía:
          </h2>
        </div>

        {/* Lista estilizada */}
        <ul className="space-y-4 my-4 pl-2">
          <li className="border-b border-slate-100 dark:border-slate-800 pb-3 text-justify">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">• Construimos relaciones saludables</strong> que nos motivan a alcanzar un excelente rendimiento académico.
          </li>
          <li className="pb-3 text-justify">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">• Fomentamos la responsabilidad y la solidaridad</strong>, formando ciudadanos justos, equitativos, tolerantes y resilientes.
          </li>
        </ul>

        <p className="text-justify">
          En nuestra comunidad educativa, esta celebración nos invita a reflexionar y profundizarnos en los valores humanos que nos identifican como cristianos, asumiendo desde la piedad y la sencillez un estilo de vida con fisonomía propia.
        </p>

        {/* Cita destacada tipo revista */}
        <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-indigo-500 rounded-r-xl font-semibold text-slate-700 dark:text-slate-300 shadow-sm text-center">
          "¡Recuerda que la convivencia escolar la hacemos entre todos!"
        </blockquote>

        {/* Botón de regreso */}
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