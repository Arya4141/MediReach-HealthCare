const Patient = require("../models/Patient");
const { createError } = require("../utils/error");

//REGISTER PATIENT
module.exports.newregister = async (req, res, next) => {
    const patient = await Patient.findOne({ phoneNo: req.body.phoneNo });
    if (!patient) {
      try {
        const newPatient = await Patient(req.body);
        console.log("RHVtgbtgbtgbtg");
        const savedPatient = await newPatient.save();
        return res.status(201).json(savedPatient);
      } catch (err) {
        return next(err);
      }
    } else {
      return res.status(200).json(patient);
    }
  };