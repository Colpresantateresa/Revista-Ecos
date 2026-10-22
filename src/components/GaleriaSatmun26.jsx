import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GaleriaSatmun26() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Atajos de teclado para el Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  // Bloquear scroll de la página cuando el Lightbox está abierto
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
  }, [lightboxOpen]);

  // Listado explícito de imágenes basado en los archivos reales de la carpeta GalSat26
  const images = [
    "DSC_0072.JPG", "DSC_0128.JPG", "DSC_0139.JPG", "DSC_0149.JPG", 
    "DSC_0151.JPG", "DSC_0428.JPG", "DSC_0517.JPG", "IMG_9291.JPG", 
    "IMG_9292.JPG", "IMG_9295.JPG", "IMG_9296.JPG", "IMG_9301.JPG", 
    "IMG_9302.JPG", "IMG_9304.JPG", "IMG_9319.JPG", "IMG_9320.JPG", 
    "IMG_9321.JPG", "IMG_9328.JPG", "IMG_9332.JPG", "IMG_9333.JPG", 
    "IMG_9334.JPG", "IMG_9337.JPG", "IMG_9343.JPG", "IMG_9344.JPG", 
    "IMG_9347.JPG", "IMG_9349.JPG", "IMG_9360.JPG", "IMG_9371.JPG", 
    "IMG_9373.JPG", "IMG_9376.JPG", "IMG_9393.JPG", "IMG_9401.JPG", 
    "IMG_9425.JPG", "IMG_9484.JPG", "IMG_9493.JPG", "IMG_9512.JPG", 
    "IMG_9532.JPG", "IMG_9534.JPG", "IMG_9539.JPG", "IMG_9567.JPG", 
    "IMG_9580.JPG", "IMG_9638.JPG"
  ].map((filename) => `/images/GalSat26/${filename}`);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Lógica de precarga para transiciones instantáneas en el Lightbox
  const nextIdx = (currentIndex + 1) % images.length;
  const prevIdx = (currentIndex - 1 + images.length) % images.length;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabecera / Título Editorial */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-3 py-1 rounded-full">
            Memoria Institucional · SATMUN 2026
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 mb-3 text-slate-900 dark:text-slate-100 tracking-tight">
            Instantes de Transformación
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 italic max-w-xl mx-auto">
            Un recorrido visual por el liderazgo, el debate y la excelencia de nuestra comunidad.
          </p>
        </div>

        {/* Carrusel Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Keyboard, FreeMode]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          breakpoints={{ 
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 } 
          }}
          className="rounded-2xl pb-14"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div 
                className="overflow-hidden rounded-xl shadow-md hover:shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 cursor-pointer group transition-all duration-500" 
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={src} 
                  alt={`SATMUN 2026 - Foto ${index + 1}`} 
                  loading="lazy" 
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox Estilo Pantalla Completa */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md px-4" 
          onClick={closeLightbox}
        >
          {/* Precarga Invisible de imágenes adyacentes */}
          <link rel="preload" as="image" href={images[nextIdx]} />
          <link rel="preload" as="image" href={images[prevIdx]} />

          <div 
            className="relative flex items-center justify-center w-full h-full max-w-5xl max-h-[90vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button 
              onClick={closeLightbox} 
              aria-label="Cerrar galería"
              className="absolute top-4 right-4 z-30 text-white/70 hover:text-white text-3xl font-light bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center transition-all"
            >
              ✕
            </button>

            {/* Flecha Izquierda (Desktop) */}
            <button
              onClick={prevImage}
              aria-label="Imagen anterior"
              className="absolute left-2 sm:-left-6 md:-left-12 z-20 text-white/50 hover:text-white text-6xl md:text-7xl font-thin transition-all hover:scale-110 hidden sm:block drop-shadow-lg"
            >
              ‹
            </button>

            {/* Contenedor de la Imagen Principal */}
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-black flex items-center justify-center max-w-full max-h-[80vh]">
              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Vista ampliada ${currentIndex + 1}`}
                className="max-w-[90vw] max-h-[75vh] w-auto h-auto object-contain animate-in fade-in zoom-in-95 duration-300"
              />
            </div>

            {/* Flecha Derecha (Desktop) */}
            <button
              onClick={nextImage}
              aria-label="Siguiente imagen"
              className="absolute right-2 sm:-right-6 md:-right-12 z-20 text-white/50 hover:text-white text-6xl md:text-7xl font-thin transition-all hover:scale-110 hidden sm:block drop-shadow-lg"
            >
              ›
            </button>

            {/* Contador Inferior */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest uppercase font-semibold bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}