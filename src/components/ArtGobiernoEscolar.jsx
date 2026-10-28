import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtGobiernoEscolar() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-5xl font-black mb-3 text-center text-slate-900 dark:text-slate-100 leading-tight">
        Gobierno Escolar: una experiencia de liderazgo con corazón
      </h1>

      {/* AUTORÍA Y CRÉDITOS CORRECTOS AL INICIO */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-10">
        Colegio de La Presentación Santa Teresa – Cúcuta <br />
        Por: <span className="text-slate-800 dark:text-slate-200 font-semibold">María Belén – Área de Ciencias Sociales</span>
      </div>

      {/* CUERPO DEL ARTÍCULO CON IMAGEN FLOTANTE */}
      <div className="text-lg leading-relaxed space-y-6">
        
        {/* IMAGEN FLOTANTE EN LA ESQUINA SUPERIOR DERECHA */}
        <div 
          className="float-right ml-6 mb-4 w-full sm:w-[45%] max-w-sm bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg"
          data-aos="fade-left" 
          data-aos-duration="1200"
        >
          <img
            src="/images/ImaArti/GEPC.JPG"
            alt="Gobierno Escolar y liderazgo estudiantil"
            className="w-full h-auto object-contain"
          />
          <p className="p-2 text-center text-xs italic text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80">
            Democracia, participación y valores institucionales.
          </p>
        </div>

        {/* Bajada / Introducción destacada y justificada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-amber-600 pl-4 py-1 text-justify">
          En el año 2026, el Colegio de La Presentación Santa Teresa – Cúcuta vivió con entusiasmo y compromiso el proceso del Gobierno Escolar, una oportunidad valiosa para formar líderes con sentido humano.
        </p>

        <p className="text-justify">
          Desde el inicio del año escolar, los estudiantes se involucraron activamente en la elección de sus representantes: personero, contralor, representante de grupo, mediador y miembros del Consejo Estudiantil. Cada campaña estuvo llena de creatividad, propuestas significativas y, sobre todo, del deseo sincero de aportar al bienestar de la comunidad educativa. Más que una competencia, fue una verdadera fiesta democrática en la que se aprendió a escuchar, dialogar y elegir con responsabilidad.
        </p>

        <p className="text-justify">
          En nuestra institución, el Gobierno Escolar no solo representa un ejercicio de participación, sino también una vivencia profunda de los valores inspirados por Marie Poussepin: piedad, sencillez y trabajo.
        </p>

        {/* Limpiador de flotado para que el resto del contenido baje ordenadamente */}
        <div className="clear-both"></div>

        {/* Lista estilizada de valores con texto justificado */}
        <ul className="space-y-4 my-6 pl-2">
          <li className="border-b border-slate-100 dark:border-slate-800 pb-3 text-justify">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">La piedad:</strong> Se refleja en cada acción solidaria, en el respeto por los demás y en la disposición de ayudar a quien lo necesita. Los líderes estudiantiles han promovido campañas de convivencia, espacios de escucha activa y actividades que fortalecen la unión y el cuidado mutuo.
          </li>
          <li className="border-b border-slate-100 dark:border-slate-800 pb-3 text-justify">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">La sencillez:</strong> Se evidencia en la actitud humilde de nuestros representantes, quienes comprenden que liderar no es mandar, sino servir. Con cercanía y empatía, han sabido dar voz a sus compañeros, valorando cada opinión y construyendo soluciones de manera conjunta.
          </li>
          <li className="pb-3 text-justify">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">El trabajo:</strong> Ha sido el motor de todas las iniciativas. Con dedicación y esfuerzo, los estudiantes han organizado proyectos de mejora en el colegio, demostrando que con verdadero compromiso se logran grandes transformaciones.
          </li>
        </ul>

        <p className="text-justify">
          Durante el año, el Gobierno Escolar ha desempeñado un papel protagónico en la toma de decisiones, la organización de eventos y la promoción de una convivencia sana. Este proceso ha permitido a los estudiantes desarrollar competencias clave como el liderazgo integrador, la responsabilidad, la comunicación asertiva y el trabajo en equipo.
        </p>

        {/* Cita destacada tipo revista */}
        <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-amber-500 rounded-r-xl italic text-slate-700 dark:text-slate-300 shadow-sm text-justify">
          "El Gobierno Escolar 2026 de nuestra institución no solo forma líderes para el presente, sino ciudadanos íntegros para el futuro. Es un escenario donde se aprende a edificar una sociedad justa, solidaria, equitativa y participativa."
        </blockquote>

        <p className="text-justify">
          Nuestra comunidad educativa continúa creciendo y consolidándose, demostrando que cuando se lidera con el corazón y se construye con sabiduría, se transforma el mundo.
        </p>

        {/* Botón de regreso a Ciencia y Literatura */}
        <div className="flex justify-center mt-12 mb-6">
          <button
            onClick={() => navigate("/ciencia-literatura")}
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