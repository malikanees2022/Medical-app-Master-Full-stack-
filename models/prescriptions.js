const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  doctorId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  medicines: {
    type: String,
    required: true,
  },
});

const Prescription = mongoose.model("Prescription", schema);

module.exports = Prescription;
