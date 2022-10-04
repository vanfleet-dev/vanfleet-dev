// .mjs specifies the file will use ECMAScript modules the syntax below for 'import fs from 'fs';' is ECMAScript syntax.

import fs from 'fs'; //imports a module that allows node to access the file system

fs.copyFileSync('file.txt', 'file2.txt');  // example of use 'fs' module to interact with local file system. https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback

import ranWordGen from 'random-words'; // install a random word generator package. example usage https://www.npmjs.com/package/random-words

console.log(ranWordGen(3));


// vs.

const fs = require('fs');

fs.copyFileSync('file.txt', 'file2.txt');

const ranWordGen = require('random-words');

console.log(randWordsGen(3));