import React from "react";
import Layout from "../layouts/Layout";
import BienvenidaSatmun from "../components/SatmunBien";
import Gatsat26 from "../components/Gatsat26";
import GaleriaSatmun26 from "../components/GaleriaSatmun26";

export default function Satmun() {
  return (
    <Layout>
      <BienvenidaSatmun />
      <Gatsat26 />
      <GaleriaSatmun26 />
      
    </Layout>
  );
}