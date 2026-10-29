import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// ==========================================
// IMPORTACIÓN DE PÁGINAS PRINCIPALES
// ==========================================
import Homepage from "./pages/Homepage";
import CienciaLiteratura from "./pages/CienciaLiteratura";
import CulturaTecnologia from "./pages/CulturaTecnologia";
import Entretenimiento from "./pages/Entretenimiento";
import Infantil from "./pages/Infantil";
import Satmun from "./pages/Satmun";
import Zapping from "./pages/Zapping";

// ==========================================
// IMPORTACIÓN DE ARTÍCULOS: CIENCIA Y LITERATURA
// ==========================================
import ArtLengua from "./components/ArtLengua";
import ArtAcosoEscolar from "./components/ArtAcosoEscolar";
import ArtLibroPasado from "./components/ArtLibroPasado";
import ArtLatidoPalabra from "./components/ArtLatidoPalabra";
import ArtGobiernoEscolar from "./components/ArtGobiernoEscolar";

// ==========================================
// IMPORTACIÓN DE ARTÍCULOS: CULTURA Y TECNOLOGÍA
// ==========================================
import ArtPresencialidad from "./components/ArtPresencialidad";
import ArtValentine from "./components/ArtValentine";
import ArticuloTrabajo from "./components/ArticuloTrabajo";
import ArtCiencias from "./components/ArtCiencias";
import ArtConvivenciaEscolar from "./components/ArtConvivenciaEscolar";

// ==========================================
// IMPORTACIÓN DE OTROS ARTÍCULOS Y VISTAS
// ==========================================
import OrgulloPresentacion from "./components/EstudiatesDest";

// ==========================================
// LAYOUT Y LIBRERÍAS GLOBALES
// ==========================================
import Layout from "./layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-gray-200 transition-colors duration-300">
      <ScrollToTop />

      <Routes>
        {/* =========================================================
            1. PÁGINAS PRINCIPALES DE NAVEGACIÓN
           ========================================================= */}
        <Route path="/" element={<Homepage />} />
        <Route path="/ciencia-literatura" element={<CienciaLiteratura />} />
        <Route path="/cultura-tecnologia" element={<CulturaTecnologia />} />
        <Route path="/entretenimiento" element={<Entretenimiento />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/satmun" element={<Satmun />} />
        <Route path="/zapping" element={<Zapping />} />

        {/* =========================================================
            2. ARTÍCULOS DE LA SECCIÓN: CIENCIA Y LITERATURA
           ========================================================= */}
        <Route
          path="/articulos/acoso-escolar"
          element={<Layout><ArtAcosoEscolar /></Layout>}
        />
        <Route
          path="/articulos/lengua"
          element={<Layout><ArtLengua /></Layout>}
        />
        <Route
          path="/articulos/gobierno-escolar"
          element={<Layout><ArtGobiernoEscolar /></Layout>}
        />
        <Route
          path="/articulos/latido-palabra"
          element={<Layout><ArtLatidoPalabra /></Layout>}
        />
        <Route
          path="/articulos/libro-pasado"
          element={<Layout><ArtLibroPasado /></Layout>}
        />

        {/* =========================================================
            3. ARTÍCULOS DE LA SECCIÓN: CULTURA Y TECNOLOGÍA
           ========================================================= */}
        <Route
          path="/articulos/presencialidad"
          element={<Layout><ArtPresencialidad /></Layout>}
        />
        <Route
          path="/articulos/valentine"
          element={<Layout><ArtValentine /></Layout>}
        />
        <Route
          path="/articulos/trabajo"
          element={<Layout><ArticuloTrabajo /></Layout>}
        />
        <Route
          path="/articulos/ciencias"
          element={<Layout><ArtCiencias /></Layout>}
        />
        <Route
          path="/articulos/convivencia-escolar"
          element={<Layout><ArtConvivenciaEscolar /></Layout>}
        />

        {/* =========================================================
            4. VISTAS INSTITUCIONALES / OTRAS
           ========================================================= */}
        <Route
          path="/orgullo-presentacion"
          element={<Layout><OrgulloPresentacion /></Layout>}
        />
      </Routes>
    </div>
  );
}
