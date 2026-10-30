import React from "react";
import Layout from "../layouts/Layout";
import Editorial from "../components/Editorial";
import NoticiasRecientes from "../components/Actulidad";
import ImageSlider from "../components/ImageSlider"; 



function Homepage() {
  return (
    <Layout>
      {/* Carrusel de imágenes */}
      <div className="pt-20">
        <ImageSlider />
      </div>

      {/* Sección editorial */}
      <Editorial />


      {/* Sección de noticias */}
      <NoticiasRecientes />
      
    </Layout>
  );
}

export default Homepage;


