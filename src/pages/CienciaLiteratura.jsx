import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import MenuArticulo from "../components/MenuArticulo";

export default function CienciaLiteratura() {
  const navigate = useNavigate();

  return (
    <Layout>
      <MenuArticulo />

      <div className="flex justify-center my-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img src="/images/Recursos26/flechaB.png" alt="Volver al inicio" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div> 
    </Layout>
  );
}

