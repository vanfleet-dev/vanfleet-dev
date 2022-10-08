const express = require('express');
const bodyParser = require('body-parser'); // body parser allows elements on the site to be accessed. it is installed like express and the other npm modules.
const app = express();
app.use(bodyParser.urlencoded({extended: true})); // urlencoded is specifically for form data. body parser can output other formats. https://www.npmjs.com/package/body-parser
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => { 

    let num1 = Number(req.body.num1); // body parser is used to make the elements on the site with input dats avilable with 'body.num1' num1 being the name assigned to the element being accessed. 
    let num2 = Number(req.body.num2); // the Number() is being used to make the input format a number. It is default a string.

    let result = num1 + num2;

    res.send(`result: ${result}`);
});


app.listen(port, () => {
  console.log(`Ready at port ${port}`);
});
