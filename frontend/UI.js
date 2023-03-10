import AppointmentService from './services/AppointmentService'
import { format } from 'timeago.js';
const appointmentService = new AppointmentService();

class UI {
    // Get appointments when the page loads
    async renderAppointments() {
	const appointments = await appointmentService.getAppointment();
	appointments.forEach(appoint => {
	    console.log(appoint)
	})
	//return appointments;
    }

    async addAppoint(formData) {
	await appointmentService.postAppoint(formData);
	this.clearAppointForm();
    }

    clearAppointForm() {
	document.getElementById("myForm").style.display = "none";
	document.getElementById("appoint-form").reset();
    }
}

export default UI;
