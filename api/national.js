'use strict';

// const smartysUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=154784897638039671&street=1428%20Post%20Aly&city=Seattle&state=WA&candidates=10';
const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=154784897638039671&candidates=10';

const parksUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=UcVDVJMom5EElTcNq6lbrNbSyC6qgKd40XhtfkfR';
const addressField = document.querySelector('#address');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
//const $zipField = $('#zip');
const zipField = document.querySelector('#zip');
const parkThumb = document.querySelector('#specials h2 img');
const parkA = document.querySelector('#specials h2 a');
const parkP = document.querySelector('#specials p')
const parkSection = document.querySelector("#specials");


const smartyUpdateUISuccess = function(data) {
  const parsedData = JSON.parse(data);
//  console.log(parsedData);
  const zip = parsedData[0].components.zipcode;
  const plus4 = parsedData[0].components.plus4_code;
//  console.log(zip + '-' + plus4);
  zipField.value = zip + '-' + plus4;
};
const parkUpdateUISuccess = function(data) {
  const parsedData = JSON.parse(data);
  parkThumb.src = "https://www.nps.gov/theme/assets/dist/images/branding/logo.png";
  parkSection.classList.remove('hidden');

  var link = document.createTextNode(parsedData.data[0].fullName);
  parkA.append(link);
  parkA.title = parsedData.data[0].fullName;
  parkA.href = parsedData.data[0].directionsUrl;
  console.log(parsedData);

  parkP.textContent = parsedData.data[0].description;

}
const smartyUpdateUIError = function(error) {
  console.log(error);
};
const parkUpdateUIError = function(error) {
  console.log(error);
};

const responseMethod = function(httpRequest, succeed, fail) {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      succeed(httpRequest.responseText);
    } else {
      fail(httpRequest.status + ': ' + httpRequest.responseText);
    }
  }
}

const createRequest = function(url, succeed, fail) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest, succeed, fail));
  httpRequest.open('GET', url);
  httpRequest.send();
};

const checkCompletion = function() {
  if (addressField.value !== '' &&
      cityField.value !== '' &&
      stateField.value !== '') {
        const requestUrl = smartyUrl + 
          '&street=' + addressField.value + 
          '&city=' + cityField.value + 
          '&state=' + stateField.value;
        createRequest(requestUrl, smartyUpdateUISuccess, smartyUpdateUIError);
      }
}
//createRequest(smartyUrl);
createRequest(parksUrl, parkUpdateUISuccess, parkUpdateUIError);

addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);