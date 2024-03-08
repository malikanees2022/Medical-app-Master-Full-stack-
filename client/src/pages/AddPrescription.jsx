import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const AddPrescription = () => {
  const navigate = useNavigate();
  // const [formDetails, setFormDetails] = useState({
  //   specialization: "",
  //   experience: "",
  //   fees: "",
  // });

  // const inputChange = (e) => {
  //   const { name, value } = e.target;
  //   return setFormDetails({
  //     ...formDetails,
  //     [name]: value,
  //   });
  // };

  const [doctor_email, setDoctorEmail] = useState("");
  const [patient_email, setPatientEmail] = useState("");
  const [medicines, setMedicines] = useState("");

  const btnClick = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        axios.post(
          "/doctor/addprescription",
          {
            doctor_email,
            patient_email,
            medicines,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Prescription added successfully",
          error: "Unable to add prescription",
          loading: "Sending prescription application...",
        }
      );

      navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Navbar />
      <section
        className="register-section flex-center apply-doctor"
        id="contact"
      >
        <div className="register-container flex-center contact">
          <h2 className="form-heading">Add Prescription</h2>
          <form className="register-form ">
            <input
              type="text"
              name="doctor_email"
              className="form-input"
              placeholder="Enter Patient email"
              onChange={(e) => setPatientEmail(e.target.value)}
            ></input>
            <input
              type="text"
              name="patient_email"
              className="form-input"
              placeholder="Enter Your email"
              onChange={(e) => setDoctorEmail(e.target.value)}
            ></input>
            <input
              type="text"
              name="medicines"
              className="form-input"
              placeholder="Enter Medicines"
              onChange={(e) => setMedicines(e.target.value)}
            />
            <button type="submit" className="btn form-btn" onClick={btnClick}>
              apply
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddPrescription;
