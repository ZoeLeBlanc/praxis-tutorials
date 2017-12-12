
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

//Goal loop through both arrays to print all colors with reindeers on the html page
//Requires loop through colors and re-looping through reindeer because of uneven number of entries

var secondIndex = 0;
for (var index=0; index < colors.length; index++){
    // loop through colors
    if (index < reindeer.length){
        //if the index is less than the reindeer array use the normal index value
        console.log(colors[index], reindeer[index]);

        var div = document.createElement('div');//Create a div
        div.style.backgroundColor = colors[index];//Give the div a background color of the reindeer

        var coloredReindeer = colors[index]+' '+reindeer[index];//Create the string
        var text = document.createTextNode(coloredReindeer); //Create the text node with the string

        div.appendChild(text);//insert the text into the div
        hohohoElement.append(div); //insert the div into the reindeer div
    } else {
        // if the index of the loop is greater than the length of the reindeer array, start the second counter to re-loop through the reindeer array
        console.log(colors[index], reindeer[secondIndex]);

        var div = document.createElement('div'); //Create a div
        div.style.backgroundColor = colors[index]; //Give the div a background color of the reindeer

        var coloredReindeer = colors[index]+' '+reindeer[secondIndex]; //Create the string
        var text = document.createTextNode(coloredReindeer); //Create the text node with the string

        div.appendChild(text); //insert the text into the div
        hohohoElement.append(div); //insert the div into the reindeer div
        secondIndex++; // increment the secondIndex on each loop
    }
}
