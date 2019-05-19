---
title: Html5
root: "/docs"
parents: ["Html5"]
---
<h1 align="center">
  HTML5
</h1>

#### 1. HTML Execution
The execution is top down and single threaded javascript may look multi-threaded, but the fact is that javascript is single threaded. This is why when loading external js files, the parsing of the main html page is pre created. However the css files can downloaded simulteneously because css rules are always being applied - meaning to say elements are always repainted with freshest css rules defined - thus making it unblocking.

#### 2. How to clone html element
````javascript
var lbl = document.createElement('label');
var lbl2 = lbl.cloneNode(true);
````

#### 3. How can you generate public key in html
Html has a keygen element that facilited genration of the key and submission via a form.
````javascript
<keygen name="keyname" challenge="challengestring" keytype="type" key-params="pqg-param" >
````

#### 4. Self closing tags
P , li, td, tr, th, html, body these are the tag where don't have to provide end tag. 


