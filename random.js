// window.onload = function() {
// let runTimeAddition = 5+2;
// let returnRunTime = "expression equals " + runTimeAddition + " at the runtime";
// document.getElementById("run-time").innerHTML = returnRunTime;
// }
// alert(addingRunTime);

// Learn breakpoints https://developer.chrome.com/docs/devtools/javascript/breakpoints/
// console.log('a');
// console.log('b');
// debugger;
// console.log('c');
// Read https://developer.chrome.com/docs/devtools/dom/#scroll2
// Go through https://developer.chrome.com/docs/devtools/css/grid/
// Go through the use of badges https://developer.chrome.com/docs/devtools/elements/badges/
// Go through spotting inactive CSS https://developer.chrome.com/docs/devtools/css/issues/
// Walk through using Devtools for flexbox https://developer.chrome.com/docs/devtools/css/flexbox/
// Go through resizing container with devtools https://developer.chrome.com/docs/devtools/css/container-queries/
// Skim through CSS devtools reference https://developer.chrome.com/docs/devtools/css/reference/

// Overview of the use of Console https://developer.chrome.com/docs/devtools/console/
// let clickCount = 0;
// $("#button-variables-number").addEventListener("click", () => {
//     console.log(`I was pressed ${++clickCount} times by now`);
// }); Doesn't work
// const coWorkers = [
//     {
//         name: 'daryl',
//         age: 23
//     },
//     {
//         name: 'linda',
//         age: 31
//     },
//     {
//         name: 'anthony',
//         age: 25
//     }
// ]
// setTimeout(() => { //setTimeout != setTimeOut
// console.table(coWorkers);
//   }, 3000);
// console.assert(document.getElementById("variables-number"), 'variables-number not found!');
// const labelGroupName = 'SuperHero';
// console.group(labelGroupName);
// console.info('Iron Man');
// console.info('Spider Man');
// console.info('Captain America');
// console.groupEnd(labelGroupName);
// console.info('Thor');
// Go through https://developer.chrome.com/docs/devtools/console/log/
// Walk through https://developer.chrome.com/docs/devtools/javascript/
// Walk through https://developer.chrome.com/docs/devtools/console/javascript/
// $() used for document.querySelector() inspired by jQuery but not actually jQuery
// Learn live expressions https://developer.chrome.com/docs/devtools/console/live-expressions/
// Introduction to color display text in console https://developer.chrome.com/docs/devtools/console/format-style/
// Quickly scroll through console reference https://developer.chrome.com/docs/devtools/console/reference/
window.onload = () => {
let timer = document.getElementById('timer');
let before;
let after;

function startTimer() {
    if (timer.innerHTML == 'Start timer') {
        console.log('Starting timer');
        before = Date.now();
        timer.innerHTML = 'Stop timer';
    }
    
    else if (timer.innerHTML == 'Stop timer') {
        console.log('Stopping timer');
        after = Date.now();
        console.log('Time ran = ' + (after-before) / 1000 + ' seconds');
        timer.innerHTML = 'Start timer';
    }


}

timer.addEventListener('click', startTimer);



let changeButton = document.getElementById('changeButton');
let changePara = document.getElementById('changePara');
changeButton.addEventListener('click', changeFunction);

function changeFunction() {
    // let listOfWords = {
    //     header: 'What I like',
    //     paragraph: 'Juma',
    // }
    let arrayOfLikes = ['Juma', 'Coding', 'Learning', 'Finance'];

    for (let i = 0; i < arrayOfLikes.length; i++) {
        for (let k = 0; k < arrayOfLikes.length; k++) {
            if (changePara.innerHTML == arrayOfLikes[i]) {
                changePara.innerHTML = arrayOfLikes[k]
            } else {
                changePara.innerHTML = arrayOfLikes[Math.floor(Math.random() * arrayOfLikes.length)];
            }
        }
    }
}

// Array Practice
function forEachMethod() {
    // Learn forEach Method https://youtu.be/hP0Rl5euD_o
    let nums = [42, 34, 57, 12, 15];

    nums.forEach((x,k,nums) => {
        console.log(x, k, nums);
    });
}

function filterMapReduce() {
    // Learn array method of filter,map, and reduce https://youtu.be/oQ7Le6SuLNA
    let nums = [42, 31, 90, 53, 36, 75];

    let results = nums.filter(n => n%2 === 0)
        .map( n => n*2)
        .reduce((a,b) => a+b);

    console.log(results);
}

function setJavascript() {
    // Learn about Set in javascript https://youtu.be/YiIKUhtqeRM
    // let nums = new Set("bookkeeper"); //Prints each letter only once
    let nums = new Set();

    nums.add(3);
    nums.add(2);
    nums.add(3);
    nums.add("3");
    nums.add("hey");

    console.log(nums.has(3)); // Has checks if there is the number 3

    nums.forEach(value => {
        console.log(value);
    })
}

function mapClass() {
    let map = new Map();

    map.set("Andy", "Javascript");
    map.set("Kiran", "ML");
    map.set("Alvin", "Blockchain");
    map.set("Andy", "AI"); //Because we have .set (javascript gets replaced with AI )

    // console.log(map.keys()); //returns 'Andy', 'Kiran', 'Alvin'
    // console.log(map.get("Andy")); //Returns "Javascript"
    // console.log(map.has("Andy")) //Returns true -> checks to see if Andy is there

    for (let [k,v] of map) { //v = value, k = key
        console.log(k, " : ", v);
    }

    // If to map by forEach, v comes first because value is first instead of key
    // map.forEach((v, k) => {
    //     console.log(k, " : ", v);
    // });
}

function recursionScript() {
    // Approach the use of recursion https://youtu.be/8NZZSgtTelc
    let num = 1;
    function show() {
        console.log("Hi", num);
        num++;
        if (num <= 2000)
            show();
    }
    show();
}

function myFactorialRecursion() {
    let num = 10;
    let set = new Set();

    function show() {
        console.log(num);
        set.add(num);
        num--;
        if (num > 0) {
            show();
        }
    }
    show();
    let sum = 1;
    set.forEach(x => {
        sum *= x;
    });
    console.log(sum);
}

function factorialRecursion() {
    // Learn how to make a factorial recursion https://youtu.be/rDjSD1vcsRI
    function show(n) {
        if (n == 0) {
            return 1
        } else {
            return n * show(n-1);
        }
    }
    let num = 5;
    let result = show(num);
    console.log(result);
}

// Watch the meaning of back-end development https://www.youtube.com/watch?v=XBu54nfzxAQ&ab_channel=SuperSimpleDevg

function returnEnd() {
    // See if function startEnd() {var end = 10} console.log(end) would return 10 - Answer is false
    var start = 1;
    function startEnd() {
        var end = 10;
        return end;
    }

console.log(startEnd());
}

function devtoolTricks() {
    // Watch cool console.log tricks https://www.youtube.com/watch?v=xkzDaKwinA8&ab_channel=WesBos
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue;');

    console.log('This is a %s string', 'String');

    // const p = document.querySelector('p');
    // console.assert(p.classList.contains('hi'), 'That is right!');

    // console.clear();

    const dogs = [
        {
            name: "Snickers",
            age: 2
        },
        {
            name:"Billy",
            age: 1
        },
        {
            name:"John",
            age: 3
        }
    ]
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`)
        console.log(`${dog.name} is ${dog.age} years old`);
        console.groupEnd(`${dog.name}`);
    })
    // Count
    console.count('HI');
    console.count('Bob');
    console.count('HI');

    // Time
    console.time('Fetching data');
    fetch('https://api.github.com/users/olafnub')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('Fetching data');
            console.log(data);
        })

    // Table

    console.table(dogs);
}

function manipulateTo() {
    const myText = 'I am a String';
    const newString = myText.replace('String', 'Word');

    // console.log(newString);

    const myArray = ["Chocolate", "Strawberry", "Apple", "Poptart"];
    const madeAString = myArray.join(' ');

    console.log(madeAString);
}
manipulateTo();

} 

// Go through functions https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
// Go through returns https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
// function showMessage(from, text = "HI!") {
//     alert(from + " : " + text);
//     }
// showMessage("Ann", undefined); // HI! is only used when showMessage doesn't have text to fill iin/undefined
// Power function
// <input type="text">
// function powerNumber(num, power) {
//     for (let i = 1; i < power; i++) {
//     num*=num;
//     }
//     return num;
//     }
//     document.querySelector("input").value = powerNumber(2, 4);
// Go through the differnece between function expression and declaration
// sayhi(“John”);
// function sayHi(name) {
// alert(`Hello, ${name)`);
// }
// This returns the Hello name because it is a declaration, and once it sees sayHi

// sayHi(“John”);

// let sayHi = function(name) {
// alert(`Hello ${name}`);
// }
// This doesn’t return the name because it needs to go down the code in order to see sayHi is a variable
// Go through arrow functions http://javascript.info/arrow-functions-basics
// Create a fizzbuzz
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// let addOn = document.querySelector("pre");
// for (let i = 1; i <= answer; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
// addOn.textContent += "FizzBuzz \n"
// }
// else if (i % 3 === 0 ) {
// addOn.textContent += "Fizz \n";
// } else if (i % 5 === 0 ) {
// addOn.textContent +="Buzz \n";
// } else {
// addOn.textContent+=i + "\n";
// }
// }
// let word = "word";

// for (let i = word.length; i > 0; i--) {
// let sub = word.substring(i, 0);
// document.querySelector("pre").textContent += sub + "\n";
// }
// for (let i = 2; i <= word.length; i++) { 
// let sub = word.substring(0, i);
// document.querySelector("pre").textContent += sub + "\n";
// }


// JSFIDDLE - Copy user's typing 
// Html { <textarea></textarea> <pre></pre> }
// Script 
// let textarea = document.querySelector("textarea");
// let pre = document.querySelector("pre");
// textarea.addEventListener("keydown", (event) => {
// if (event.key != "Backspace") {
// pre.textContent+=`${event.key}`
// }
// else {
// let word = pre.textContent;
// let arrayWord = [...word];
// arrayWord.pop();
// pre.textContent = arrayWord.join("");
// }
// });

// JSFIDDLE - Using map and filter with functions
// function toUpper(string) {
//     return string.toUpperCase();
//     }
//     function startsWith(string) {
//     return string.startsWith("L");
//     }
    
//     let cats = ["Orange", "Gray", "Blue", "White", "Black", "Luke"];
    
//     let cat = cats.map(startsWith);
//     let catL = cats.filter(startsWith);
    
    
//     console.log(cat);


// Help of https://stackoverflow.com/questions/53378613/console-time-in-second
// Skim through and go through console API reference https://developer.chrome.com/docs/devtools/console/api/g
// Skim through and watch video of console Utilities API https://developer.chrome.com/docs/devtools/console/utilities/
// Save code in devtools work space https://developer.chrome.com/docs/devtools/workspaces/
// Create run and save snippets https://developer.chrome.com/docs/devtools/sources/
// Create and run snippets https://developer.chrome.com/docs/devtools/javascript/snippets/gg
// Walk and skim through javascript devtools https://developer.chrome.com/docs/devtools/javascript/reference/
// Walk through and go through devtools Network https://developer.chrome.com/docs/devtools/network/
// Skim through Network references https://developer.chrome.com/docs/devtools/network/reference/
// Go through resrouces for devtools https://developer.chrome.com/docs/devtools/resources/
// Go through performances on devtools https://developer.chrome.com/docs/devtools/evaluate-performance/
// Skim through performance features reference https://developer.chrome.com/docs/devtools/evaluate-performance/reference/
// Use the coverage tab https://developer.chrome.com/docs/devtools/coverage/
// Elminate render blocking resources https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/