import React from "react";
import { Link } from "react-router-dom";

export default function MenuArticulo({ titulo = "Ciencia y Literatura", articulos = [] }) {
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
    <div className="max-w-5xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">
        {titulo}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {dataArticulos.map((art, i) => (
          <Link
            key={i}
            to={art.link}
            className="flex flex-col justify-between bg-white dark:bg-slate-800 shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-slate-100 dark:border-slate-700"
          >
            <div>
              <img
                src={art.img}
                alt={art.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                {art.categoria && (
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {art.categoria}
                  </span>
                )}
                <h3 className="font-semibold text-lg leading-snug text-slate-900 dark:text-slate-100 mt-2">
                  {art.titulo}
                </h3>
              </div>
            </div>
            
            <div className="px-5 pb-5 pt-2">
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-1 hover:underline">
                Leer artículo →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}