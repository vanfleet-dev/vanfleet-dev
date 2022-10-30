// https://github.com/chrisccerami/mars-photo-api

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=sxGzbagD91y0XKdRDFNCOrwk8oZogDeRA1CIkIVH
// // returns current photos from all cameras

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=sxGzbagD91y0XKdRDFNCOrwk8oZogDeRA1CIkIVH&camera=FHAZ
// // returns most current photos from a specific camera

// https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=sxGzbagD91y0XKdRDFNCOrwk8oZogDeRA1CIkIVH
// // returns a manifest of all activity from a specific rover


const express = require('express');
const http = require('https');
const bodyParser = require('body-parser'); 

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

});

app.post('/', function(req, res){ //when root of website is accessed this is "posted" (the response) to the client.

    const apiKey = 'sxGzbagD91y0XKdRDFNCOrwk8oZogDeRA1CIkIVH';
    const camera = req.body.cameraInput; // the request comes from a form in the html. in this case what camera type the user input into the form. 
    const sol = 10;
    const earthDate = '2012-08-06';

    const urlImages = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&camera=${camera}&sol=${sol}`; // api url with concat for endpoints.

    http.get(urlImages, function(response) { // this function parses the api response as a json, then saves and displays data from the json in the client. 
        let images = ''
        response.on('data', data => { // '.on' w/ 'data' and the '.on' w/ 'end' below are used like async to give the API host server time to send the full API response. 
            images += data;
        });
        response.on('end', () => {
            const roverImages = JSON.parse(images) // parse api
            let sol = roverImages.photos[0].sol;
            let earthDate = roverImages.photos[0].earth_date;
            let image0 = roverImages.photos[0].img_src;
            let image1 = roverImages.photos[1].img_src;
            let image2 = roverImages.photos[2].img_src;
            res.write(`<p>Mission Day: ${sol}, Earth Date: ${earthDate}</p>`); // write concat html to be displayed to the client
            res.write(`<img src='${image0}'/><img src='${image1}'/><img src='${image2}'/>`);
            res.send(); // only send once in post. 
        });
    });

});

app.listen(3000, function() {
console.log('READY ON PORT: 3000');
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////


    //const urlManifest = `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${apiKey}`;
    //const urlImages = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&camera=${camera}&earth_date=${earthDate}`;

    // http.get(urlManifest, function(response) {
    //     let manifestString = ''
    //     response.on('data', data => {
    //         manifestString += data;
    //     });
    //     response.on('end', () => {
    //         const manifest = JSON.parse(manifestString);
    //         let maxSol = manifest.photo_manifest.max_sol;
    //         res.write(`<p>total mission days: ${maxSol}</p>`);
    //         res.send();
    //         console.log(maxSol);
    //     });
    // });


    // http.get(urlImages, function(response) {
    //     let images = ''
    //     response.on('data', data => {
    //         images += data;
    //     });
    //     response.on('end', () => {
    //         const roverImages = JSON.parse(images)
    //         let sol = roverImages.photos[0].sol;
    //         let earthDate = roverImages.photos[0].earth_date;
    //         let image0 = roverImages.photos[0].img_src;
    //         let image1 = roverImages.photos[1].img_src;
    //         let image2 = roverImages.photos[2].img_src;
    //         res.write(`<p>Mission Day: ${sol}, Earth Date: ${earthDate}</p>`); //test
    //         res.write(`<img src='${image0}'/><img src='${image1}'/><img src='${image2}'/>`);
    //         res.send();
    //     });
    // });

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&camera=${camera}&earth_date=${earthDate}`;

// http.get(url, function(response) {
    //     //console.log(response.statusCode); //test

    //     response.on('data', function(data) {
    //         const roverImages = JSON.parse(data);
    //         let sol = roverImages.photos[0].sol;
    //         let earthDate = roverImages.photos[0].earth_date;
    //         let camFhaz = roverImages.photos[0].img_src;
    //         res.write(`<body>Mission Day: ${sol}, Earth Date: ${earthDate}</body>`); //test
    //         res.write(`<img src='${camFhaz}'/>`);
    //         res.send();
    //         //console.log(roverImages);
    //         //console.log(sol);

    //     });
    // });

/////////////////////////////////////////////////////////////////////////////////////////////////////////