import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import GridCyT from "../components/GridCyT.jsx";

export default function CulturaTecnologia() {
  const navigate = useNavigate();

  return (
    <Layout>
      <GridCyT />
      <div className="flex justify-center my-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg shadow transition cursor-pointer"
        >
          <img src="/images/Recursos26/flechaB.png" alt="Volver" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div> 
    </Layout>
  );
}