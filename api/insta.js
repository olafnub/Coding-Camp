'use strict'

const accessToken = '{your-access-token}'; //Replace everything inside the string with your token -> remove all of {your-access-token}
const url = 'https://graph.instagram.com/me/media?fields=caption,accounts&limit=100&access_token=' + accessToken;

let ul = document.querySelector('ul');
let list = "";
let words = "";
const updateSuccess = function(success) {
    
    for(let i = 0; i < success.data.length; i++) {
        if (success.data[i].caption === undefined) { // this was not shown in the video but it skips the undefined captions aka empty captions
            i++;
        } else {
            list = document.createElement('li');
            words = document.createTextNode(success.data[i].caption);
            list.appendChild(words);
            ul.appendChild(list);
        }
    }
    console.log(success);
}

const updateFail = function(error) {
    console.log(error);
}

const checkResponse = function(response) {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

const createRequest = function(url, success, tryAgain) {
    fetch(url)
    .then((response) => checkResponse(response))
    .then((data) => success(data))
    .catch((error) => tryAgain(error));
}

createRequest(url, updateSuccess, updateFail);