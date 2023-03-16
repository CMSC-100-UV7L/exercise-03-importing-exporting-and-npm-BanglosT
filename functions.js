// Banglos, John Thomas
// CMSC 100 UV-7L

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
var validator = require('validator');

// This functions concatenates first letter of first name, last name, and generated uuid
function generateUniqueID(fname, lname){

    // uid is taken from uuid package; given standard uuid is 16 chars. long, substring is used to only get first 8 characters
    uid = uuidv4().substring(0,8)

    //these are then concatenated together to form 
    accId = String(fname.toLowerCase().charAt(0)) + String(lname.toLowerCase()) + String(uid)
    return accId
}

// This function adds an account depending on the content of the input array
function addAccount (arr){
    //flags are used to determine the validity of input; getting 6 flags equates to a valid input
    var flags = 0;

    //checks length of array 
    if(arr.length < 4){
        return console.log('Not enough array items')
    }

    //checks if array items are string and number
    for (let i = 0; i < arr.length; i++) {
        if (i <= 2){
            if (typeof arr[i] === 'string'){
                flags += 1
            }
        } else if (i == 3){
            if (typeof arr[i] === 'number'){
                flags += 1
            }
        }

    }

    // checks if string items are non-empty strings; if it is empty, loop breaks
    for (let i = 0; i < arr.length; i++) {
        if (i <= 2){
            if (arr[i] !== ""){
                break
            }else{
                continue
            }
        }
        flags += 1;
    }

    //checks if age is at least 18
    if (arr[3] >= 18){
        flags += 1
    }

    //validates email through validator package
    if (validator.isEmail(arr[2])){
        flags += 1
    }

    //checks if flags are 6; else, return false
    if (flags == 6){
        uid = generateUniqueID(arr[0],arr[1]);
        arr.push(uid);
        var content = "";

        // content is used as placeholder to concatenate all array data which is then appended to users.txt
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length-1){
                content += arr[i]+','
            }else{
                content += arr[i]
            }   
        }

        content += "\n";
        
        fs.appendFile('users.txt', content, err => {
            if (err){
                console.err;
                return;
            }   
        })
        return true
    }else{
        return false
    }
}


//exported with commonjs format
module.exports.generateUniqueID = generateUniqueID;
module.exports.addAccount = addAccount;