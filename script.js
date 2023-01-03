// Format for 01/31/2023
let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = String(today.getFullYear());
let formatNumberDate = mm + "/" + dd + "/" + yyyy;

// Format for Jan/31/2023
let date;
let month;
let clickedDate = false;

switch (mm) {
    case "01":
        month = "Jan";
        break;
    case "02":
        month = "Feb";
        break;
    case "03":
        month = "Mar";
        break;
    case "04":
        month = "April";
        break;
    case "05":
        month = "May";
        break;
    case "06":
        month="Jun";
        break;
    case "07":
        month = 'Jul';
        break;
    case "08":
        month = 'Aug';
        break;
    case "09":
        month = "Sep";
        break;
    case "10":
        month = "Oct";
        break;
    case "11":
        month = "Nov";
        break;
    case "12":
        month = "Dec";
        break;

}

function switchDate() {
    
    if (date.innerHTML.length == 10) {
        date.innerHTML = month + "/" + dd + "/" + yyyy;
    }
    else {
        date.innerHTML = formatNumberDate;
    }
    
}

// Current time
let hours = today.getHours();
let minutes = String(today.getMinutes()).padStart(2, "0");
let postMeridiem; // Check for Am/Pm
let time; //for windowonload
let currentTime; //added together
let currentSeconds = today.getSeconds();

if (hours >= 0 && hours < 12) { 
    postMeridiem = 'a.m.'
} else {
    postMeridiem = 'p.m.'
}

// Change current hour to 0-12
switch (hours) {
    case 13:
        hours = "1";
        break;
    case 14:
        hours = "2";
        break;
    case 15:
        hours = "3";
        break;
    case 16:
        hours = "4";
        break;
    case 17:
        hours = "5";
        break;
    case 18:
        hours = "6";
        break;
    case 19:
        hours = "7";
        break;
    case 20:
        hours = "8";
        break;
    case 21:
        hours = "9";
        break;
    case 22:
        hours = "10";
        break;
    case 23:
        hours = "11";
        break;
    case 0:
        hours = "12";
        break;
}

currentTime = hours + ":" + minutes + " " + postMeridiem;

// Building the clock minute update
setInterval(changeMinutes, 1000);
function changeMinutes() {
    let today = new Date();
    let currentSeconds = today.getSeconds();
    if (currentSeconds == 0 ) {
        let minutes = String(today.getMinutes()).padStart(2, "0");
        currentTime = hours + ":" + minutes + " " + postMeridiem;
        time.innerHTML = currentTime;
    }
}

// Random color generator
let colorList = ["palevioletred", "cadetblue", "chocolate", "coral", "cornflowerblue"]
let randomNumber = Math.floor(Math.random() * colorList.length);

function changeColor() { //Change color of background
    if (document.body.style.backgroundColor != colorList[randomNumber]) {
        document.body.style.backgroundColor = colorList[randomNumber];
    } else {
        document.body.style.backgroundColor = "#33475B";
    }
    
}
let javaCode = `// window.onload = function() {
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
    //     console.log('I was pressed $ {++clickCount} times by now');
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
    // Go through performances on devtools https://developer.chrome.com/docs/devtools/evaluate-performance/`

window.onload = () => {
    // Give format date month/date/year
    date = document.getElementById("todaysDate");
    date.addEventListener("click", switchDate);
    date.innerHTML = formatNumberDate;

    // Time clock
    time = document.getElementById("time");
    time.innerHTML = currentTime;

    // Random Color
    randomColor = document.getElementById("randomColor");
    randomColor.innerHTML = colorList[randomNumber];
    randomColor.addEventListener('click', changeColor);

    document.getElementById("javascriptCode").innerHTML = javaCode;

    // javascript Code
}

