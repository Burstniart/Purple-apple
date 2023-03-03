// Create a class
class AppointmentService {

    constructor() {
	// API route
	this.URI = '/api/appointment';
	//this.URI = '/api/books';
    }
    
    // CRUD Methods for the API
    async getAppointment() {
	// Get petition by default
	const res = await fetch(this.URI);
	const appointments = await res.json();
	return appointments;
    }

    async postAppoint(appoint) {
	
	const res = await fetch(this.URI, {
	    method: "POST",
	    headers: {
		'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(appoint)
	}); 
	const data = await res.json();
	console.log(data); // return the api response message AKA "Aye Aye Captain" or something like that
   
    }
}
export default AppointmentService;
