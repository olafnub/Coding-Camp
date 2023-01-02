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

window.onload = () => {
    // Give format date month/date/year
    date = document.getElementById("todaysDate");
    date.addEventListener("click", switchDate);
    date.innerHTML = formatNumberDate;

    // Give format for time

}