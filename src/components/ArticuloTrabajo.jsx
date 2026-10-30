import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArticuloTrabajo() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO GRANDE DE ENCABEZADO DIRECTO */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-slate-900 dark:text-slate-100 leading-tight">
        El trabajo, una oportunidad de construir sociedad
      </h1>

      <div>
        {/* PRIMER BLOQUE DE TEXTO */}
        <p className="text-justify leading-relaxed mb-4">
          Cada año, el Día del Trabajador se convierte en una oportunidad para reflexionar sobre el papel fundamental que cumple el trabajo en nuestras vidas y en la construcción de la sociedad. Más allá de ser una actividad destinada a obtener ingresos, el trabajo es una herramienta de dignificación humana, desarrollo personal y transformación social. En cada esfuerzo cotidiano, desde las labores más visibles hasta aquellas que pasan desapercibidas, se encuentra el motor que impulsa el progreso colectivo.
        </p>

        {/* IMAGEN FLOTANTE INTEGRADA A MEDIA ALTURA (Rompe la repetición) */}
        <div className="my-6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img
            src="/images/ImaArti/DiaT.png"
            alt="El trabajo, una oportunidad de construir sociedad"
            className="md:float-right md:ml-6 md:mb-4 w-full md:w-1/2 rounded-lg shadow-md object-cover h-64 sm:h-72"
          />
        </div>

        <p className="text-justify leading-relaxed mb-4">
          Desde tiempos antiguos, las comunidades han dependido del esfuerzo colectivo para sobrevivir y progresar. Agricultores, artesanos, maestros, médicos, abogados, ingenieros y trabajadores de todos los oficios y profesiones han contribuido, cada uno desde su rol, a edificar sociedades más organizadas y sostenibles. El trabajo no solo permite satisfacer necesidades básicas, sino que también impulsa la innovación, la creatividad y el avance tecnológico. En este sentido, el trabajo promueve significativamente el desarrollo, mientras que el compromiso social en el ámbito laboral genera justicia, equidad y sentido de pertenencia.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          En la actualidad, el trabajo sigue siendo un pilar esencial para el desarrollo económico de los países. A través de él se generan bienes y servicios que sostienen los mercados y permiten el crecimiento de las naciones. Sin embargo, su importancia va más allá de lo económico: también tiene un profundo impacto social, pues fomenta valores como la responsabilidad, la disciplina, el compromiso y la solidaridad. Estos principios fortalecen el tejido social y consolidan las bases para una convivencia armónica y duradera.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Para los jóvenes, comprender el valor del trabajo es fundamental. Prepararse para el futuro favorece la comprensión de que cada esfuerzo, por pequeño que parezca, contribuye a un propósito mayor. Las tareas escolares, el trabajo en equipo y la participación en proyectos son formas básicas para empezar a construir una ética de trabajo sólida desde temprana edad. Así, el trabajo deja de ser visto como una simple obligación y se transforma en una oportunidad para crecer.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Un aspecto clave dentro del mundo laboral es el papel de la mujer. La historia nos recuerda que las mujeres han desempeñado un rol esencial en la construcción de la sociedad, muchas veces sin el reconocimiento que merecen. Desde las labores en el hogar hasta su participación en la educación, la salud, la política y la economía, su aporte ha sido indispensable. Hoy en día, es indispensable destacar que las mujeres continúan luchando por la igualdad de oportunidades, la equidad salarial y la plena valoración de su trabajo en todos los ámbitos.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Por lo tanto, el reconocimiento del trabajo femenino es un acto de justicia y una condición necesaria para el desarrollo integral de la sociedad. Cuando las mujeres tienen acceso a oportunidades laborales dignas, se fortalece la economía, se mejora la calidad de vida de las familias y se promueve una sociedad más justa y equitativa. De igual manera, resulta fundamental valorar y visibilizar su aporte, así como promover espacios donde puedan desarrollarse y ejercer plenamente sus capacidades.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          En este contexto, resulta inspirador recordar las enseñanzas de Marie Poussepin (fundadora de la Congregación de las Hermanas de la Caridad Dominicas de la Presentación de la Santísima Virgen), quien dedicó su vida a servir a los demás a través del trabajo y la educación. Ella promovía una visión del trabajo concebido como servicio, entendiendo que cada labor debía realizarse con responsabilidad, amor, cuidado y compromiso, sin distinción alguna. Para ella, el trabajo no era solo una actividad productiva, sino una forma de contribuir al bienestar de la comunidad y de encarnar los valores humanos y espirituales.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Sus enseñanzas resaltan la importancia de trabajar con dignidad y de reconocer el valor de cada persona en la sociedad, especialmente de aquellos que históricamente han sido invisibilizados. Su legado invita a construir una cultura del trabajo basada en el respeto, la solidaridad y la justicia, principios que siguen siendo plenamente vigentes.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Asimismo, es importante reconocer que los distintos tipos de trabajo suelen ser valorados de maneras desiguales, lo cual plantea retos significativos. La inequidad laboral, las condiciones injustas y la falta de oportunidades continúan siendo problemáticas que requieren atención urgente. En este sentido, el Día del Trabajador es también un llamado a promover el respeto, la equidad y la dignidad en todos los entornos laborales.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          El trabajo, cuando se realiza en condiciones justas y con propósito, tiene el poder de transformar vidas. Permite a las personas alcanzar sus metas, contribuir al bienestar de sus familias y participar activamente en la comunidad. Además, fortalece la identidad y el sentido de pertenencia, haciendo que cada individuo se sienta útil y reconocido tanto en su ser como en su hacer.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          En conclusión, el trabajo es mucho más que una obligación: es una grandiosa oportunidad para la construcción de una sociedad justa, solidaria y próspera. Celebrar este día es reconocer el esfuerzo de millones de personas que, día a día, aportan con su labor al desarrollo del mundo. Es, en definitiva, una invitación a reflexionar sobre el tipo de sociedad que queremos construir: una donde el trabajo sea siempre sinónimo de dignidad, respeto y oportunidades para todos.
        </p>

        <p className="text-right font-semibold mt-6">
          Autor: Maryen Delgado Otálora <br />
          <span className="text-sm font-normal text-slate-600 dark:text-slate-400">Coordinadora académica</span>
        </p>
      </div>

      {/* Botón de volver */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img src="/images/Recursos26/flechaB.png" alt="Volver" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div>
    </div>
  );
}


