import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MenuArticulo({ titulo = "Ciencia y Literatura", articulos = [] }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const defaultArticulos = [
    {
      titulo: "El 23 de abril: un tributo a la palabra y al legado literario",
      categoria: "Literatura",
      img: "/images/ImaArti/DiaI.jpg",
      link: "/articulos/lengua",
    },
    {
      titulo: "El acoso escolar, un llamado a la fraternidad",
      categoria: "Ética y Valores",
      img: "/images/ImaArti/DNUL.jpg",
      link: "/articulos/acoso-escolar",
    },
    {
      titulo: "Gobierno Escolar: una experiencia de liderazgo con corazón",
      categoria: "Ciencias Sociales",
      img: "/images/ImaArti/GEPC.JPG",
      link: "/articulos/gobierno-escolar",
    },
    {
      titulo: "El Latido de la Palabra: la Lengua Materna exige el Encuentro",
      categoria: "Lengua Materna",
      img: "/images/ImaArti/DIALM.JPG",
      link: "/articulos/latido-palabra",
    },
  ];

  const dataArticulos = articulos.length > 0 ? articulos : defaultArticulos;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200">
      
      {/* ENCABEZADO DE LA SECCIÓN */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 mb-3">
          {titulo}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Un espacio dedicado al pensamiento crítico, la riqueza de nuestra lengua y los valores que forman integralmente a nuestra comunidad.
        </p>
      </div>

      {/* CUADRÍCULA ESTÉTICA DE ARTÍCULOS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2" data-aos="fade-up">
        {dataArticulos.map((art, i) => (
          <Link
            key={i}
            to={art.link}
            className="flex flex-col justify-between bg-white dark:bg-slate-800 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-slate-100 dark:border-slate-700 group"
          >
            <div>
              {/* Imagen de la tarjeta con efecto zoom al pasar el cursor */}
              <div className="w-full h-56 bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                <img
                  src={art.img}
                  alt={art.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                {art.categoria && (
                  <span className="text-xs font-bold text-[#058688] uppercase tracking-wider">
                    {art.categoria}
                  </span>
                )}
                <h3 className="font-bold text-xl leading-snug text-slate-900 dark:text-slate-100 mt-2 group-hover:text-[#058688] transition-colors">
                  {art.titulo}
                </h3>
              </div>
            </div>
            
            {/* Pie de tarjeta con enlace estilizado */}
            <div className="px-6 pb-6 pt-2 flex items-center text-[#058688] font-semibold text-sm">
              <span>Leer artículo</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}