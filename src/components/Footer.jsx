import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="relative bg-blue-800 text-white dark:bg-gray-900 dark:text-slate-200 mt-12 transition-colors duration-500">

      {/* Abeja flotante */}
      <img
        src="/Abeja3.png"
        alt="volver al inicio"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-16 right-10 w-10 opacity-90 pointer-events-auto cursor-pointer select-none animate-eight
                   transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
      />

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 items-center gap-8">

        {/* IZQUIERDA — Redes + contacto con Fondo */}
        <div 
          className="relative flex flex-col items-start gap-2 p-6 rounded-2xl overflow-hidden bg-cover bg-center shadow-lg"
          style={{ backgroundImage: "url('/tu-imagen-de-fondo.jpg')" }} // <--- Cambia esto por tu ruta
        >
          {/* Capa oscura para legibilidad */}
          <div className="absolute inset-0 bg-black/50 -z-10"></div>

          <p className="text-sm font-semibold text-white">Síguenos</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/colegiolapresentacionsantateresacucuta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center 
                         hover:bg-white/40 transition backdrop-blur-sm"
            >
              <FacebookIcon fontSize="small" className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/colpre.santateresa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center 
                         hover:bg-white/40 transition backdrop-blur-sm"
            >
              <InstagramIcon fontSize="small" className="text-white" />
            </a>
            <a
              href="https://www.youtube.com/@colsantateresacucuta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center 
                         hover:bg-white/40 transition backdrop-blur-sm"
            >
              <YouTubeIcon fontSize="small" className="text-white" />
            </a>
          </div>

          {/* Dirección */}
          <div className="mt-3 text-xs leading-4 text-slate-100">
            <p className="text-sm font-semibold">Encuéntranos</p>
            <p>Avenida 2 # 17-51</p>
            <p>Barrio La Playa — Cúcuta</p>
          </div>
        </div>

        {/* CENTRO — Banner */}
        <div className="flex justify-center">
          <img
            src="/logo4.png"
            alt="Banner Colegio"
            className="w-80 filter dark:brightness-90 transition duration-500"
          />
        </div>

        {/* DERECHA — Espacio vacío (ajustado para responsive) */}
        <div className="hidden md:block"></div>
      </div>

      <div className="text-center py-4 text-xs text-slate-300 dark:text-slate-500 border-t border-white/10 dark:border-slate-700">
        © {new Date().getFullYear()} Área de Comunicaciones · Colegio Presentación Santa Teresa Cúcuta
      </div>
    </footer>
  );
}

export default Footer;