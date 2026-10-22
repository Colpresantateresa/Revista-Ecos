import React from "react";
import Layout from "../layouts/Layout";
import ArtPresencialidad from "../components/ArtPresencialidad";

export default function CulturaTecnologia() {
  return (
    <Layout>
      <ArtPresencialidad />
      <div className="flex justify-center my-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img src="/images/Recursos26/flechaB.png" alt="Volver" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div> 
    </Layout>
  );
}
