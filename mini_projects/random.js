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

// JS FIDDLE USING CONTINUE FUNCTION
// let sqrt = Math.sqrt(5);
// let floor = Math.floor(sqrt);
// console.log(floor);
// for (let i = 0; i < 20; i++) {
// if (i%2 !== 0) {
// continue;
// } 
// console.log(i);
// }

// JSFIDDLE search for contact name + id
// let idName = ["chris:396812", "patrick:410242", "emma:104192", "bridget:748123"];
// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// let pre = document.querySelector("pre");
// btn.addEventListener("click", () => {
// let findName = input.value;
// findName.toLowerCase();
// for (let i = 0; i < idName.length; i++) {
// let splitName = idName[i].split(":");
// console.log(splitName[0]);
// if (splitName[0] === findName) {
// pre.innerHTML = splitName;
// }
// }
// input.value = "";
// })

// JS FIDDLE - Use do while loop 
// let catList = ["Orange", "Bob", "Gray", "Smith"];
// let pre = document.querySelector("pre");
// let i = 0;
// pre.textContent = "My cats are called ";
// do {
// if (i === catList.length - 1) {
// pre.textContent+= "and " + catList[i] + ".";
// } else {
// pre.textContent+=catList[i] + ", "
// }
// i++;
// } while (i < catList.length);

// JSFIDDLE QuerySelector Move Game
// HTML
{/* <p>
One
</p>
<p>
Two
</p>
<p>
Three
</p>
<p>
Move me
</p>
<pre></pre>
<pre></pre> */} // SCRIPT
// let paragraphs = document.querySelectorAll("p");
// /* document.body.insertBefore(paragraphs[2], paragraphs[0]); */
// let moveTo = 0;
// let start = 3;
// let switchLane = false;
// function clicked() {
// 	 if (!switchLane) {
// 	moveTo++;
//   if (moveTo >= 3) {
//   switchLane = true;
//   }
//   } else {
//   moveTo--;
//   if (moveTo <= -1) {
//   switchLane = false;
//   }
//   }
//  	document.body.insertBefore(paragraphs[3], paragraphs[3-moveTo]);
//   preTwo.textContent = moveTo;
// }
// let pre=document.querySelector('pre');
// pre.textContent = "Length: " + paragraphs.length;
// const preTwo = document.querySelectorAll('pre')[1];
// preTwo.textContent = moveTo;
// paragraphs.forEach(p => p.addEventListener('click', clicked));

// MDN Active learning
// let output = document.querySelector('.output');
// output.innerHTML = '';
// // let i = 10;
// for (let i = 10; i >= 0; i--) {
// const para = document.createElement('p');
// if (i === 10) {
// para.textContent = "Count down from 10!";
// } else if (i === 0) {
// para.textContent = "Blast off!";
// }
// else {
// para.textContent = i;
// }
// output.appendChild(para);
// }
// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: ';
// // loop starts here
// for (const name of people) {
// if (name === "Phil" || name === "Lola") {
// refused.textContent += name + ", ";
// } else {
// admitted.textContent += name + ", ";
// }
// }
// let admittedString = admitted.textContent;
// let admittedLength = admittedString.length;
// admitted.textContent = admittedString.slice(0, admittedLength-2) + ".";
// let refusedString = refused.textContent;
// let refusedLength = refusedString.length;
// refused.textContent = refusedString.slice(0, refusedLength-2) + ".";

// JSFIDDLE find prime numbers
// for (let i = 0; i < 20; i++) {
//     let lightSwitch = false;
//     if (i%2 === 0) {
//     lightSwitch=true;
//     }
//     else if (i%3 === 0 && i!==3) {
//     lightSwitch=true;
//     }
    
//     if (lightSwitch === true) {
//     console.log(`${i} is not a prime number`);
//     } else {
//     console.log(`${i} is a prime number`)
//     }
//     }

