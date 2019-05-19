---
title: Advance
root: "/docs"
parents: ["Javascript"]
---
<h1 align="center">
  Advance javascript
</h1>

#### 1. What does "Favor object composition over class inheritance" means
This is a quote from design pattern *Element of resuable object orianted softwares* It means that *code reus should be achieved by assembling smaller units of functionality into new objects instead foinheriting from classes and creating objects.*

#### 2. javascript function parameters are pass by value of pass by reference
Javascript is always pass by reference in case of parameter is *Object* or *Array*.
Javascript is pass by value in case of paramter is *Primitive* type like number, string etc means when you assigned some value to primitive type value should not reflect outside function.
wheras when you change object value are updated outside function as well.
````javascript
function testRef(intValue, arrVal, objVal) {
    a=3;
    arrVal.push("White");
    obj.first = false;
    obj.newAttr = "New Attribute";
}
var x = 0, arr=["Black"], obj={first:true};
console.log(x, arr, obj); //0 , ["Black", "White"] , {first: false, newAttr: "New Attribute"}
````
Primitive types like String, Number are compared by thire values while Object like Arrays, dates, plain objects compared by there reference. Checking if object given refer to the same location in memory.

#### 3. Scope of function variables
````javascript
// global scope
var a = 1;
let la = 1;
function one() {
	var local_a = 2;
	let local_la = 2;
	// change global 
	a = 1.1;
	la = 1.1;
	console.log(" a ", a, "la ", la); //a  1.1 la  1.1
	if(true) {
		var local_a = 3;  // var has function level scope
		let local_la = 3; // let  has block level scope
	}
	console.log(" local_a ", local_a, "local_la ", local_la); // local_a  3 local_la  2 not changed because let has block level scope
}
one();
console.log(" a ", a, "la ", la); //a  1.1 la  1.1
console.log(" local_a ", local_a, "local_la ", local_la); //Uncaught ReferenceError: local_a is not defined
````
#### 4. Javascript arithmatic sequence
````javascript
console.log(1+"2"+"2");     // 122
console.log(1+ +"2" + "2"); // 32
console.log(1 + -"1" + "2");// 0"
console.log(+"1" + "1" + "2"); // 112
console.log("A"-"B"+"2");     // NaN2
console.log("A" - "B" + 2)    // NaN
````

#### 5. Function curring
A function returns another function that is function curring. like bind function
````javascript
function sum(x) {
    if(arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else {
        return function(y) {return x + y;}
    }
}
console.log(sum(2, 3));  // 5
console.log(sum(2)(3));  // 5
````

#### 6. Javascript Prototype 
````javascript
var Person =function(){
    this.canTalk = true;
    this.show = function() {
        console.log("Person can talk");
    }
}
var Employee = function() {}
Employee.prototype = new Person();
//Overried show function 
Employee.prototype.show = function() {
    console.log("Employee can work and talk");
}
var p = new Person();
var e = new Employee();
p.show();  // "Person can talk"
e.show();  // "Employee can work and talk"
````

#### 7. Javascript closure
* Closure is an inner function that has access to the outer function's varibale scope chain. 
* Closure has three scope chain 1. *Local scope* 2. *Access to outer function* 3. *Global scope*
* Closure are used for object data privacy, event handlers, callbacks in partial application, curring and othet functional programming patterns.
* A closure is the combination of function bundled together with reference of it surrounding state (laxical environment)
````javascript
var makeCounter =function (inital) {
    var privateCounter = 0;
    var inital = inital;
    function changeBy(val) {
        privateCounter += val;
    }
    return  {
        increment:function() {changeBy(inital);},
        decrement:function() {console.dir(changeBy); changeBy(-inital);},
        getValue:function() {return privateCounter;}
    }
}
var stepBy2 = makeCounter(2);
stepBy2.increment();stepBy2.increment();
console.log(stepBy2.getValue()); //4
var stepBy5 = makeCounter(5);
stepBy5.increment();stepBy5.increment();stepBy5.increment();
stepBy5.decrement();
console.log(stepBy5.getValue()); //10
```` 