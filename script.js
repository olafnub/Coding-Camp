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
    case "13":
        hours = "1";
        break;
    case "14":
        hours = "2";
        break;
    case "15":
        hours = "3";
        break;
    case "16":
        hours = "4";
        break;
    case "17":
        hours = "5";
        break;
    case "18":
        hours = "6";
        break;
    case "19":
        hours = "7";
        break;
    case "20":
        hours = "8";
        break;
    case "21":
        hours = "9";
        break;
    case "22":
        hours = "10";
        break;
    case "23":
        hours = "11";
        break;
    case "0":
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
let colorList = ["palevioletred", "azure", "aliceblue", "antiquewhite", "aquamarine", "cadetblue", "burlywood", "chocolate", "coral", "cornflowerblue"]
let randomNumber = Math.floor(Math.random() * colorList.length);

function changeColor() { //Change color of background
    if (document.body.style.backgroundColor != colorList[randomNumber]) {
        document.body.style.backgroundColor = colorList[randomNumber];
    } else {
        document.body.style.backgroundColor = "white";
    }
    
}
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
}