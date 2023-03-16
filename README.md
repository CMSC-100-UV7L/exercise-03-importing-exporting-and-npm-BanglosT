# Exercise 3 - Importing/Exporting; NPM
Banglos, John Thomas S. </br>
2019 - 04392

## About

This exercise is about using NPM packages, as well as importing and exporting in order to do some functions within Node 

## Contents

### generateUniqueID()
Input parameters: </br> first name (string), last name (string)
Create and return a unique id by concatenating the first letter of the first name (converted to lowercase), the last name (converted to lowercase), and a “unique” alphanumeric string of length 8
Use the uuid package to get a unique alphanumeric string. Trim as needed. 

e.g.
generateUniqueID(“Alan”, “Turing”) </br>

returns: “aturing5133f34e”</br>

### addAccount()</br>
Input parameter: </br> An array with the following contents: first name (string), last name (string), email (string), age (number)

e.g addAccount([“Alan”, ”Turing”, “aturing@w3c.com”, 58]);

If the following conditions are true
all fields are present
the first name, last name, and email are non-empty strings
the email is in a valid format (use the validator package)
age is at least 18

save the data into a new line of file called users.txt in the following format:

first name,last name,email,age,uniqueID

e.g.
</br>
Tim,Berners-Lee,tim@w3c.com,25,aturing5133f34e</br>
Ted,Nelson,ted.n@w3c.com,43,tnelson0cfa6312


Use the function from Item #1 to generate the uniqueID for the user.
If the user was saved, return true. Else, return false
