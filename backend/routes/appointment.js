// Define project routes

const { Router } = require('express');
const router = Router();
const path = require('path');

// Add access to data model
const Appointment = require('../models/Appointment.js');

// Base route to GET records as res.json in the form of plain text
router.get('/', async (req,res ) => {
    const appointments = await Appointment.find();
    res.json(appointments);
});

router.post('/', async (req, res) => {
    const { name, day } = req.body;
    const newAppointment = new Appointment({name, day});
    console.log(newAppointment);
    await newAppointment.save();
    res.json({message: 'The apple has fallen in the basket!'});
});

// Delete method, uses :id as in the mongodb "_id" to delete records
router.delete('/:id', async (req, res) => {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    console.log(appointment);
    res.json({message: "Bad apple... don't taste the poison..."});
});

// Route for API
module.exports = router;
