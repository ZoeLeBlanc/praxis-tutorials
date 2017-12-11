# Exercise 2: Reindeer Games

## Requirements

Paste the following code into the `<body>` of the HTML file.

```
<div id="reindeer"></div>
```

Paste the following code into your JavaScript file.

```
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
```

Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML `<div>` element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

> **Example output:**  
>  
> Blue Dasher  
>  
> Red Dancer  
>  
> ...

*Bonus points if you can get the div background to be the color of the reindeer. Hint: checkout adding inline styles to html*
