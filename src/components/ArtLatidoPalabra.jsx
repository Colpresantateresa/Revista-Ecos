import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtLatidoPalabra() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-5xl font-black mb-4 text-center text-slate-900 dark:text-slate-100 leading-tight">
        El Latido de la Palabra: la Lengua Materna exige el Encuentro
      </h1>

      {/* AUTORÍA Y CRÉDITOS */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
        Por <span className="text-slate-800 dark:text-slate-200 font-semibold">Equipo Editorial</span>
      </div>

      {/* IMAGEN DE APERTURA (BANNER EDITORIAL) */}
      <div className="mb-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <img
          src="/images/ImaArti/DIALM.JPG"
          alt="El Latido de la Palabra y la Lengua Materna"
          className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg"
        />
        <p className="text-center text-xs italic text-slate-500 mt-2">
          La cartografía de nuestros afectos a través del lenguaje y el encuentro humano.
        </p>
      </div>

      {/* CUERPO DEL ARTÍCULO CON FORMATO EDITORIAL */}
      <div className="space-y-6 text-lg leading-relaxed">
        
        {/* Bajada / Introducción destacada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-blue-600 pl-4 py-1">
          La lengua materna es mucho más que el primer idioma que aprendemos; es la cartografía de nuestros afectos.
        </p>

        <p className="text-justify">
          Aquellas primeras palabras que logramos pronunciar en los albores de la vida, como "mamá" y "papá", no son simples sonidos, sino los "gateos" de una identidad que se construye a través del aprendizaje y el vínculo.
        </p>

        <p className="text-justify">
          Históricamente, el término "lengua materna" rinde homenaje a la madre como la figura primordial de cuidado y la fuente principal de adquisición del lenguaje. Es en ese refugio donde comprendemos que el idioma es un lazo emocional. En cualquier latitud, el primer acercamiento a la palabra —a través de términos tan esenciales como "agua" y "bebé"— constituye el cimiento de nuestra existencia.
        </p>

        <p className="text-justify">
          Este proceso nos revela una verdad profunda: el desarrollo lingüístico temprano no ocurre en el vacío, sino que se nutre de la cercanía y el contacto con quienes nos rodean. La lengua no se limita a la gramática; el idioma también es el tono, el silencio compartido y esa intención que solo se percibe en el encuentro cuerpo a cuerpo. Es en la presencialidad donde la comunicación se vuelve verdaderamente humana.
        </p>

        <p className="text-justify">
          Hoy, en un mundo globalizado que a menudo padece de una "anemia de cercanía", es imperativo rescatar el calor humano y la empatía como motores del lenguaje. Estos elementos permiten que la lengua materna no sea solo un recuerdo, sino una herramienta de comunicación asertiva que crece con nuestras experiencias.
        </p>

        {/* Cita destacada tipo revista */}
        <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-blue-500 rounded-r-xl italic text-slate-700 dark:text-slate-300 shadow-sm">
          "Mantener viva la lengua del núcleo familiar es evitar que se olvide o se pierda la memoria de nuestras raíces. El idioma no es un frío conjunto de símbolos o códigos; es el recipiente de culturas, creencias y saberes ancestrales que debemos proteger del olvido."
        </blockquote>

        <p className="text-justify">
          Conocer nuestro origen nos permite entender de dónde venimos para decidir, con claridad, hacia dónde queremos caminar. Por ello, al celebrar el Día Internacional de la Lengua Materna, la invitación es a volver al encuentro: a las conversaciones vitales en familia, al relato de anécdotas que enriquecen el alma y al sostenimiento de nuestra herencia cultural.
        </p>

        <p className="text-justify font-medium text-slate-900 dark:text-slate-100 bg-blue-50 dark:bg-blue-950/40 p-4 rounded-xl border border-blue-100 dark:border-blue-900">
          En síntesis, nos queda una reflexión para llevar al hogar: Desde tu propio núcleo familiar, ¿qué estás haciendo hoy para rescatar la lengua materna?
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