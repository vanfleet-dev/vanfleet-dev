const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/contact', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    if (res.statusCode === 200) {
        res.sendFile(__dirname + '/alerts/success.html');
    } else {
        res.sendFile(__dirname + '/alerts/failure.html');
    };
    fs.appendFile('./contact_form_log.txt', `
    name: ${name}, email: ${email}
    `, err => {
        if (err) {
            console.error(err);
        }
    });
});

app.post('/success', (req, res) => {
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Ready at port 3000');
});





// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.post('/', (req, res) => {
//     let name = req.body.name;
//     let email = req.body.email;
//     if (res.statusCode === 200) {
//         res.sendFile(__dirname + '/alerts/success.html');
//     } else {
//         res.sendFile(__dirname + '/alerts/failure.html');
//     };
//     fs.appendFile('./contact_form_log.txt', `
//     name: ${name}, email: ${email}
//     `, err => {
//         if (err) {
//             console.error(err);
//         }
//     });

// });

// app.post('/success', (req, res) => {
//     res.redirect('/');
//     //res.sendFile(__dirname + '/index.html');
// });

// app.listen(3000, () => {
//     console.log('Ready at port 3000');
// });