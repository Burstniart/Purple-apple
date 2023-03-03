# Purple apple
AKA Pink apple but better

## Backend

1- index.js
In the backend create the server app.

1- Appointment.js
models/Appointment.js
Define the structure for the database records.

1- appointment.js
routes/appointment.js
Define the routes to use your api, remember te API is pointing at url:port/api/appointment

1- database.js
Inside backend directory set the file to connect via mongoose to your database, since we now have the models, routes and server app.

After this the backend is bassically done, time to move to the frontend

## Frontend

1- webpack.config.js
Set the configuration for webpack, the main purpose is to bundle files when building the code and defining behavior if 'development' is active rather than 'production'.

~ Using dummies app.js and index.html in frontend/ directory 

- Add build command calling webpack in package.json
- Since the frontend will be updated at this point the --ignore flag for frontend can be set for the npm command "dev"
- Add webpack dev server command

Import the css inside the javascript, not in the html as a conventional case

1- AppointmentService.js
/services/appointmentService.js
Create the class to use the methods from your API in the frontend.

1- UI.js
Interface that consumes the services and uses them in app.js 

To handle form data after creating the Form Data Object:
- Use the .entries() method to retrieve the information (previous attempempt ussed append instead of creating the form with the element as argument).
- The service method for "POST" uses a header indicating json format
- The body element of the fetch request for POST applies JSON.stringify to the body of the request.


