import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import ArtCiencias from "../components/ArtCiencias";
import ArtLiteratura from "../components/ArtLiteratura";

export default function CienciaLiteratura() {
  const navigate = useNavigate();

  return (
    <Layout>
      
      <ArtCiencias />
      <ArtLiteratura />

      
      <div className="flex justify-center my-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img src="/images/Volver.png" alt="Volver" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div>
    </Layout>
  );
}

