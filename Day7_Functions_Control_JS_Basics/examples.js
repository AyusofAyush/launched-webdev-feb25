document.write("JavaScript is a simple language for javatpoint learners");  


// Intro to JS

// variables
var x = 5; // not block scoped

let y = "Hello";

const z = "world";


// global variable 

var value=50;//global variable  

function a(){  
alert(value);  
}  
function b(){  
alert(value);  
}  

window.value=100;//declaring global variable by window object  

// data types
/*
1. Primitive data type
2. Non-primitive (reference) data type

Primitive data type
1. String
2. Number
3. Boolean
4. Undefined -> None -> False 
5. Null -> None  -> False

Non-primitive (reference) data type
1. Object
2. Array
3. Function
4. Date
5. RegExp
6. Error
7. Symbol

*/

// Operators
/*
Arithmetic Operators
Comparison (Relational) Operators
Bitwise Operators
Logical Operators
Assignment Operators
Special Operators


https://www.javatpoint.com/javascript-operators
*/


// conditional statements
/*
1. if statement
if(expression){  
//content to be evaluated  
}  
2. if-else statement
if(expression){  
//content to be evaluated if condition is true  
}  else if() {
  //content to be evaluated if condition is true  
}
else{  
//content to be evaluated if condition is false  
} 

*/



// switch case
/*
let grade='B';  
let result;  
switch(grade){  
case 'A':  
result="A Grade";  
break;  
case 'B':  
result="B Grade";  
break;  
case 'C':  
result="C Grade";  
break;  
default:  
result="No Grade";  
}  
*/

// loops
/*
1. for loop
for(initialization; condition; increment/decrement){
    // code to be executed
    }   

2. while loop
while(condition){  
    // code to be executed
    }   

3. do while loop    
do{  
    // code to be executed
    }   
    while(condition);

4. for in loop
for(variable in object){  
    // code to be executed
    }

5. for of loop
for(variable of object){  
    // code to be executed
    }  
*/

// BOM (Browser Object Model)
/*
Way to interact with the browser
1. Window 
2. Screen or window.screen
3. Location or window.location
4. History or window.history
5. Navigator or window.navigator

alert -> display an alert box with a specified message and an OK button.

same 

window.alert("Do you really want to leave this page?");


window.history -> history object contains the URLs visited by the user (within a browser window).

https://www.javatpoint.com/browser-object-model

*/

document.writeln("<br/>navigator.appCodeName: "+navigator.appCodeName);  
document.writeln("<br/>navigator.appName: "+navigator.appName);  
document.writeln("<br/>navigator.appVersion: "+navigator.appVersion);  
document.writeln("<br/>navigator.cookieEnabled: "+navigator.cookieEnabled);  
document.writeln("<br/>navigator.language: "+navigator.language);  
document.writeln("<br/>navigator.userAgent: "+navigator.userAgent);  
document.writeln("<br/>navigator.platform: "+navigator.platform);  
document.writeln("<br/>navigator.onLine: "+navigator.onLine);  

// ---------------


// Screen 


document.writeln("<hr /><br/>screen.width: "+screen.width);  
document.writeln("<br/>screen.height: "+screen.height);  
document.writeln("<br/>screen.availWidth: "+screen.availWidth);  
document.writeln("<br/>screen.availHeight: "+screen.availHeight);  
document.writeln("<br/>screen.colorDepth: "+screen.colorDepth);  
document.writeln("<br/>screen.pixelDepth: "+screen.pixelDepth);  