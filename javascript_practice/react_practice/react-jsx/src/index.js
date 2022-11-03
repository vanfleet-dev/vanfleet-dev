// Initial Setup:

// run inside of the directory where you want the app to be compiled. last input is the app / directory name :

// npx create-react-app react-test-app

// remove source and public directories and replace with template directories

// run inside of app directory to test:

// npm start

import React from 'react';
import ReactDOM from 'react-dom/client'; //react 8
// import ReactDOM from 'react-dom'; // react 7
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); //react 8 
root.render(<App />);

//ReactDOM.render(<App />, document.getElementById('root')); // react 7
