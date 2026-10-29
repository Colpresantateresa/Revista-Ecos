import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GridCyT() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const articulosCulturaTecnologia = [
    {
      titulo: "La presencialidad educativa: un encuentro que forma para la vida",
      autor: "Hna. Mónica Andrea Díaz Rodríguez",
      categoria: "Pastoral / Educativa",
      img: "/images/ImaArti/Presencialidad.jpg",
      link: "/articulos/presencialidad",
    },
    {
      titulo: "Saint Valentine’s Day at School",
      autor: "English Department",
      categoria: "English / Culture",
      img: "/images/ImaArti/Sv01.jpg",
      link: "/articulos/valentine",
    },
    {
      titulo: "El trabajo, una oportunidad de construir sociedad",
      autor: "Maryen Delgado Otálora",
      categoria: "Coordinación Académica",
      img: "/images/ImaArti/DiaT.png",
      link: "/articulos/trabajo",
    },
    {
      titulo: "El Latido de la Tierra: La huella presencial es irremplazable",
      autor: "Equipo de Ciencias Naturales",
      categoria: "Ciencias Naturales",
      img: "/images/ImaArti/ArtiCien.jpeg",
      link: "/articulos/ciencias",
    },
    {
      titulo: "Día de la Convivencia Escolar",
      autor: "Adeida Serrano Manrique",
      categoria: "Convivencia Escolar",
      img: "/images/ImaArti/DIACE.JPG",
      link: "/articulos/convivencia-escolar",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200">
      
      {/* ENCABEZADO DE LA SECCIÓN */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 mb-3">
          Cultura y Tecnología
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Explorando el impacto de la era digital en nuestra identidad, los valores institucionales y el encuentro humano.
        </p>
      </div>

      {/* CUADRÍCULA ESTÉTICA PARA 5 ARTÍCULOS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6" data-aos="fade-up">
        {articulosCulturaTecnologia.map((art, i) => {
          // Lógica para distribuir de forma simétrica: Fila 1 (2 tarjetas grandes de 3 columnas) y Fila 2 (3 tarjetas de 2 columnas)
          // O viceversa. Aquí las primeras 2 ocupan 3 columnas c/u (lg:col-span-3), y las 3 últimas ocupan 2 columnas c/u (lg:col-span-2).
          const isFirstTwo = i < 2;
          const spanClass = isFirstTwo ? "lg:col-span-3" : "lg:col-span-2";

          return (
            <Link
              key={i}
              to={art.link}
              className={`flex flex-col justify-between bg-white dark:bg-slate-800 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-slate-100 dark:border-slate-700 group ${spanClass}`}
            >
              <div>
                {/* Imagen de la tarjeta */}
                <div className="w-full h-52 bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                  <img
                    src={art.img}
                    alt={art.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-5">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {art.categoria}
                  </span>
                  <h3 className="font-bold text-lg leading-snug text-slate-900 dark:text-slate-100 mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {art.titulo}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
                    Por: {art.autor}
                  </p>
                </div>
              </div>
              
              {/* Pie de tarjeta con enlace */}
              <div className="px-5 pb-5 pt-2 flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                <span>Leer artículo</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}