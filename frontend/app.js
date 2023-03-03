console.log("Big titty goth gf!")

import './styles/app.css';
import UI from './UI.js';

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    ui.renderAppointments();
});

// Submit event to database via form
const appForm = document.getElementById("appoint-form");

appForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;

    // Create from object
    const formData = new FormData(appForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    
    const ui = new UI();
    ui.addAppoint(data);
    
})
