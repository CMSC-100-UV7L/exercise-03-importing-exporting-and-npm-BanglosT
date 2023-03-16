const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
var validator = require('validator');


function generateUniqueID(fname, lname){
    
    uid = uuidv4().substring(0,8)
    accId = String(fname.toLowerCase().charAt(0)) + String(lname.toLowerCase()) + String(uid)
    return accId
}

function addAccount (arr){
    var flags = 0;

    if(arr.length < 4){
        return console.log('Not enough array items')
    }

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

    if (arr[3] >= 18){
        flags += 1
    }

    if (validator.isEmail(arr[2])){
        flags += 1
    }

    
    if (flags == 6){
        uid = generateUniqueID(arr[0],arr[1]);
        arr.push(uid);
        var content = "";

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



module.exports.generateUniqueID = generateUniqueID;
module.exports.addAccount = addAccount;