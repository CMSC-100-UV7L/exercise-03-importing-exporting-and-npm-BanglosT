const {generateUniqueID, addAccount} = require('./functions.js');



console.log(generateUniqueID('Alan', "Turing"));
console.log(generateUniqueID("Ted", "Nelson"))

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]));