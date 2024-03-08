import "../styles/doctorcard.css";
import React, { useState } from "react";

const PrescriptionCard = ({ ele }) => {
  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        {/* <img
          src={
            ele?.userId?.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="profile"
        /> */}
      </div>
      <h3 className="card-name">Prescription</h3>
      <p className="specialization">
        <strong>Patient: </strong>
        {ele?.patient_email}
      </p>
      <p className="specialization">
        <strong>Doctor: </strong>
        {ele?.doctor_email}
      </p>
      <p className="specialization">
        <strong>Mecicines: </strong>
        {ele?.medicines}
      </p>
    </div>
  );
};

export default PrescriptionCard;
