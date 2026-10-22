import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ArtCiencias() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100">
        El Latido de la Tierra: La huella presencial es irremplazable
      </h1>

      <div>
        <img
          src="/images/ImaArti/ArtiCien.jpeg"
          alt="Día de la Tierra"
          className="md:float-right md:ml-6 md:mb-4 w-full md:w-1/2 rounded-lg shadow"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />

        <p className="text-justify leading-relaxed mb-4">
          El 22 de abril no es solo una fecha en el calendario escolar; es un llamado global a la reconexión. En un mundo saturado de filtros digitales, la presencialidad se erige como el puente esencial para entender que la Tierra no es un concepto abstracto, sino un organismo vivo que exige ser sentido, caminado y protegido. Estar presentes físicamente nos permite sintonizar nuestros sentidos con el entorno, transformando la conmemoración en una experiencia visceral que ninguna pantalla puede replicar.
        </p>

        <p className="text-justify leading-relaxed mb-4 font-semibold">
          Desde la visión experta de nuestras áreas fundamentales, el Día de la Tierra cobra una dimensión integral:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-4 text-justify leading-relaxed pl-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">Ciencias y entorno:</strong> La observación directa de la biodiversidad y el análisis del territorio permiten comprender la fragilidad de los ecosistemas, asumiendo nuestra responsabilidad ética en la construcción de una ciudadanía ambiental activa.
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">Lenguaje y comunicación:</strong> El lenguaje se vuelve vivo a través del debate y la expresión poética sobre la naturaleza. Esto fomenta una comunicación empática y global sobre el cambio climático, intercambiando ideas tanto en nuestro mágico idioma como a través de la conectividad con una lengua extranjera.
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">Matemáticas aplicadas:</strong> El cálculo de la huella de carbono y el análisis de datos estadísticos sobre recursos hídricos cobran relevancia al aplicarse a la realidad tangible de nuestro entorno inmediato.
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">Expresión física y artística:</strong> Las actividades al aire libre nos recuerdan que nuestro cuerpo es parte de la naturaleza, fortaleciendo la conciencia corporal mediante el movimiento en espacios verdes. Asimismo, la creación artística con materiales orgánicos y la interpretación estética del paisaje permiten una conexión sensorial que estimula la sensibilidad ambiental.
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">Espiritualidad y valores:</strong> La reflexión sobre el cuidado de "la casa común" promueve valores de trascendencia, gratitud y custodia de la creación. Bajo el legado de Marie Poussepin, quien nos enseñó a ver la presencia de Dios en todas las manifestaciones y en el ejercicio de la caridad, asumimos el llamado a trabajar con "humildad y sencillez". Nos comprometemos de manera consciente, física y espiritual a la preservación de la vida en todas sus formas, como reflejo de la fe, el respeto y el amor hacia la inefable obra del Creador.
          </li>
        </ul>

        <p className="text-justify leading-relaxed mb-4">
          En conclusión, constatamos una vez más que estos espacios presenciales son, sin duda, una experiencia enriquecedora. Nos permiten situarnos, pensar, reflexionar, profundizar y llevar a la práctica actitudes y acciones que nos reconectan y mejoran la interacción humana. El aprendizaje obtenido en esta jornada no habría sido el mismo a través de una pantalla.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          El conocimiento digital es informativo, pero el aprendizaje presencial es transformativo. Una cámara no puede captar el aroma de la tierra húmeda, la textura de una hoja o la energía colectiva de una comunidad trabajando por un fin común. La presencialidad nos recuerda que somos parte del ecosistema, no solo espectadores. Al final del día, la Tierra no necesita más "likes", necesita manos dispuestas a trabajar y corazones capaces de conmoverse ante su majestuosidad.
        </p>

        <p className="text-right font-semibold mt-6">
          Autor: Equipo de Ciencias Naturales
        </p>
      </div>
    </div>
  );
}