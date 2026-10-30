import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FestivalYAloeArteSecciones() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden pb-10 font-montserrat">
      
      {/* SECCIÓN 1: EL FESTIVAL DE LA ABEJA DORADA */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Texto principal */}
        <div data-aos="fade-right">
          <span className="uppercase tracking-widest text-xs font-bold text-[#058688] dark:text-teal-400">
            Cultura y Talento · Edición 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white mt-2">
            El XI Festival de la Canción{" "}
            <span className="text-[#058688] dark:text-teal-400">
              La Abeja Dorada
            </span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-justify leading-relaxed text-sm md:text-base">
            El XI Festival de la Canción La Abeja Dorada 2026, desarrollado bajo el lema <strong>"Décadas que Siguen Vivas"</strong>, se consolidó en el Colegio de la Presentación Santa Teresa como un espacio excepcional para el reconocimiento, la promoción y la expresión de las habilidades artísticas de los estudiantes. A través de un recorrido musical por épocas inolvidables, el evento conectó generaciones y fomentó la apreciación cultural mediante un proceso de preparación detallado y progresivo. Desde la selección del repertorio hasta los ensayos y ensambles musicales, cada etapa fortaleció en los alumnos valores fundamentales como la disciplina, la responsabilidad, el seguimiento de instrucciones y el trabajo en equipo. Asimismo, la incorporación de un concurso abierto a participantes externos enriqueció la experiencia, promoviendo la sana competencia y la integración comunitaria. El éxito rotundo de esta edición reafirma el compromiso de la institución con una formación integral donde el arte trasciende el aula, visibilizando el esfuerzo, la dedicación y la creatividad de toda la comunidad educativa.
          </p>
        </div>

        {/* Imagen principal con luces decorativas */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-white dark:border-slate-700 transition-colors relative"
          data-aos="fade-left"
        >
          <img
            src="/images/ImaArti/Abedor.jpg"
            alt="Festival La Abeja Dorada 2026"
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#058688]/20 blur-3xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-300/30 blur-3xl"></div>
        </div>
      </div>

      {/* SECCIÓN 2: EL SALÓN DE ARTE (Diseño invertido) */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Imagen principal (izquierda en esta sección) */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-white dark:border-slate-700 transition-colors relative order-2 md:order-1"
          data-aos="fade-right"
        >
          <img
            src="/images/ImaArti/SalArt.jpg"
            alt="Salón de Arte Abeja Dorada 2026"
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#058688]/20 blur-3xl"></div>
        </div>

        {/* Texto principal (derecha en esta sección) */}
        <div data-aos="fade-left" className="order-1 md:order-2">
          <span className="uppercase tracking-widest text-xs font-bold text-[#058688] dark:text-teal-400">
            Expresión Visual · VIII Edición
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white mt-2">
            El Salón de Arte{" "}
            <span className="text-[#058688] dark:text-teal-400">
              Abeja Dorada 2026
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-justify leading-relaxed text-sm md:text-base">
            El Salón de Arte en su VIII Edición Abeja Dorada 2026 se consolida como uno de los espacios culturales más importantes para visibilizar el talento, la creatividad y la expresión de los estudiantes. Este evento reúne las obras participantes de jóvenes creadores de distintas instituciones educativas de la ciudad, ofreciendo una vitrina para compartir los resultados de sus procesos formativos. A través de este salón se reconocen las propuestas visuales, el esfuerzo y la dedicación de los participantes, fomentando además el intercambio de experiencias significativas entre las comunidades educativas y celebrando el arte como un valioso medio de comunicación personal.
          </p>
        </div>
      </div>

    </section>
  );
}

export default FestivalYAloeArteSecciones;

