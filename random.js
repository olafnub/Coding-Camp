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

function returnEnd() {
    // See if function startEnd() {var end = 10} console.log(end) would return 10 - Answer is false
    var start = 1;
    function startEnd() {
        var end = 10;
        return end;
    }

console.log(startEnd());
}

} // Help of https://stackoverflow.com/questions/53378613/console-time-in-second
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
