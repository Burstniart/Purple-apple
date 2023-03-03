// Data Structure
const { Schema, model } = require('mongoose');

// Structure definition for our database
const AppointmentSchema = new Schema({
    name: {type: String, required: true},
    day: {type: String, required: true},
    creationDate: {type: Date, default: Date.now}
});

// Name and schema
module.exports = model('Appointment', AppointmentSchema);

