---
title: Basic
root: "/docs"
parents: ["Javascript"]
---
<h1 align="center">
  Javascript Questions Answers
</h1>

#### 1. What are undeclared and undefined variables?
Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.

Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.

#### 2. What is RegExp
A regular expression is an object that a pattern of characters. When you search in a text you can use a pattern to describe what you are searching for. A simple pattern can be one single character.

```javascript
var re = /ab+c/; // is simlar to following 
var re = new RegExp('ab+c');

// ^ start searching from first word
var myRe = /^hello/; 
console.log(myRe.exec("hello world")); // hello
console.log(myRe.exec("world hello")); // null

// $ start searching from end
var myRe = /hello$/;
console.log(myRe.exec("hello world")); // null
console.log(myRe.exec("world hello")); // hello

// + search for one or more
var myRe = /hel+o$/;
console.log(myRe.exec("hello")); // hello 
console.log(myRe.exec("helo")); // helo
console.log(myRe.exec("helllo")); // helllo
console.log(myRe.exec("heo")); // null

// * search for zero or more last character
var myRe = /hel*o$/;
console.log(myRe.exec("heo")); // hello 
console.log(myRe.exec("heol")); // null
console.log(myRe.exec("hello")); // helllo
console.log(myRe.exec("he")); // null

// ? zero or one
var myRe = /hel?o/;
console.log(myRe.exec("heo"), myRe.exec("helo")); // heo , helo
console.log(myRe.exec("hello"), myRe.exec("hellllo")); // null , nul

// either | or
var myRe = /hello|goodbye/;

// .. any character
var myRe = /he..o/;

//[...] range of characters
var myRe = /[crnld]ope/;
// eg - cope, rope, nope, dope
// zope will be null
```
#### 3. Difference between window.onloan & onDocumentReady
The onLoad event does not fire until every last piece of the page is loaded, this include css & images, which meanse there is huge delay before any code is executed. That isn't want to wait until the Dom is loaded & is able to mainpulated onDocumentReady allows the programmers to do that
```javascript
window.onLoad = function(){console.log("Window onLoad Event Fired");}
document.addEventListener('DOMContentLoaded', function(event){console.log('DomContentLoaded event fired');});
```

#### 4. Three dimentional array
var arr = [[[]]];

#### 5. 

