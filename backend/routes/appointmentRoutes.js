// routes/appointmentRoutes.js
const express = require("express");
const { createAppointment, getAppointments, updateAppointment, deleteAppointment } = require("../controllers/appointmentController");
const router = express.Router();

router.post("/", createAppointment); // Endpoint to create an appointment
router.get("/", getAppointments); // Endpoint to get all appointments
router.put("/:id", updateAppointment); // Endpoint to update an appointment
router.delete("/:id", deleteAppointment); // Endpoint to delete an appointment

module.exports = router;
