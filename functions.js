const { v4: uuidv4 } = require('uuid');

function generateUniqueID(fname, lname){
    uid = uuidv4().substring(0,8)
    accId = String(fname.toLowerCase().charAt(0)) + String(lname.toLowerCase()) + String(uid)
    return accId
}


console.log(generateUniqueID("Alan","Turing"));