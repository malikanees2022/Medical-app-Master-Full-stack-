const Prescription = require("../models/prescriptions");
const User = require("../models/userModel");

const addPrescription = async (req, res, next) => {
  try {
    const { patient_email, doctor_email, medicines } = req.body;
    if (!patient_email || !doctor_email || !medicines) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide the valid inputs" });
    }
    const doctor_id = await User.findOne({ email: doctor_email });
    const patient_id = await User.findOne({ email: patient_email });
    if (!doctor_id || !patient_id) {
      return res.status(404).json({
        success: false,
        message: "Either doctor or patient email is incorrect",
      });
    }
    const prescription = await Prescription.create({
      doctorId: doctor_id,
      userId: patient_id,
      medicines: medicines,
    });
    return res.status(200).json({
      success: true,
      message: "Your prescription has been created successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Server error occurred" });
  }
};

const getAllPrescriptions = async (req, res, next) => {
  try {
    const prescriptions = await Prescription.find({});
    let prescrionts_array = [];
    if (prescriptions) {
      for (let i = 0; i < prescriptions.length; i++) {
        let patient = await User.findById(prescriptions[i].userId);
        let doctor = await User.findById(prescriptions[i].doctorId);
        prescrionts_array.push({
          _id: prescriptions[i]._id,
          patient_email: patient.email,
          doctor_email: doctor.email,
          medicines: prescriptions[i].medicines,
        });
      }
    }
    return res.status(200).json({ success: true, message: prescrionts_array });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Server error occurred" });
  }
};

module.exports = { addPrescription, getAllPrescriptions };
