//
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

var coloredReindeer = '';

for (var i = 0; i < reindeer.length; i++){
	var coloredReindeer =  colors[i] + ' ' + reindeer[i];
	console.log(coloredReindeer);
	hohohoElement.innerHTML += "<div>" + colors[i] + ' ' + reindeer[i] + "</div>";
}
//
var sonnet = document.getElementById("sonnet").innerHTML;


console.log(sonnet.indexOf("orphans"));
console.log(sonnet.length);
var newSonnet = sonnet.replace("winter", "yuletide");
newSonnet += sonnet.replace(/the/g, "a large");
document.getElementById("sonnet").innerHTML = newSonnet;
//
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = '';
var gradeB = '';
for (var i = 0; i < scores.length; i++){
	if (scores[i] > 91){
		gradeA = console.log("There are" + i + " of students with grade A.")
	}
} else if (scores[i] > 81){
		gradeB = console.log(i)
} else if (scores[i] > ){

}
}
