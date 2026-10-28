import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtAcosoEscolar() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-5xl font-black mb-3 text-center text-slate-900 dark:text-slate-100 leading-tight">
        El acoso escolar, un llamado a la fraternidad
      </h1>

      {/* INSTITUCIÓN Y AUTORÍA */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-10">
        Colegio de La Presentación Santa Teresa – Cúcuta <br />
        Por: <span className="text-slate-800 dark:text-slate-200 font-semibold">Jailer Andrey Cardenas Parra</span> <br />
        <span className="italic text-slate-400">Líder de área Ética y Valores y Lengua Castellana</span>
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
            src="/images/ImaArti/DNUL.jpg"
            alt="Conmemoración contra el acoso escolar y lazos de fraternidad"
            className="w-full h-auto object-contain"
          />
          <p className="p-2 text-center text-xs italic text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80">
            Conciencia y prevención frente al acoso escolar y ciberacoso.
          </p>
        </div>

        {/* Bajada / Introducción destacada y justificada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-indigo-600 pl-4 py-1 text-justify">
          El 2 de mayo conmemoramos las luchas que se han librado desde los salones de clase contra el acoso escolar, reconociendo que la fortaleza de los niños y jóvenes nace del acompañamiento en el hogar y de la convivencia sana en la escuela.
        </p>

        <p className="text-justify">
          Esta fecha fue promovida por asociaciones de padres, colectivos juveniles y diversas organizaciones no gubernamentales con el propósito de concienciar sobre los riesgos que el bullying o acoso escolar representa para la vida y la salud mental de los estudiantes. En este contexto, resulta fundamental destacar el papel de los padres de familia, docentes, psicólogos y directivos, quienes trabajan diariamente por el desarrollo integral y el bienestar emocional de nuestros niños, niñas y adolescentes.
        </p>

        <p className="text-justify">
          La conmemoración adopta como símbolo el lazo morado, emblema de la lucha contra el acoso escolar. Asimismo, la UNESCO reconoce una efeméride similar denominada Día Internacional contra la Violencia y el Acoso Escolar, incluido el Ciberacoso, cuya toma de conciencia se lleva a cabo el primer jueves de noviembre. Ambas fechas convergen en un mismo propósito: hacer un llamado urgente a toda la comunidad educativa para reconocer que esta problemática continúa siendo una realidad latente que afecta profundamente la vida de miles de estudiantes.
        </p>

        <p className="text-justify">
          Las cifras reflejan la gravedad de la situación. Según la UNESCO, uno de cada tres estudiantes (33 %) sufre algún tipo de acoso escolar al menos una vez al mes. Además, el fenómeno ya no se limita únicamente al espacio físico del colegio, sino que se extiende a los entornos virtuales a través del ciberacoso, traspasando fronteras y horarios escolares. Esto nos invita a reflexionar sobre la manera en que asumimos y enfrentamos esta problemática desde todos los ámbitos de la sociedad.
        </p>

        <p className="text-justify">
          En Colombia, distintos estudios señalan que siete de cada diez niños están expuestos a algún tipo de acoso en el entorno escolar. De hecho, el país ocupa uno de los primeros lugares entre 30 naciones con mayores índices de matoneo escolar, según datos de la organización Bullying Sin Fronteras.
        </p>

        <p className="text-justify">
          Las consecuencias de este flagelo pueden ser devastadoras. El bullying y el ciberbullying están relacionados con más de 200.000 fallecimientos al año en el mundo, ya sea por homicidio o por inducción al suicidio. Estas cifras evidencian la necesidad urgente de fortalecer la educación emocional, la convivencia escolar y las redes de apoyo que protejan la vida y la dignidad de los estudiantes.
        </p>

        {/* Limpiador de flotado para que el resto del contenido baje ordenadamente */}
        <div className="clear-both"></div>

        <p className="text-justify">
          Por ello, hoy nos resulta indispensable reflexionar sobre la importancia de estar verdaderamente presentes en la vida de nuestros hijos. La distancia física y, en muchas ocasiones, también emocional, ha generado barreras que dificultan comprender las realidades que viven los niños y jóvenes dentro y fuera de la escuela. Muchos de ellos encuentran dificultades para expresar sus emociones o compartir las situaciones que enfrentan con quienes deberían convertirse en sus principales protectores. En consecuencia, buscan refugio en amigos, espacios externos o incluso en las familias de sus compañeros.
        </p>

        <p className="text-justify">
          En este sentido, el valor de la presencia cobra un profundo sentido humano. Estar presentes não significa únicamente compartir un mismo espacio físico, sino también escuchar, acompañar, dialogar y construir vínculos reales desde la empatía. La escuela y la familia deben convertirse en escenarios seguros donde cada estudiante pueda sentirse visto, escuchado y valorado. Participar activamente en sus espacios cotidianos nos permite fortalecer las redes de apoyo y demostrarles que no están solos, especialmente en aquellos momentos en los que más necesitan orientación, comprensión y afecto.
        </p>

        {/* Cita destacada tipo revista */}
        <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-indigo-500 rounded-r-xl italic text-slate-700 dark:text-slate-300 shadow-sm text-justify">
          "La tarea del educador moderno no es talar selvas, sino regar desiertos." <br />
          <span className="font-semibold not-italic block mt-2">— C.S. Lewis</span>
        </blockquote>

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