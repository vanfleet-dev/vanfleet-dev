import '../style.css';
import React from 'react';

const today = new Date();
const year = today.getFullYear();

console.log(year);

function Footer() {
    return <footer>
        <p className="footer">Copyright ⓒ {year}</p>
    </footer> 
};

export default Footer;