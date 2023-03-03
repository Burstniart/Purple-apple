// User ".env" file
require('dotenv').config();

// Express package to create server
const express = require('express');
// Console monitoring tool
const morgan = require('morgan');
// Tool to work with local paths
const path = require('path');
// Cross origin resource sharing module
const cors = require("cors");
// Module to work with Mongo DB
const mongoose = require('mongoose');
// Handle mongoose warning
mongoose.set('strictQuery', true);

// Main app
const app = express();

// Point to your database file, which uses mongoose to connect to your DB
require('./database')


// Settings
// Use .env file to acces local values or assign a default port
app.set('port', process.env.PORT || 3000);

//Middlewares

// Enable cors
app.use(cors());
// Set morgan monitoring to dev
app.use(morgan('dev'));

// Enable the use of form data from the frontend as a json
app.use(express.urlencoded({extended: false}));
// Use frontend as a json
app.use(express.json()); 
 

// Routes
// Main use to point at API
app.use('/api/appointment', require('./routes/appointment'));

// Static files
// Display the frontend
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
