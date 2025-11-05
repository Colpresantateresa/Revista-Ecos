import React from "react";
import Layout from "../layouts/Layout";
import GaleriaSatmun from "../components/GaleriaSatmun";
import ArticuloSatmunDescripcion from "../components/Satmun1";
import BienvenidaSatmun from "../components/SatmunBien";

export default function Satmun() {
  return (
    <Layout>
      <BienvenidaSatmun />
      <ArticuloSatmunDescripcion />
      <GaleriaSatmun />
    </Layout>
  );
}
