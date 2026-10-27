import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Homepage from "./pages/Homepage";
import CienciaLiteratura from "./pages/CienciaLiteratura";
import CulturaTecnologia from "./pages/CulturaTecnologia";
import Entretenimiento from "./pages/Entretenimiento";
import Infantil from "./pages/Infantil";
import Satmun from "./pages/Satmun";
import Zapping from "./pages/Zapping";

// Importación de los artículos de Ciencia y Literatura
import ArtLengua from "./components/ArtLengua";
import ArtCiencias from "./components/ArtCiencias";
import ArtLibroPasado from "./components/ArtLibroPasado";
import ArtLiteratura from "./components/ArtLiteratura"; // Componente existente para la Tragedia en el Bosque

// Otros artículos y vistas
import ArticuloCometas from "./components/Articulo4";
import ArticuloEaster from "./components/Articulo5";
import OrgulloPresentacion from "./components/EstudiatesDest";
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
        {/* Páginas principales */}
        <Route path="/" element={<Homepage />} />
        <Route path="/ciencia-literatura" element={<CienciaLiteratura />} />
        <Route path="/cultura-tecnologia" element={<CulturaTecnologia />} />
        <Route path="/entretenimiento" element={<Entretenimiento />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/satmun" element={<Satmun />} />
        <Route path="/zapping" element={<Zapping />} />

        {/* Rutas de los 4 artículos de Ciencia y Literatura */}
        <Route
          path="/articulos/lengua"
          element={
            <Layout>
              <ArtLengua />
            </Layout>
          }
        />
        <Route
          path="/articulos/ciencias"
          element={
            <Layout>
              <ArtCiencias />
            </Layout>
          }
        />
        <Route
          path="/articulos/libro-pasado"
          element={
            <Layout>
              <ArtLibroPasado />
            </Layout>
          }
        />
        <Route
          path="/articulos/arllite"
          element={
            <Layout>
              <ArtLiteratura />
            </Layout>
          }
        />

        {/* Otros Artículos */}
        <Route
          path="/entretenimiento/cometas"
          element={
            <Layout>
              <ArticuloCometas />
            </Layout>
          }
        />
        <Route
          path="/entretenimiento/easter"
          element={
            <Layout>
              <ArticuloEaster />
            </Layout>
          }
        />

        {/* Orgullo Presentación */}
        <Route
          path="/orgullo-presentacion"
          element={
            <Layout>
              <OrgulloPresentacion />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}
