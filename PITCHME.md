@title[Introduction to JavaScript]
# Welcome to JavaScript  
### The most magical thing on the internet 
![Harry Potter](https://media.giphy.com/media/xjXXTEFCuf4Jy/giphy.gif)
Note: Welcome to JavaScript! IMHO the most magical thing on the internet. Gets a bit of a bad wrap but powers almost everything on the web, including this slideshow. So what is Javascript?
---
@title[So what is JavaScript?]
"JavaScript is a programming language that allows you to implement **complex things on web pages** — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, or interactive maps, or animated 2D/3D graphics, or scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the **third layer of the layer cake of standard web technologies**." From [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) 
Note: Any guess on the other two?
+++?image=https://mdn.mozillademos.org/files/13502/cake.png&size=80% auto
Note: the other two being html & CSS which you guys have already started learning . So now that we have a baking analogy, Today we're gonna bake your very own three layer standard web technology cake and go over some of the more common syntax you'll come across with JavaScript. First though
+++
@title[So what is JavaScript?]
#### About JavaScript...
- Initially introduced in 1995 for Netscape Navigator Browser 
- Has nothing to do with Java (just named the same for marketing) |
- JavaScript standards are set by ECMA International, which is why developers often refer to new updates to JavaScript by their ECMAStandard Version (eg. ES5, ES6, and ES7) |
- BEST RESOURCE for JavaScript is the Mozilla Dev Network Docs and W3Schools |
- If you don't know it, google it & ask for help!!!! |
Note: Now we're ready set bake!
+++?image=https://media.giphy.com/media/5Sykf8G3M50kM/giphy.gif&size=80% auto
---

``` 
mkdir 'name of your directory'
touch index.html
touch main.js
touch main.css
```

@[1](First thing set up a directory on your computer)
@[2-4](Then create an index.html, main.css, and main.js file)
Note: Can anyone remember how to set up an initial index.html file?
---
```
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
        <div id="hello-world></div>
        <script src="main.js"></script>
    </body>
</html>
```
@[1](First DOCTYPE)
@[2,10](Then html tags)
@[3-6](Then head tags with the title and link to our stylesheet)
@[7-10](Then body tags and this is where we connect our JavaScript file with a script tag)
Note: Now we can start creating our first javascript file
---
Two ways to easily add some JavaScript
```
//Create an alert
alert('Hello World!');
//Create a console.log
console.log('Hello World!');
```
@[2]
@[4]
---
```
// Add an element to the page using JavaScript. These are all statements.
var div = document.getElementById('hello-world');
var myHeading = document.createElement('h1');
myHeading.textContent = 'Hello World!';
div.append(myHeading);
```
@[2]
@[3]
@[4]
@[5]
Note: So how do we do this! Let's look at this example again
---
```
var div = document.getElementById('hello-world');
var myHeading = document.createElement('h1');
var test; 
let test;
const test;
```
@[1-2](This is called declaring a variable)
@[3-5](JavaScript lets you create variables and assign them values)
---
#### Strings
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
```
var scholarsLab = 'Scholars Lab';
console.log("SLab length", scholarsLab.length);
var scholarsLabUpperCase = scholarsLab.toUpperCase();
var scholarsLabLowerCase = scholarsLab.toLowerCase();
var lab = scholarsLab.indexOf('Lab');
var s = scholarsLab.charAt(0).toLowerCase();
```
@[1-2]
@[3-4]
@[5-6]
Note: Slab length 12, SCHOLARS LAB, scholars lab, 9, s
---
#### Numbers
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
Three types: decimals, floats, integers
```
var int = parseInt('6');
var float = parseFloat('3');
var subtraction = int - float;
var addition = int + float;
var multiplication = int * float;
var division = int / float;
var modulus = int % float;
```
@[1-2]
@[3-7]
Note: 3 9 18 2 0
---
#### Arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
```
var scholarsLabStaff = ['Brandon', 'Jeremy', 'Amanda'];
console.log(scholarsLabStaff.length);
console.log('Brandon', scholarsLabStaff[0]);
scholarsLabStaff.push('Zoe');
var moreStaff = ['Ammon', 'Shane'];
scholarsLabStaff.concat(moreStaff);
var ShaneGetsANewJob = scholarsLabStaff.pop();
var Brandon = scholarsLabStaff.filter(function (person) {
    return person === 'Brandon';
});
```
@[1]
@[2-3]
@[4-7]
@[8-10]
---
#### Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
```
var uva = {
    library: 'Alderman',
    location: 'Charlottesville'
};
console.log(uva.location);
console.log(uva['library']);
```
@[1-3]
@[4-5]
---
#### Booleans
True or False
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
```
var javaScriptRocks = true; // everything with a value is true
var noValue = 0; //-0, "", x is undefined, null, NaN > everything without a value is false
```
@[1]
@[2]
---
#### Conditional Statements
if else if else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
```
if (javaScriptRocks) {
   alert("Congratulations!!");
}

if (uva.library !== 'Alderman') {
    console.log('uva is empty');
} else if (uva['location'] === 'Richmond' && uva['library']==='Alderman') {
    console.log('uva has moved');
} else {
    console.log('uva is not empty');
}
```
@[1-3]
@[4-5]
@[6-7]
@[8-10]
---
for loops
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for
```
for (var i = 0; i < 9; i++) {
   console.log(i);
}
var loopCounter = 5;
for (var x = 0; x < loopCounter; x++){
    console.log(x);
}
for (var i = 0; i < scholarsLabStaff.length; i++){
    console.log(scholarsLabStaff[i]);
}
```
@[1-3]
@[4-8]
@[9-11]
---
#### Functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
```
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
```
@[1-4]
@[6-14]
