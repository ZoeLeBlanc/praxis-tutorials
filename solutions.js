//Create an alert
// alert('Hello World!');
//Create a console.log
console.log('Hello World!');

// Add an element to the page using JavaScript. These are all statements.
var div = document.getElementById('hello-world');
var myHeading = document.createElement('h1');
myHeading.textContent = 'Hello World!';
div.append(myHeading);

//Declaring variables in our last example
var div = document.getElementById('hello-world');
var myHeading = document.createElement('h1');
//JavaScript lets you create all types of variables
var test; // also let and const

//With you variable you can define different values
//First strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var scholarsLab = 'Scholars Lab';
console.log("Slab length",scholarsLab.length);
var scholarsLabUpperCase = scholarsLab.toUpperCase();
console.log(scholarsLabUpperCase);
var scholarsLabLowerCase = scholarsLab.toLowerCase();
console.log(scholarsLabLowerCase);
var lab = scholarsLab.indexOf('Lab');
console.log(lab);
var s = scholarsLab.charAt(0).toLowerCase();
console.log(s);


// Numbers https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
var int = parseInt('6');
var float = parseFloat('3');
var subtraction = int - float;

var addition = int + float;
var multiplication = int * float;
var division = int / float;
var modulus = int % float;
console.log(subtraction,addition,multiplication,division,modulus);
//Arrays https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var scholarsLabStaff = ['Brandon', 'Jeremy', 'Amanda'];
console.log(scholarsLabStaff.length);
console.log('Brandon', scholarsLabStaff[0]);
scholarsLabStaff.push('Zoe');
console.log(scholarsLabStaff);
var moreStaff = ['Ammon', 'Shane']
scholarsLabStaff.concat(moreStaff);
console.log(moreStaff);
var ShaneGetsANewJob = moreStaff.pop();
console.log(ShaneGetsANewJob);
var Brandon = scholarsLabStaff.filter(function (person) {
    console.log(person);
    return person === 'Brandon';
});
console.log(Brandon);
//Objects https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
var uva = {
    library: 'Alderman',
    location: 'Charlottesville'
};
console.log(uva.location);
console.log(uva['library']);
//Booleans https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
var javaScriptRocks = true;
// everything with a value is true
var noValue = 0; //-0, "", x is undefined, null, NaN
//everything without a value is false

//Conditionals to evaluate statements
// IF ELSE IF ELSE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
if (javaScriptRocks) {
   alert("Congratulations!!");
}

if (uva.library !== 'Alderman') {
    console.log('uva is empty');
} else if (uva['location'] === 'Richmond') {
    console.log('uva has moved');
} else {
    console.log('uva is not empty');
}

// FOR LOOP https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for
for (var i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
var loopCounter = 5;

for (var x = 0; x < loopCounter; x++){
    console.log(x);
}

for (var i = 0; i < scholarsLabStaff.length; i++){
    console.log(scholarsLabStaff[i]);
}
//Functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg);
}
example('hi', 'world');

function returnReverseName(array){
    var newNames = [];
    for (var i = 0; i < array.length; i++){
        var name = array[i].split("").reverse().join("");
        newNames.push(name);
    }
    return newNames;
}
returnReverseName(scholarsLabStaff);
