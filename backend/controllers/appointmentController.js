// controllers/appointmentController.js
const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json({ message: "Appointment created successfully", appointment: newAppointment });
    } catch (error) {
        res.status(500).json({ message: "Failed to create appointment", error });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve appointments", error });
    }
};

exports.updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAppointment) return res.status(404).json({ message: "Appointment not found" });
        res.status(200).json({ message: "Appointment updated successfully", appointment: updatedAppointment });
    } catch (error) {
        res.status(500).json({ message: "Failed to update appointment", error });
    }
};

exports.deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        await Appointment.findByIdAndDelete(id);
        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete appointment", error });
    }
};
