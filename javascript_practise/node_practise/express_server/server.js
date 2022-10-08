// Setup steps: 
// Make a new folder

// Change Directory to this new folder

// Inside the folder, create a new file 

// run the following:
// npm init
// npm install express

// Require express in .js file

// Setup express

// Create routes

// server on port 3000 with app.listen

// Run server with nodemon



const express = require('express');  // require express
const app = express(); // setup
const port = 3000; // setup

app.get('/', (req, res) => { // '/' === root , the location in the directory is refered to at the 'route', /mysite/contacts is also a route. this example uses root as the route.  
  res.send('Hello World! :)');
});

app.get('/about', (req, res) => { // req = request , res = response. request is the server requesting. response is the server responding. 
    res.send('a very brief bio.');
});

app.get('/contact', (req, res) => { 
    res.send('lintfarmer@myspace.com');
});

app.listen(port, () => {
  console.log(`Ready at port ${port}`);
});

