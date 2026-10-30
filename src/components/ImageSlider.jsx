import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider() {
  const navigate = useNavigate();

  const slides = [
    {
      src: "/images/Recursos26/SatSlider.JPG",
      title: "SATMUN 2026",
      description: "Visita nuestra sección y conoce qué es SATMUN y su impacto en el liderazgo juvenil.",
      route: "/satmun",
    },
    {
      src: "/images/ImaArti/DLCP.jpg",
      title: "Del Cuaderno a la Pantalla",
      description: "Descubre cómo usar la Inteligencia Artificial para estudiar mejor y sin trampas.",
      route: "/articulos/del-cuaderno-a-la-pantalla",
    },
    {
      src: "/images/ImaArti/DIALM.JPG",
      title: "El Latido de la Palabra",
      description: "La Lengua Materna exige el encuentro y la expresión viva de nuestras raíces.",
      route: "/articulos/latido-palabra",
    },
    {
      src: "/images/ImaArti/DIACE.JPG",
      title: "Día de la Convivencia Escolar",
      description: "Un espacio fundamental para fortalecer la armonía, el respeto y la fraternidad.",
      route: "/articulos/convivencia-escolar",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => navigate(slide.route)}
              className="relative group cursor-pointer"
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Fondo animado con descripción */}
              <div
                className="absolute inset-0 flex flex-col justify-end 
                           bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                           dark:from-black/80 dark:via-black/50 transition-all duration-500 
                           group-hover:from-black/80 group-hover:via-black/60"
              >
                <div className="p-4 sm:p-6 text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  <h3 className="text-xl sm:text-2xl font-bold drop-shadow-md group-hover:text-teal-300">
                    {slide.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
