import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtLengua() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-5xl font-black mb-4 text-center text-slate-900 dark:text-slate-100 leading-tight">
        El 23 de abril: un tributo a la palabra y al legado literario
      </h1>

      {/* AUTORÍA Y CRÉDITOS (Sin la línea divisoria) */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
        Por <span className="text-slate-800 dark:text-slate-200 font-semibold">Equipo de Lengua Castellana</span>
      </div>

      {/* IMAGEN DE APERTURA (BANNER EDITORIAL) */}
      <div className="mb-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <img
          src="/images/ImaArti/DiaI.jpg"
          alt="Día del Idioma y del Libro"
          className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg"
        />
        <p className="text-center text-xs italic text-slate-500 mt-2">
          El flujo mágico de las letras y el idioma conectando el mundo hispanohablante.
        </p>
      </div>

      {/* CUERPO DEL ARTÍCULO CON FORMATO EDITORIAL */}
      <div className="space-y-6 text-lg leading-relaxed">
        
        {/* Bajada / Introducción destacada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-blue-600 pl-4 py-1">
          El 23 de abril no es una fecha cualquiera en el calendario; es el día en que la historia, la literatura y la identidad se abrazan profundamente.
        </p>

        <p className="text-justify">
          Esta conmemoración tiene un origen fascinante que se remonta a 1926, naciendo como un homenaje a los pilares de la literatura universal que, en una coincidencia casi poética, comparten esta fecha en el registro de sus vidas o fallecimientos: Miguel de Cervantes, William Shakespeare y el Inca Garcilaso de la Vega.
        </p>

        <p className="text-justify">
          Lo que comenzó como un tributo a estos grandes autores se transformó, por decisión de la UNESCO años después, en un hito de alcance global: el Día Mundial del Libro y del Derecho de Autor, al cual se sumó además el reconocimiento oficial al Día del Idioma Español.
        </p>

        <p className="text-justify">
          Es importante recordar que esta celebración le debe mucho al escritor valenciano Vicente Clavel Andrés, quien en 1923 impulsó ante la Cámara Oficial del Libro de Barcelona la propuesta de crear una fiesta literaria. Aunque el rey Alfonso XIII aprobó inicialmente el 7 de octubre de 1926 para este festejo, la fuerza de la tradición y la relevancia histórica de los autores mencionados hicieron que, en 1930, se instaurara definitivamente el 23 de abril como la fecha oficial que hoy conmemoramos.
        </p>

        {/* SECCIÓN INTERMEDIA CON ESTILO EDITORIAL */}
        <div className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
            El español: una lengua que respira
          </h2>

          <p className="text-justify mb-4">
            Más allá de los libros, hoy celebramos nuestra lengua materna. El español no es una pieza de museo estática; es un organismo vivo cuyo origen es una fascinante amalgama de influencias antiguas y modernas en constante transformación. Su extraordinaria adaptabilidad se sostiene en la voz de más de 500 millones de hablantes que lo actualizan día a día.
          </p>
        </div>

        {/* Cita destacada tipo revista */}
        <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-blue-500 rounded-r-xl italic text-slate-700 dark:text-slate-300 shadow-sm">
          "En un mundo tan fragmentado y globalizado como el del siglo XXI, la función principal de nuestro idioma es unir. Si en el español 'todo cabe', significa que es un espacio de verdadera inclusión."
        </blockquote>

        <p className="text-justify">
          A esto se suma la riqueza de sus matices regionales, donde cada rincón del mundo hispanohablante aporta un color único al vocabulario, enriqueciendo este patrimonio común sin perder jamás la unidad que nos define. Nuestra lengua ha cruzado océanos y fronteras para conectar personas, acortar distancias y permitirnos pensar juntos el futuro.
        </p>

        <p className="text-justify">
          Celebrar el Día del Libro y del Idioma es, en última instancia, celebrar nuestra capacidad de entendernos y de seguir escribiendo, entre todos, una historia que no tiene final.
        </p>

        <p className="text-right font-semibold mt-8 text-base">
          Autor: Equipo de Lengua Castellana
        </p>
      </div>
    </article>
  );
}