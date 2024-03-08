import "../styles/doctorcard.css";
import React, { useState } from "react";

const PharmacyCard = ({ ele }) => {
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
      <h3 className="card-name">Pharmacies</h3>
      <p className="specialization">
        <strong>Pharmacy Name: </strong>
        Pharmacy 1
      </p>
      <p className="specialization">
        <strong>Location: </strong>
        Latifabad
      </p>
      <p className="specialization">
        <strong>Available: </strong>
        Yes
      </p>
    </div>
  );
};

export default PharmacyCard;
