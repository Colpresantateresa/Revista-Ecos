import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtDelCuadernoALaPantalla() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300 font-montserrat">
      
      {/* TÍTULO PRINCIPAL DE LA REVISTA */}
      <h1 className="text-3xl sm:text-4xl font-black mb-4 text-center text-slate-900 dark:text-slate-100 leading-tight">
        Del Cuaderno a la Pantalla: Cómo Usar la Inteligencia Artificial para Estudiar Mejor (y sin Trampas)
      </h1>

      {/* AUTORÍA Y CRÉDITOS */}
      <div className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
        Proyecto de grado: <span className="italic">La inteligencia Artificial y su impacto en el aprendizaje en sexto y séptimo.</span> <br />
        <span className="font-semibold text-slate-800 dark:text-slate-200">Colegio de La Presentación Santa Teresa - Cúcuta</span>
      </div>

      {/* IMAGEN DE APERTURA (BANNER EDITORIAL) */}
      <div className="mb-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <img
          src="/images/ImaArti/DLCP.JPG" 
          alt="Del Cuaderno a la Pantalla - Inteligencia Artificial y Estudiantes"
          className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
        />
        <p className="text-center text-xs italic text-slate-500 mt-2">
          La tecnología como aliada del pensamiento crítico y el aprendizaje autónomo.
        </p>
      </div>

      {/* CUERPO DEL ARTÍCULO CON FORMATO EDITORIAL */}
      <div className="space-y-6 text-lg leading-relaxed">
        
        {/* Bajada / Introducción destacada */}
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic border-l-4 border-[#058688] pl-4 py-1">
          ¿Alguna vez te has quedado mirando un libro de texto sin entender ni una sola palabra, deseando tener a un profesor al lado a las ocho de la noche?
        </p>

        <p className="text-justify">
          Durante años, la respuesta a ese dilema era resignarse o pedirle ayuda a un compañero. Sin embargo, hoy en día una nueva revolución tecnológica está transformando las aulas de clase y la manera en que aprendemos: la inteligencia artificial.
        </p>

        <p className="text-justify">
          A través de nuestro proyecto de grado, investigamos cómo la IA impacta a los estudiantes de sexto y séptimo grado. Descubrimos que la IA no está aquí para hacer los deberes por ti, sino para convertirse en tu tutor personal: alguien con paciencia infinita que te explica paso a paso, responde a tus dudas, crea juegos de repaso y te ayuda a estudiar para ese examen difícil.
        </p>

        <p className="text-justify font-medium text-slate-700 dark:text-slate-300">
          Para sacarle el máximo provecho, preparamos esta guía narrativa con las mejores herramientas que transformarán tu rutina escolar.
        </p>

        {/* SECCIÓN KIT DIGITAL */}
        <div className="pt-4 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b pb-2 border-slate-200 dark:border-slate-800">
            <span className="w-2 h-6 bg-[#058688] rounded-sm"></span>
            El Kit Digital del Estudiante del Futuro
          </h2>

          <div className="space-y-4 text-base">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-2 border-[#058688]">
              <h3 className="font-bold text-lg text-[#058688] dark:text-teal-400">1. NotebookLM: El guardián de tus apuntes</h3>
              <p className="mt-1 text-justify">
                Imagínate tener un asistente virtual que solo responde con la información que tú le das. Eso es NotebookLM (<a href="https://notebooklm.google.com" target="_blank" rel="noreferrer" className="underline text-[#058688]">notebooklm.google.com</a>). A diferencia de otros chats, aquí subes tus propios archivos PDF, notas de clase, diapositivas o enlaces de YouTube para generar trivias, exámenes de ensayo o guiones de podcasts.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-2 border-[#058688]">
              <h3 className="font-bold text-lg text-[#058688] dark:text-teal-400">2. Quizlet: Tarjetas de estudio con superpoderes</h3>
              <p className="mt-1 text-justify">
                Si te cuesta memorizar conceptos clave, Quizlet (<a href="https://quizlet.com/es" target="_blank" rel="noreferrer" className="underline text-[#058688]">quizlet.com/es</a>) es el aliado perfecto. Incorpora IA capaz de leer tus apuntes o PDF para generar automáticamente tarjetas de estudio (flashcards) y exámenes de práctica instantáneos.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-2 border-[#058688]">
              <h3 className="font-bold text-lg text-[#058688] dark:text-teal-400">3. SciSpace: El detective científico</h3>
              <p className="mt-1 text-justify">
                Cuando necesitas investigar y enfrentarte a documentos científicos, SciSpace (<a href="https://scispace.com" target="_blank" rel="noreferrer" className="underline text-[#058688]">scispace.com</a>) te ayuda a buscar artículos por tema, analizar archivos PDF, generar citas con normas APA y verificar contenidos con su detector de IA.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-2 border-[#058688]">
              <h3 className="font-bold text-lg text-[#058688] dark:text-teal-400">4. Perplexity: El buscador que te explica todo</h3>
              <p className="mt-1 text-justify">
                A diferencia de un buscador tradicional, Perplexity (<a href="https://perplexity.ai" target="_blank" rel="noreferrer" className="underline text-[#058688]">perplexity.ai</a>) te da una respuesta sintetizada con citas exactas de fuentes originales y cuenta con su modo <span className="italic">Aprende paso a paso</span> para comprender temas complejos.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-2 border-[#058688]">
              <h3 className="font-bold text-lg text-[#058688] dark:text-teal-400">5. Explainpaper: Traductor de textos difíciles</h3>
              <p className="mt-1 text-justify">
                ¿Una lectura llena de palabras técnicas? Explainpaper (<a href="https://explainpaper.com" target="_blank" rel="noreferrer" className="underline text-[#058688]">explainpaper.com</a>) te permite subir el PDF, seleccionar el párrafo confuso y obtener una explicación sencilla en segundos.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-2 border-[#058688]">
              <h3 className="font-bold text-lg text-[#058688] dark:text-teal-400">6. Slides.ai: Diapositivas sin dolor de cabeza</h3>
              <p className="mt-1 text-justify">
                Con Slides.ai (<a href="https://slidesai.io" target="_blank" rel="noreferrer" className="underline text-[#058688]">slidesai.io</a>), solo ingresas tus notas o el tema de exposición y la IA estructura las diapositivas con colores y organización visual en segundos para que te enfoques en la oratoria.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-2 border-[#058688]">
              <h3 className="font-bold text-lg text-[#058688] dark:text-teal-400">7. Knowt: Tu centro de mando académico</h3>
              <p className="mt-1 text-justify">
                Knowt (<a href="https://knowt.com" target="_blank" rel="noreferrer" className="underline text-[#058688]">knowt.com</a>) permite organizar apuntes en guías de estudio, resumir lecturas y videos de YouTube, y diseñar juegos interactivos de preguntas y respuestas.
              </p>
            </div>
          </div>
        </div>

        {/* SECCIÓN EL ARTE DEL PROMPT */}
        <div className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#058688] rounded-sm"></span>
            El Arte del Prompt: Cómo Hablarle a la IA para Aprender de Verdad
          </h2>
          <p className="text-justify mb-4">
            Si usas inteligencias generales como ChatGPT, Claude o Gemini, recuerda que la calidad de la respuesta depende de la calidad de tu pregunta o prompt. Si le pides a la IA: <span className="italic">“Hazme este taller”</span>, no aprenderás nada. En cambio, si le pides que actúe como un tutor socrático, te formulará preguntas guía.
          </p>

          {/* Bloque destacado del prompt socrático */}
          <div className="my-6 p-6 bg-[#058688]/10 border-l-4 border-[#058688] rounded-r-xl shadow-sm">
            <h4 className="font-bold text-[#058688] dark:text-teal-400 mb-2">Ejemplo recomendado: El Tutor Socrático</h4>
            <p className="italic text-slate-700 dark:text-slate-300">
              "Actúa como un tutor para un estudiante de [Escribe tu edad/grado]. Ayúdame a entender el siguiente problema o tema, pero NO me des la respuesta final ni hagas el trabajo por mí. Mi tema o ejercicio es: [Escribe tu tema]"
            </p>
            <span className="block mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
              Resultado: Te orientará paso a paso con una pregunta a la vez hasta que halles la solución por ti mismo.
            </span>
          </div>
        </div>

        <p className="text-justify">
          La inteligencia artificial viene a potenciar tu mente. Utilizada con responsabilidad, curiosidad y creatividad, es la herramienta más poderosa para perderle el miedo a las materias difíciles, desarrollar el pensamiento crítico y aprender a tu propio ritmo.
        </p>

        {/* Llamado a la acción */}
        <div className="text-center p-4 bg-slate-100 dark:bg-slate-800 rounded-xl my-6">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            ¿Estamos usando la tecnología para conectarnos de verdad y aprender mejor? ¡Pónlo en práctica hoy!
          </p>
        </div>

        <p className="text-right font-semibold mt-8 text-base">
          Isabella Arias Leal y Eileen Catalina Callejas Flores <br />
          <span className="text-sm font-normal text-slate-500">Grado 11ºA</span>
        </p>
      </div>      
    </article>
  );
}