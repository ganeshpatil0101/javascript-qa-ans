---
title: Basic
root: "/docs"
parents: ["Typescript"]
---
<h1 align="center">
  TypeScript
</h1>

#### 1. Typescript
Typescript is superset of javascript that compiles to plain javascript. Typescript is open source and developed my microsoft. Typescript main feature is to make javascript typesafe.
- npm install -g typescript
- tsc helloworld.ts

#### 2. Basic types of typescript
Boolean, Number, String, Array, Enum, Any, Never, void, Tuple
Never - Represent the type of value that never done.
Tuple - Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same
````javascript
// Declare a tuple type
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error // Initialize it incorrectly
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
````

#### 3. What is interface
One of core principles is that typescript focus on the shape that values. This is something called "duck typing" & "Structural Subtyping"
````javascript
interface SquareConfig{
    color?:String; //optional property
    width: Number; // must have property
    [propName: string]: any; // any other property
    myFunction:(source: string, subString: string): boolean;  // define function type with parameter and return type
}
/////////////////////////////////////////////
//When working with classes and interfaces, it helps to keep in mind that a class has two types: the type of the static side and the type of the instance side. You may notice that if you create an interface with a construct signature and try to create a class that implements this interface you get an error:
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
````
#### 4. What is lambdas
=> fat arrow function resolves the 'this' issue of javascript. => is the short hand version of function.


