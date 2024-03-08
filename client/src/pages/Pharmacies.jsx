import React, { useEffect, useState } from "react";
import PharmacyCard from "../components/PharmacyCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import Empty from "../components/Empty";

const Pharmacies = () => {
  return (
    <>
      <Navbar />
      <section className="container doctors">
        <h2 className="page-heading">Prescriptions</h2>
        <div className="doctors-card-container">
          <PharmacyCard />;
        </div>

        <Empty />
      </section>
      <Footer />
    </>
  );
};

export default Pharmacies;
