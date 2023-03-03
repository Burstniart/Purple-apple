const mongoose = require('mongoose');

// Connect to or create the database

mongoose.connect(process.env.MONGODB_URI, {
    // Error handling in mongoose thing
    useNewUrlParser: true
})
// Capturue the event
    .then(db => console.log('DB connected'))
// Handle error
    .catch(err => console.error(err));
