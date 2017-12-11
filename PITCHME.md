@title[Introduction to JavaScript]
# Welcome to JavaScript  
### The most magical thing on the internet 
![Harry Potter](https://media.giphy.com/media/xjXXTEFCuf4Jy/giphy.gif)
Note: Welcome to JavaScript! IMHO the most magical thing on the internet. Gets a bit of a bad wrap but powers almost everything on the web, including this slideshow
---
@title[So what is JavaScript?]
# So JavaScript?
- Initially introduced in 1995 for Netscape Navigator Browser 
- Has nothing to do with Java (just named the same for marketing) |
- JavaScript standards are set by ECMA International, which is actually important because developers often refer to new updates to JavaScript by their ECMAStandard Version (eg. ES5, ES6, and ES7) |
Note: But what is javascript?
+++
@title[So what is JavaScript?]
"JavaScript is a programming language that allows you to implement **complex things on web pages** — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, or interactive maps, or animated 2D/3D graphics, or scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the **third layer of the layer cake of standard web technologies**." From [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) 
Note: Any guess on the other two?
+++?image=https://mdn.mozillademos.org/files/13502/cake.png&size=80% auto
Note: the other two being html & CSS which you guys have already started learning . So now that we have a baking analogy
+++?image=https://media.giphy.com/media/5Sykf8G3M50kM/giphy.gif&size=80% auto
Note: ready set bake! Today we're gonna go over some of the more common syntax you'll come across with JavaScript and how to bake your very own three layer standard web technology cake
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
        <script src="main.js"></script>
    </body>
</html>
```
@[1](First DOCTYPE)
@[2,10](Then html tags)
@[3-6](Then head tags with the title and link to our stylesheet)
@[7-9](Then body tags and this is where we connect our JavaScript file with a script tag)
Note: Now we can start creating our first javascript file
---

