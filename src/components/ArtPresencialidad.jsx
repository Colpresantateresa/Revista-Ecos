import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ArtPresencialidad() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-5xl font-black mb-4 text-center text-slate-900 dark:text-slate-100 leading-tight">
        La presencialidad educativa: un encuentro que forma para la vida
      </h1>

      {/* AUTORÍA Y CRÉDITOS */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
        Por <span className="text-slate-800 dark:text-slate-200 font-semibold">Hna. Mónica Andrea Díaz Rodríguez</span> – <span className="italic">Equipo de Pastoral</span>
      </div>

      {/* IMAGEN DE APERTURA (BANNER EDITORIAL) */}
      <div className="mb-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <img
          src="/images/ImaArti/Presencialidad.jpg" 
          alt="La presencialidad educativa y el encuentro humano"
          className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg"
        />
        <p className="text-center text-xs italic text-slate-500 mt-2">
          El valor insustituible de la cercanía, el diálogo y la convivencia en el aula.
        </p>
      </div>

      {/* CUERPO DEL ARTÍCULO CON FORMATO EDITORIAL */}
      <div className="space-y-6 text-lg leading-relaxed">
        
        {/* Bajada / Introducción destacada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-indigo-600 pl-4 py-1">
          La revolución digital del aprendizaje representa una transformación profunda, pero plantea grandes desafíos frente al valor esencial de la presencialidad.
        </p>

        <p className="text-justify">
          La revolución digital del aprendizaje ha abierto nuevas posibilidades para acceder al conocimiento de manera libre, inmediata y global. Hoy, gracias a las plataformas digitales, miles de personas pueden aprender desde cualquier lugar y en cualquier momento. Sin embargo, este avance también plantea grandes desafíos para la educación contemporánea. Mientras algunas instituciones y empresas impulsan modelos de formación completamente virtuales, otros sectores educativos continuamos defendiendo la importancia de la presencialidad como un espacio esencial para el desarrollo integral de los niños y jóvenes.
        </p>

        <p className="text-justify">
          La educación presencial no solo transmite conocimientos académicos; también favorece la construcción de habilidades blandas fundamentales para la vida, como la empatía, la tolerancia, la escucha, el trabajo en equipo y la capacidad de resolver conflictos. Actualmente, muchos educadores advierten que una de las grandes dificultades de las nuevas generaciones es la poca tolerancia a la frustración y la dificultad para gestionar adecuadamente sus emociones. A esto se suma el uso excesivo de las pantallas, que en muchos casos se convierte en una dependencia que limita la interacción humana, reduce la capacidad de socialización y afecta la alegría espontánea del encuentro con los otros.
        </p>

        <div className="pt-4">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-600 rounded-sm"></span>
            Un segundo hogar de convivencia real
          </h2>
          <p className="text-justify mb-4">
            La presencialidad educativa ofrece la posibilidad de vivir experiencias reales de convivencia y crecimiento personal. Llegar diariamente a la escuela significa entrar en un espacio acogedor que, poco a poco, se transforma en un segundo hogar donde se aprenden hábitos, rutinas, responsabilidades y formas de relacionarse sanamente con quienes nos rodean. Además, el aula se convierte en un escenario privilegiado donde el estudiante fortalece su dimensión espiritual, aprende a autorregular sus emociones y desarrolla valores que marcarán profundamente su vida.
          </p>
        </div>

        <p className="text-justify">
          Existen momentos sencillos, pero profundamente significativos, que solo la experiencia presencial puede ofrecer: compartir la lonchera, conversar durante el descanso, jugar con los compañeros, aprender a esperar el turno, pedir perdón y celebrar juntos los logros cotidianos. Estas vivencias fortalecen la identidad, la autoestima y el sentido de pertenencia, aspectos esenciales para el desarrollo humano.
        </p>

        <p className="text-justify">
          En este contexto, la educación inclusiva adquiere un papel fundamental. La presencialidad permite acoger la diversidad dentro del aula y comprender que cada niño aprende de manera distinta. Convivir con compañeros diferentes en sus capacidades, ritmos y formas de pensar enriquece el aprendizaje colectivo y enseña a valorar la diferencia como una oportunidad para crecer en humanidad. La escuela presencial es, además, un espacio privilegiado para la construcción de una sociedad más fraterna y solidaria.
        </p>

        {/* Cita destacada tipo revista */}
        <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-indigo-500 rounded-r-xl italic text-slate-700 dark:text-slate-300 shadow-sm">
          "La educación no es solo llenar una vasija, sino encender un fuego. Y ese fuego solo se enciende en el encuentro vivo de corazón a corazón."
          <span className="block mt-2 text-sm font-semibold not-italic text-slate-500">— Papa Francisco</span>
        </blockquote>

        <p className="text-justify">
          Aunque la tecnología continúe siendo una herramienta valiosa e indispensable en la educación, jamás reemplazará el encuentro humano. La cercanía del maestro, el acompañamiento afectivo, el diálogo espontáneo y la convivencia son esenciales para potenciar la formación de personas con capacidad de amar, servir y convivir en un mundo necesitado de humanidad.
        </p>

        <p className="text-right font-semibold mt-8 text-base">
          Autor: Hna. Mónica Andrea Díaz Rodríguez <br />
          <span className="text-sm font-normal text-slate-500">Equipo de Pastoral</span>
        </p>
      </div>
    </article>
  );
}