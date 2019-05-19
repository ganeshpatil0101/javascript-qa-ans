---
title: jQuery
root: "/docs"
parents: ["Javascript"]
---
<h1 align="center">
  jQuery
</h1>

#### 1. jQuery selectors
* $("*") //select all elements
* $("p") //select all p elements
* $("p.intro") // select all p element with class=intro
* $("p#intro") // select p element that has id=intro
* $(":animated") // select element which is currently animated
* $(":even") // selct all even element
* $(":odd") // select all odd element

#### 2. jQuery Events
* $(document).ready(function)
* $(selector).click(function)
* $(selector).dbClick(function)
* $(selector).focus(function)
* $(selector).mouseover(function)

#### 3. how to load javascript file asynchronously
```javascript
$.getScript("path/filename.js", function(){
    // code here
});
```

#### 4. Which css engine jQuery uses
Sizzle css selctor engine 

#### 5. How jQuery execution works to select elements
e.g. support, $("p#elmentId .myCssClass");
In above schenario last selector always execute first. jquery find first .myCssClass and after that it will reject all the other elements which are not in p#elementId

#### 6. Who to resolve conflicts in multiple jquery versions
jQuery.noConflict(); function used to resolve conflicts
```javascript
var $j = jQuery.noConflict();
$j(document).ready(function(){
    // use $j jquery version 
});
// use $ default jquery version
```
#### 7. Difference between empty and remove
empty(); - remove the child elements / inner all html
remove(); - remove the selected element / remove ele. itself