// Greet World
console.log("Hello World");

// This is an industrial-grade general-purpose greeter function

function greet(person:string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Watching me", new Date());

function printCoord(pt: {x:number, y:number}) {
    console.log("The x coordinate is " + pt.x);
    console.log("The y coordinate is " + pt.y);
}
printCoord({x: 3, y:7});