// JSFIDDLE - DOM manipulate
// const container = document.querySelector("#container");
// console.dir(container.firstElementChild);
// const controls = document.querySelector('.controls');
// console.dir(controls.previousElementSibling);
// const divs = document.querySelectorAll('div');
// console.log(divs);
// const div = document.createElement("div");
// div.style.color = "blue";
// div.style.cssText = "color: blue; background: white;";
// div.setAttribute('style', 'color: blue; background: white;');
// /* container.appendChild(div); */
// div.setAttribute("id", "theDiv");
// console.log(div.getAttribute('id'));
// div.removeAttribute('id');
// div.classList.add('new');
// div.textContent = "Hello World!"";

// JSFIDDLE - Appending child nodes to parent
// const container = document.querySelector("div");
// const para = document.createElement('p');
// para.textContent = "Hey, I'm red!";
// container.appendChild(para);
// para.classList.add("para");
// para.style.color = "red";
// const headingThree = document.createElement("h3");
// headingThree.textContent = "I'm a blue h3!";
// container.appendChild(headingThree);
// headingThree.style.color ="blue";
// const div = document.createElement('div');
// div.style.backgroundColor = "pink";
// div.style.border = "1px solid black";
// const headingOne = document.createElement("h1");
// headingOne.textContent = "I'm in a div";
// div.appendChild(headingOne);
// const paraDiv = document.createElement('p');
// paraDiv.textContent = "ME TOO!";
// div.appendChild(paraDiv);
// container.appendChild(div);

// JSFIDDLE - PLAYAROUND
// HTML
{/* <p>
In recent history, we've been able to discover the power of passion
</p>
<p data-classified="secret">
This is a secret
</p>
<p data-classified="unclassified">
Be free
</p>
<blockquote>
"The mind is a powerful thing"
</blockquote>
<a href="" style="color:green; border: none">hi</a>
<p style="text-align: center;">
<img style="width: 350px; position: relative;" src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1600-c85.webp">
</p>
<table>
<tr>
  <th>Name</th>
  <th>Height</th>
  <th>Age</th>
</tr>
<tr>
  <td>Bob</td>
  <td>5'11</td>
  <td>20</td>
</tr>
<tr>
  <th>Name</th>
  <th>Height</th>
  <th>Age</th>
</tr>
<tr>
  <td>Alice</td>
  <td>6'1</td>
  <td>19</td>
</tr>
</table> */}
// CSS
// blockquote {
//     width: 100px;
//     height; 100px;
//   }
// let arrayish = {
//     0: 'zero', 
//     1: 'one',
//     length: 2
//     } 
//     let array = Array.from(arrayish);
//     console.log(array.map(s => s.toUpperCase()));   
//     let para = document.querySelectorAll('p');   
//     for (para of Array.from(para)) {
//     if (para.getAttribute('data-classified') == 'secret') {
//     para.remove();
//     }
//     } 
//     let stringy = 'this';
//     let arrayiy = ['hi', 'fi', 'this'];
//     let i = 0; 
//     for (stringy of arrayiy) {
//     console.log(arrayiy[i]);
//     i++;
//     }
//     console.log(para);
//       let cat = document.querySelector("img");
//       let angle = Math.PI / 2;
//       function animate(time, lastTime) {
//         if (lastTime != null) {
//           angle += (time - lastTime) * 0.001;
//         }
//         cat.style.top = (Math.sin(angle) * 20) + "px";
//         cat.style.left = (Math.cos(angle) * 200) + "px";
//         requestAnimationFrame(newTime => animate(newTime, time));
//       }
//       /* requestAnimationFrame(animate); */   
//       const names = [
//           {gender: "bob", age:'40', skin: 'white'},
//         {gender: "whitney", age:'40', skin: 'black'}
//       ];
//       console.log(Object.keys(names[0]).length);   
//     let th = document.getElementsByTagName('th');
//     console.log(th);
//     let tdAll = document.querySelectorAll('td');
//     tdAll.forEach(cells => {
//         cells.style.textAlign = "center";
//     })

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