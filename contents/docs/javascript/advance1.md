---
title: Advance - 1
root: "/docs"
parents: ["javascript"]
---
<h1 align="center">
  Advance - 1 javascript
</h1>

#### 1. Explain Promise
A promise is an object that may produce a single value some time in the future. A promise may be in 1 of 3 possible states : *Fulfield, Rejected, Pending*
- Attach callbacks to handle the fullfilled value of reasong for rejection.
````javascript
const wait = time => new Promise((resolve)=> setTimeout(resolve, time));
wait(3000).then(()=> console.log('Done Waiting'));
````
- Promise Chaining
 > fetch(url)
 > .then(process)
 > .then(save)
 > .catch(handleErrors) 
- *Promise.Race(iterable)* method returns a promise that resolves or rejects as soon as one of the promise in the iterable resolves or rejects with value or reject with reson.
````javascript
var p1 = new Promise((res, rej)=>{setTimeout(res, 500, 'one')});
var p2 = new Promise((res, rej)=>{setTimeout(res, 100, 'two')});
Promise.race([p1, p2]).then((v)=>{console.log(v)}); //two
````
- *Promise.all()* method returns a single Promise that resolve when all of the promises in the iterable resolves. And rejects when any of the promise is reject with the reson.
 ````javascript
var p1 = new Promise((res, rej)=>{setTimeout(res, 500, 'one')});
var p2 = new Promise((res, rej)=>{setTimeout(res, 100, 'two')});
Promise.all([p1, p2]).then((v)=>{console.log(v)}); //[one, two]
//Promie.all rejects even in one of the rejects
var p3 = new Promise((res, rej)=>{setTimeout(res, 500, 'one')});
var p4 = new Promise((res, rej)=>{rej('Failed')});
Promise.all([p3, p4]).then((v)=>{console.log(v)}).catch(e=>console.error(e));  // Failed
````

#### 2. What is Event Loop
 - **The Call Stack**
JavaScript has a single call stack in which it keeps track of what function we’re currently executing and what function is to be executed after that.
 ````javascript
 function multiply(a , b) { return a * b;}
 function square(n) {return multiply(n, n);}
 function printSquare(n) { console.log(square(n));}
 printSquare(5);
 ````
 | STACK | Order |
 | -- | -- |
 | multiply | 1st execute|
 | square | 2nd execute|
 | printSquare | 3rd execute|
 | main | |
 WIP