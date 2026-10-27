import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ArtLiteratura() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-slate-900 dark:text-slate-100 leading-tight">
        Tragedia en el bosque
      </h1>
      <div className="mb-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <img
          src="/images/ImaArti/Artlite.jpeg"
          alt="Tragedia en el bosque"
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
        />
      </div>

      <div>
        <p className="text-justify leading-relaxed mb-4">
          El 20 de noviembre de 2008, una pandilla de tres niños y una niña quería aventurarse en el bosque que quedaba cerca de la ciudad donde vivían, porque se rumoreaba que allá estaba una joya de incalculable valor. Sus padres les habían advertido que no fueran porque podría ser algo muy peligroso, pero los niños no obedecieron, y en un momento planeado, distrajeron a sus padres y los cuatro se encontraron en el parque principal.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Miguel, el más alto y el más insensato del grupo, contó: <br />
          <em>−Por el camino al bosque hay un tractor, podríamos llevarlo para facilitar nuestro transporte por el bosque.</em>
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Andrés, el más inteligente y escurridizo del grupo, añadió: <br />
          <em>−Sí, pero hay un problema, el tractor está dañado. No podemos utilizarlo, lo revisé la semana pasada.</em>
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Diana, la más impaciente, solo susurró algo parecido a “¿cuándo iniciamos?” en voz muy bajita. Nadie la escuchó, y Michael, el más bajo, hablador y preguntón de todos, expresó: <br />
          <em>−¿Y entonces qué haremos?</em>
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Mientras los otros tres cavilaban y discutían, Andrés imaginaba una idea muy peligrosa que se le había ocurrido. <em>“¿Y si nos llevamos la camioneta de mi papá y nos vamos al bosque para buscar la joya?”</em>.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Después de presentarles la idea a los otros tres, la aceptaron, y echaron a andar. Al tomar la camioneta, se fijaron en que ninguno sabía conducir. Así que Michael se ofreció. Todos estuvieron de acuerdo, pero cometieron un gran error.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Al prender el motor, Michael, como era tan bajito, no alcanzó el freno, y el auto arrancó con tal velocidad que el niño soltó el volante. El carro perdió el control y se empezó a mover por todos lados, asustando tanto a los niños como a los vecinos. Al final, lograron llegar al territorio del bosque, pero los niños no podían frenar el carro de sus movimientos mareantes. 
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Durante dos minutos y medio estuvieron en un mareo tal que Michael no podía cachar el volante, hasta que, con un esfuerzo sobrehumano, logró mantenerse en el camino. Después de celebrar, un árbol apareció de la nada delante de ellos. Y como Michael no alcanzó el freno, impactaron en el árbol con fuerza. Todos sufrieron heridas, aunque no tan graves.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Diana retrocedió y cambió de opinión sobre ir a buscar la joya. Después de haberse herido el codo, decidió que no valía la pena, y aunque todos le rogaron que no se fuera, no les hizo caso; decisión sabia y afortunada.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Diana llegó al pueblo media hora después e inmediatamente avisó a los padres de los niños para hacer la búsqueda. La policía les ayudó. Buscaron por todas partes y hasta en cuevas, pero no los encontraron. Mientras realizaban la búsqueda, el papá de Andrés cayó al suelo; pues en la angustia no se fijó de su camino y tropezó con algo. 
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Al alzar la mirada, observó que era nada más y nada menos que la joya valiosa, el motivo de la búsqueda inicial de los niños. ¡Bueno!, habían encontrado ya la joya, pero a los niños no los habían hallado aún.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          A la hora nona, encontraron por fin a los niños; pero en condiciones de urgente asistencia. Michael estaba tendido en el suelo, ensangrentado, con heridas provocadas por un carnívoro. Andrés estaba notablemente enfermo, había comido bayas venenosas, y estaba con dolor intenso de cabeza y de estómago. El que se hallaba en peor estado era Miguel, que estaba sin vida en un árbol. Su sangre se escurría lentamente hasta caer al suelo. Nadie sabía que había pasado; pero sus padres al ver esta escena no pudieron contener sus lágrimas y su gran tristeza los llevó a la depresión. Por la situación vivida los padres de Miguel, les costó mucho la superación de la pérdida de su hijo. Lo que les impidió retomar su vida normal y como consecuencia no volvieron al trabajo por el resto del año. Diana fue asediada por periodistas, quienes le rogaban detalles concretos porque el acontecimiento fue catalogado como el más peligroso a nivel mundial por todo el año 2026.
        </p>

        <p className="text-right font-semibold mt-6">
          Autor: Esteban Alejandro Ordoñez Lopez <br />
          <span className="text-sm font-normal text-slate-600 dark:text-slate-400">Sexto A</span>
        </p>

        {/* Botón de regreso a Ciencia y Literatura */}
        <div className="flex justify-center mt-12 mb-6">
          <button
            onClick={() => navigate("/ciencia-literatura")}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg shadow transition duration-200"
          >
            <img src="/images/Recursos26/flechaB.png" alt="Volver" className="w-6 h-6" />
            <span className="font-medium"></span>
          </button>
        </div>
      </div>
    </div>
  );
}