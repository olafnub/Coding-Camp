let message = "Hello!"; //store the string "Hello!" in the variable named message

// alert(message);

let user = 'John';
let age = 25;
let messages = 'hello';

// let user='john', age=25, messages='hello';

let hello = "Hello World!";
let replacement = hello;
// alert(replacement);

let $ = 3;
let _ = 1;

// alert($ + _);

const myBirthday = '12.05.2002';

const COLOR_RED = "#F00";
const COLOR_GREEN = "0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
// alert(color);

var admin;
var name = "john";
admin = name;
// alert(admin);

let planetEarth = "earth";
let currentUser = "user";

const myInt = 5;
const myFloat = 6.77721312;
// myInt;
// myFloat;

typeof myInt;
typeof myFloat;

// console.log(myFloat.toFixed(0));

let myNumber = 74;
while (myNumber < 100) {
   myNumber += 3;
}
// console.log(
//     myNumber
// );

let myString = "74";
myString = Number(myString);
// console.log(myString + 2);

let NUMBER_FOUR = 4;
let NUMBER_FIFTY = 50;
// console.log(11%5);
// console.log(NUMBER_FIFTY!==50*3);
let NUMBER_FIVE = 5;

// let answerKey = NUMBER_FIFTY = NUMBER_FIVE * 4;
// console.log(answerKey);

let numberOne, numberTwo, numberThree;
numberTwo = 5;


numberOne = numberTwo = numberThree = 2 + 2;
// console.log(numberOne + " " + numberTwo);

let q = 2;
q = q + 5;
q = q + 5;

// console.log(q);

let multiplyEqualsTwo = 2;
// multiplyEqualsTwo *= 2+5;

// console.log(multiplyEqualsTwo);
// ++multiplyEqualsTwo;

// console.log(multiplyEqualsTwo);

let counter = ++multiplyEqualsTwo;

// console.log(counter);

counter = 3 * ++multiplyEqualsTwo;
// alert(counter);
counter++;

for (a = 1, b = 3, c = a + b; a < 10; a++) {
   // console.log(a);
}

let alphabet = 1;

let denominator = ++alphabet;

// console.log(alphabet + " " + denominator);


// 1. "10"
// 2.  1
// 3.  false , NaN (true + false = 1)
// 4.  2
// 5.  6
// 6.  9px
// 7.  $45
// 8.  2
// 9.  NaN
// 10. -9 5
// 11. NaN -14
// 12. null
// 13. undefined
// 14. NaN

// alert(\t);

// let zimbwawe = prompt("First Number", 1);
// let charqiti = prompt("Second Number", 2);

// alert(+zimbwawe + +charqiti);

let andrew = 10;
// console.log(andrew);

let beReal = 7 * andrew;
// console.log(beReal);

// console.log(19) / 77);

let max = 57;
let actual = max - 17;
let percentage = actual / max;

var newMessage = "42";
// console.log(newMessage-2);

if (true) {
   var testVariable = true;

}
// alert(testVariable);

for (var iAn = 0; iAn <= 10;) {
   var one = 1;
   iAn++;
}
// console.log(one);
// console.log(iAn + " ");

for (let iBn = 0; iBn <= 10; iBn++) {
   // console.log(iBn);
}

function sayHi() {
   if (true) {
      var phrase = "Hello";
   }
   alert(phrase);
}

// sayHi();
// alert(phrase); doesn't work because function (sayHi() wasn't called for)

var characterName = "Peter";
var characterName = "John";

// alert(characterName);

// let playName = "Peter";
// let playName = "john";

// alert(playName);


function sayHi() {
   var phrase;
   alert(phrase);
   phrase = "Hello";
}
// sayHi();

// (function() {

//     var importantMessage = "Hello World";

//     alert(importantMessage);
// })();

// (function() {
// alert("Parathesis around the function");
// })();

// (function() {
//     alert("Paranthesis around the whole thing");
// }());

// !function() {
//     alert("Bitwise NOT operator, starts the function");
// }();

// +function() {
//     alert("Unary plus starts the expression")
// }();

// (function sayHello() {
//     alert("Say Hello");
// })();

// alert(+true);

let noError = 12;
noError = 12.25;

// alert(NaN ** 0);
let tumBug = "Jumbug";

// alert(`Name is, ${tumBug}`);

let nameAge = true;
let ageName = false;

nameAge = "anthony";
ageName = "Joe";

let isGreater = 4 > 1;

let valueNull = null;
let unAssigned;

// document.add("bob").innerHTML=valueNull;

// let alope = ;

// alert(typeof alope);

const bigMouth = 'I\'ve got no right to take my place...';
// console.log(bigMouth);

// Concatentation, back ticks `${const}`
const birthName = "Chris";
const greeting = `Hello, ${birthName}`;
const greetingTwo = "Hello! " + birthName;
const greetingTogether = `${greeting} ${greetingTwo}`;
const numberTesting = NUMBER_FIFTY;
const numberTestingT = NUMBER_FOUR;

const songName = "Coast";
const myRating = 9;
const maxRating = 10;
const output = `The song ${songName} is amazing and I give it a rating of
${myRating}/${maxRating}, a score of ${myRating / maxRating * 100}%`;

// console.log(output);

// window.onload = function() {
// let nas = "lilnasX";
// document.getElementById("textCount").innerHTML = nas.length;
// }

window.onload = function () {
   let doorDash = "Papa John's, JJ's Poke, Frank & Andreas";
   let doorDashSplit = doorDash.substr(13, 9);
   document.getElementById("foodWord").innerHTML = doorDashSplit;

   let companyIntroduction = "Hey, welcome to Microsoft!";
   let companyIntroductionReplace = companyIntroduction.replace("Microsoft", "Google");
   document.getElementById("companyName").innerHTML = companyIntroductionReplace;

   let catVsDog = "Cats are amazing, Everyone love Cats";
   catVsDog = catVsDog.replaceAll(/CATS/ig, "Dogs");
   document.getElementById("catAndDog").innerHTML = catVsDog;

   let introButton = document.getElementById("intro");
   let introPara = document.getElementById("intro-p");

   introButton.addEventListener("click", myIntro);
   function myIntro() {
      introPara.textContent = introPara.textContent.toUpperCase();
   }

   let lotsOfSpace = "     HELLO WORLD!      ";
   let spaceTrim = lotsOfSpace.trim();
   document.getElementById("spacing").innerHTML =
      "length= " + lotsOfSpace.length + "<br> trimmed length = " + spaceTrim.length;

   let grape = "grape";
   let grapeFruit = grape.padEnd(10, "Fruit");
   document.getElementById("fruit").innerHTML = grapeFruit;

   let waterCup = "water cup";
   document.getElementById("cup").innerHTML = waterCup +
      "--" + waterCup.charAt(0) + "'s unicode is " +
      waterCup.charCodeAt(0) + "<br>" + waterCup[1] +
      "'s uncode is " + waterCup.charCodeAt(1);

   let journalTitles = "Diary, {user}'s Diary, Public Diary, My Book";
   let arrayList = journalTitles.split(",");
   document.getElementById("journal").innerHTML = arrayList[1];

   let myJournal = arrayList[0];
   let myArr = myJournal.split("");
   //    alert(myJournal);
   let journalSpace = "";
   for (let i = 0; i < myArr.length; i++) {
      //    alert(myArr[1]);
      journalSpace += myArr[i] + "&nbsp;&nbsp;";

   }
   document.getElementById("journal-title").innerHTML = journalSpace;

   let bagAmount = 2;
   let bagString = new String(bagAmount);
   //    console.log(typeof bagString);

   let a = "a";
   let b = "b";

   function greaterOrLess() {
      if (a < b) {
         console.log(`${a} is less than ${b}`);
      } else if (a > b) {
         console.log(`${a} is greater than ${b}`);
      } else {
         console.log(`${a} is equal to ${b}`);
      }


   }
   function areEqualCaseInsensitive() {
      let doTheyMatch = waterCup.toLowerCase() === myJournal.toLowerCase();
      console.log(doTheyMatch);
   }

   let longString = "You don't need me As much as I need you \
   As much as I need you Take it or leave it \
   'Cause you know that's the truth 'Cause you \
   know that's the truth";
   document.getElementById("1036Lyric").innerHTML = longString +
      "<br> Checking if the song has the word \"love\" ... " +
      longString.includes("love") + "<br> Though this \
   song does include \"truth\" - starting from 0 \
   it is " + longString.toLowerCase().indexOf("truth") +
      "<br> The last \"truth\" is " + longString.toLowerCase().lastIndexOf("truth") +
      "<br> The length of the text is " + longString.length;


   let compareChar = '2'.localeCompare('1');
   // console.log(compareChar);

   let compareWords = "sing".localeCompare("bring");
   // console.log(compareWords);

   let arrayFlowers = ["dandelions", "daisys", "floral", "blue flowers"];
   let arrangedFlowers = arrayFlowers.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
   //    console.log(arrangedFlowers);

   let wordRepeat = /[A-Z]/ig;
   //    console.log(longString.match(wordRepeat));

   let whatWord = /(?<song>Take|around) it or leave/;
   let thisWord = longString.match(whatWord);
   document.getElementById("findWord").innerHTML = thisWord;

   //    I WILL GET THROUGH https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
   // start over

   let myNameIs = "Speed, Andy, Kolly";
   //    console.log(String.fromCodePoint(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07));


   // console.log(String.raw`Hi\n${2+3}!`);
   // console.log(`Hi\n${2+3}!`);
   // console.log(String.raw`my name is \${myNameIs}!\${companyIntroduction}`);
   // console.log(`Hi, my name is \${myNameIs}`)

   let wordSplit = String.raw({ raw: 'test' }, "<br>");
   // console.log(wordSplit);

   let html = (strings, ...values) => String.raw({ raw: strings }, ...values);
   // let html = String.raw;
   let doc = html`<canvas>\n</canvas>`;
   //  console.log(doc);

   let myNameIsLength = myNameIs.length;
   // console.log(myNameIsLength);

   let buildName = "";
   for (i = 0; i < myNameIsLength; i++) {
      buildName += myNameIs.charAt(i);
   }
   // console.log(buildName);
   // length does not need ()

   function getCharacterLength(str) {
      return [...str].length;
   }
   // console.log(getCharacterLength("A\uD87E\uDC04Z"));
   // console.log(charCodeAt());

   let emojiName = "😄";
   // console.log(emojiName.length);

   let index = 5;
   let useIndex = myNameIs.at(index);
   // console.log(`Starting from 0 with an index of ${index} we find ${useIndex}`);

   // return last character of a string

   let yellowSign = "yellow-sign";
   let NUMBER_TEN = "10";
   function returnLast(bob) {
      return bob.at(-1);
   }
   function returnFirst(deez) {
      return deez.charAt(0);
   }
   // console.log(returnFirst(yellowSign));
   // console.log(returnFirst(NUMBER_TEN));
   // alert(myNameIs);

   let strName = "A\uD87E\uDC04Z";
   // console.log(strName);
   // for(i=0; i<strName.length; i++) {
   //    let chr;
   //    [chr, i] = getWholeCharAndI(strName, i);


   //    console.log(chr);
   // }

   // function getWholeCharAndI(str, i) {
   //    let code = str.charCodeAt(i);

   // }

   let strNameSpell;
   for (i = 0; i < strName.length; i++) {
      strNameSpell += strName.charAt(i);
   }
   let strNameOutput = `strName = ${strName}\nstrNameSpell = ${strNameSpell}\n`
      + strName.charAt(0) + strName.charAt(1) + strName.charAt(2) + strName.charAt(3) + strName.charAt(4);
   // console.log(strNameOutput);

   let STRING_OBJECT = new String("Hello");
   // console.log(typeof STRING_OBJECT);
   // alert(STRING_OBJECT);

   let numberWord = String.fromCodePoint(9731, 9733, "9842", 0x2F804);
   let UNICODE_H = String.fromCodePoint(0x48);
   let AZ = String.fromCodePoint(65, 90);
   // console.log(String.fromCodePoint(0x1F303));
   // let stringObject = String.fromCodePoint(STRING_OBJECT);
   // console.log(object.fromCodePoint(65, 65));
   // let greetings = "HELLO"
   // console.log(UNICODE_H.toLowerCase());
   // console.log(numberWord);

   let printFile = "C:\Development\profile\aboutme.html";
   let printFileRaw = String.raw`C:\Development\profile\aboutme.html`;
   // let printFileWord = `C:\Development\profile\aboutme.html`;
   // console.log(printFileRaw);
   // console.log(String.raw(strings, ...substitutions));
   // console.log(String.raw(`templateString`));
   // console.log(printFileWord);
   let rawArray = { raw: ['food', 'tell', 'foo'] };
   // let getArray = { String: ['food', 'tell', 'show']};
   // console.log(rawArray);
   // console.log(getArray[0]);
   // console.log(`4+5=${4+5}`);
   // console.log(String.raw`4+5=${4+5}`);
   // console.log(`\u2605`);
   // console.log(String.raw`\u2605`);
   // console.log(`Monday\nTuesday\nWednesday\nThursady`);
   // console.log(String.raw`Monday\nTuesday\nWednesday\nThursday`);
   // console.log(String.raw`${strName}`);

   function singleLineString(strings, ...values) {
      // Interweave the strings with the
      // substitution vars first.
      let output = '';
      for (let i = 0; i < values.length; i++) {
         output += strings[i] + values[i];
      }
      output += strings[values.length];

      // Split on newlines.
      let lines = output.split(/(?:\r\n|\n|\r)/);

      // Rip out the leading whitespace.
      return lines.map((line) => {
         return line.replace(/^\s+/gm, '');
      }).join(' ').trim();
   }
   function getLength(str) {
      return str.length;
   }
   function getCharaLength(str) {
      return [...str].length;
   }
   let functionCode = "A\uD87E\uDC04Z"

   function returnFunctionCode() {
      return functionCode;
   }
   // alert(getCharaLength(functionCode));

   let getCharaReturn = getCharaLength(functionCode);
   let getLengthReturn = getLength(functionCode);

   // alert(getLengthReturn);

   // console.log(singleLineString`${getCharaReturn}`);
   //  console.log("print " + functionCode
   //  + "\ngetCharaLength = " + singleLineString`${getCharaReturn}` 
   //  + "\ngetLength = " + singleLineString`${getLengthReturn}` 
   //  + "\nreturnFunctionCode = " + singleLineString`${returnFunctionCode().length}`);
   // alert(getLengthReturn);

   function getLastC(str) {
      return str.at(-1);
   }

   let myName = "Shady";
   // console.log(`The last letter in ${myName} is ` + getLastC(myName));

   let introductionSpeech = "Have you ever gone to the mall and bought a shower head before?";

   function findWord(str, searchWord) {
      return str.includes(searchWord) ? 'is' : 'is not';
   }
   let wordInput = "you";
   // console.log(findWord(introductionSpeech, wordInput));

   function lilNasLyric() {
      let dontWantItLyrics = `If I say so, know they gon' ride <br>
   I know G's, and you know they ain't nice <br>
   If I pop up, I'ma want it, but I get by <br>
   Tell the devil I can't have him inside (woah) <br>
   Tell the reaper he don't want it, he don't want it <br>
   Oh, I know everything's gonna be alright <br>
   Tell the reaper he don't want it, he don't want it <br>
   Oh, I know everything's gonna be alright`;

      document.getElementById("lilNas").innerHTML = dontWantItLyrics;


      let userFindLyric = prompt("Search lyric in chorus of 'Don't Want It' By Lil NasX");
      alert("Check below to see if your word is there");

      let returnLyricStatement = findWord(dontWantItLyrics, userFindLyric);

      let returnLyricP = `The word you're searching for "${userFindLyric}" ${returnLyricStatement} in the chorus`;
      document.getElementById("searchedWord").innerHTML = returnLyricP;

   }
   // lilNasLyric();

   function endsWithFunction() {
      let pillowDescription = "The pillow has a white cover";

      let checkEndsWith = pillowDescription.endsWith("cover");
      let checkEndsWithNumber = pillowDescription.endsWith("cove", 27);
      console.log(checkEndsWith + `\n` + checkEndsWithNumber);

      // endsWith() number starts at 1

   }
   // endsWithFunction();

   function returnIndexOf() {
      const userPhone = 'i-phone-8ee';
      const findLetter = 'e';
      let findNonLetter = 'c';
      let amountOfLetters = 0;
      let returnFindLetter = userPhone.indexOf(findLetter);

      while (returnFindLetter !== -1) {
         amountOfLetters++;
         returnFindLetter = userPhone.indexOf(findLetter, returnFindLetter + 1);

      }
      // return userPhone.indexOf(findLetter) + " " + userPhone.indexOf(findNonLetter);
      return amountOfLetters;


   }
   // console.log(returnIndexOf());

   function returnLastIndexOf() {
      let oceanParagraph = 'The ocean has a lot of pollution, mainly filled with plastics. \
      These platics include objects that aren\'t supposed to be in the ocean: bottles, water bottles, \
      plastic cups, and maybe even gold watches';
      let documentWord = "bottle";
      return oceanParagraph.lastIndexOf(documentWord);
   }
   // console.log(returnLastIndexOf());

   // function returnLocale() {
   //    let word1 = "10:35";
   //    let word2 = "10:35";

   //    return word1.localeCompare(word2);
   // }
   // console.log(returnLocale());

   // var userWordOne = "SSSSYS";
   // var userWordTwo = "SSSSZ";

   // function whichWordComesAfter() {
   //    return biggerWord = userWordOne.localeCompare(userWordTwo);
   // }
   // console.log(`Which Word Comes After? ${userWordOne} or ${userWordTwo}
   // return 1 if ${userWordOne} comes after, return 0 if ${userWordTwo} comes after \n
   // RETURNING: ` + whichWordComesAfter());

   // const groceryItems = ["tomato", "water", "computer", "google"];
   // const accentWords = ["réservé", "Cliché", "communiqué", "café", "Adieu", "AN", "an"];
   // groceryItems.sort((a,b) => a.localeCompare(b));
   // accentWords.sort((a,b) => a.localeCompare(b, {ignorePunctuation: true}));
   // console.log(groceryItems);
   // console.log(accentWords);

   // "2">"10" 2<10


   // MATCH - Used to match to see if certain characters / strings are in needed match

   //    const CHEEZ_IT = 'test1test2test3';
   //    // if (CHEEZ_IT.match('cheese') == 'cheese') {
   //    //    alert('true!');
   //    // }
   //    const regexp = /t(e)(st(\d?))/g;
   //    const array = [...CHEEZ_IT.matchAll(regexp)];

   //    alert(array[0] + " " + array[1] + " " + array[2]);
   //    // alert(CHEEZ_IT.matchAll('cheese'));



   // NORMALIZE | Code Point UTF-8 = \u0000 , U+0029=\u0029=) https://www.utf8-chartable.de
   // const dayDream = 'DAYDREAM';
   // // capitalizatino doesn't matter
   // let Rocket = '\u002c';
   // let Bruv = '\u0029'
   // let testThis = ')' == Bruv;
   // const squiglyN = '\u00F1';
   // const squiglyN2 = '\u006E\u0303';
   // let squiglyTest = squiglyN == squiglyN2;
   // // Also returns false for .length
   // let normalizeTheTwo = squiglyN2.normalize('NFC');
   // // Returns true for .length
   // // alert(squiglyN == normalizeTheTwo);
   // // alert(squiglyTest);
   // // alert(testThis);
   // // alert(Rocket);

   // .padEnd() & .padStart() - adds # of character string to end of called variable starting from 0.
   // const sometimesIts = "Hopefully";
   // // will cut off if the word added is over x amount input added onto variable
   // let rightAbout = sometimesIts.padEnd(20, "Y");
   // alert(rightAbout);
   // const happy = "HAPPY";
   // let onceIn = happy.padStart(10, 'I am ');
   // alert(onceIn);
   // .repeat(); repeats the string
   // const samSmith = 'FRIEND ';
   // alert('Never love you like a ' + `${samSmith.repeat(3)}`);
   // alert('2'.repeat(3))

   // .replace() & .replaceAll() - must use /g for regexp
   // const planet = 'The earth rotates on a y e axis Direction and diREction is a galaxy';
   // replaces whole words and not one characters in words, except for the first search
   // let replaceE = planet.replace('e', 'a');
   // let regexpo = /direction/gi
   // /g is for global - all words | /i is for insensitive 
   // let actualReplaceE = planet.replace(/(e)/, 'bye');
   // let actualReplaceE2 = planet.replace("e", "bye");
   // let theActualSentence = 'The linkedin Profile picture was then replaced with all other LinkedIn profiles';
   // let regex = /linkedin/ig;
   // function safeRedacted(text, name) {
   //    return text.replaceAll(name, '[Redacted]');
   // }
   // let unredactMessage = 'The player 2pkas@ was at practice when they captured him';
   // alert(safeRedacted(unredactMessage, '2pkas@'));
   // alert(theActualSentence.replaceAll(regex, 'Bob'));
   // alert(actualReplaceE2);
   // alert(planet.replace(regexpo, 'bruv'));
   // alert(replaceE);

   // search() - returns the number starting from 0 of what you're looking for
   // const babyYour = 'The@ baby wa. his Constant';
   // const tregex = /[^\w\s]/g;
   // const findCapital = /[A-Z]/;
   // alert(babyYour[2]);
   // alert(babyYour.search(findCapital));

   // .slice()
   // const catSleeps = 'The cat sleeps on the bed';
   // const CAT = /CAT/ig;
   // // const CATString = 'cat';
   // let constructedWord = "";
   // function cutWord(sentence, word) {
   //    let wordLength = word.length;
   //    let searchWordNumber = sentence.search(word);
   //    // alert(searchWordNumber);

   //    constructedWord = sentence.slice(0, searchWordNumber);
   //    constructedWord += sentence.slice(searchWordNumber+wordLength, sentence.length);
   //    return constructedWord;
   // }
   // alert(cutWord(catSleeps, CAT));
   // const heyThis = /hi/ig;
   // let stringifyThis = JSON.stringify('hi'.match(heyThis));
   // let stringThisNow = JSON.stringify(heyThis);
   // alert(stringifyThis.length);
   // alert(stringThisNow);

   // split() - Splits everything into an array
   // const cffIt = 'Feeling like falling in love';
   // let findSplitWord = cffIt.split(' ');
   // let findSplitChar = cffIt.split('');
   // alert(findSplitChar[3]);
   // function myVersionOfThis(sentence, splitter) {
   //    let splitThis = sentence.split(splitter);
   //    alert(splitThis.join('/'));
   // }
   // function countThis(stringGiven, remove) {
   //    const pinno = stringGiven.split(remove);
   //    alert(pinno.length);
   // }
   // let sentenceForThat = 'The sentence for that';
   // let monthsOf = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
   // let splitChar = ' ';
   // let commaSplit = ',';
   // let splitChart = 'Like';
   // let splitted = splitChart.split(splitChar);
   // alert(splitChar.split(spl));
   // myVersionOfThis(sentenceForThat, splitChar);
   // countThis(monthsOf, commaSplit);
   
   // startsWith('character', posiitong);
   // const morningSunshine = 'This saturday is a good day';
   // alert(morningSunshine.startsWith('T'));
//    let randomLength = 'The word of this determines good day or better day';
//    let answerBeMe = '';
//    if (randomLength.length%2 == 0) {
//    answerBeMe = 'good';
// } else {
//    answerBeMe = 'better';
// }
// let sentenceBeMe = `${answerBeMe} day today`;
// if (sentenceBeMe.startsWith('g')) {
//    alert('today is a good day');
// } else {
//    alert('today is a better day than yesterday');
// }

// substring() - basically splice the sentence with numbers
   // const modzilla = 'gozilla';
   // // alert(modzilla.substring(3,7)); //illa
   // // alert(modzilla.substring(3, 10)); //illa
   // alert(modzilla.substring(2, 5));
   

   // .toLocaleLowerCase() & .toLocaleUpperCase() different uses of 'tr' and 'en-US'
   // let returnThis = '\u0130'.toLocaleLowerCase('tr') === 'i'; //true
   // let returnThisI = '\u0130'.toLocaleLowerCase('en-US') === 'i'; // false
   // alert(returnThisI);
   // let capitalizeThis = 'i\u0307';
   // alert(capitalizeThis);
   // alert(capitalizeThis.toLocaleUpperCase());
   // alert(capitalizeThis.toUpperCase());

   // .toString();
   // const stringThis = new String('Heyllo');
   // const toStringThis = stringThis.toString();
   // alert(stringThis);
   // const stringObj = new String('foo');
   // alert(stringObj[0]);
   // console.log(toStringThis);
   // let brownsChair = new Object('heyYall');
   // let convertBrownsChair = brownsChair.toString();
   // let arrayChairs = ['Chair 1', ' Chair 2', ' Char 3'];
   // let stringChairs = arrayChairs.toString();
   // let numberChairs = 1 + 3;
   // let stringNumberChairs = numberChairs.toString() + 2;
   // alert(stringNumberChairs + ' ' + typeof stringNumberChairs);

   // String.prototype.toUpperCase() & .toLowerCase() 
   // let pillowBrand = 'Mypillow';
   // const letUpperCase = String.prototype.toUpperCase.call(pillowBrand);
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   // const letLowerCase = String.prototype.toLowerCase.call({
   //    toString() {
   //       return pillowBrand;
   //    },
   // });
   // alert(letLowerCase);

   // .trim() && .trimStart() && .trimEnd()
   // let lotsOfWhiteSpace = '     LET ME KNOW       ';
   // const removeSpace = lotsOfWhiteSpace.trim();
   // const removeRightSpace = lotsOfWhiteSpace.trimEnd();
   // const removeLeftSpace = lotsOfWhiteSpace.trimStart();
   // String.prototype.trimLeft.name ==='trimStart';
   // String.prototype.trimRight.name ==='trimEnd';
   // alert(removeSpacing);

   // .valueOf()  - basically same as stringOf, turns string objects into string
   // let dudu = new String('cat');
   // console.log(dudu.valueOf());

   // String.prototype[@@iterator]()
   // const strs = 'A\uD835\uDC86B\uD835\uDC69C\uD835\uDC6A';
   // for (const v of strs) {
      // alert(v);
      // console.log(v);
   // }
   // const numberCount = '12345';
   // const thisAndThat = 'this and that';
   // for (const x of thisAndThat) {
   //    if (x == 't') {
   //    console.log(x);
   // } else {
   //    console.log('none');
   // }
   // }
   // const strsIter = strs[Symbol.iterator]();
   // console.log(strsIter.next().value);
   // console.log(strsIter.next().value);
   
   //  Done with https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator

   // Comparing https://javascript.info/comparison
   // only alerts the false and not the string
   // alert('is false' + 1 == 0);
   // let hennepin = 0;
   // let county = '0';
   // alert(Boolean(hennepin));
   // alert(Boolean(county));
   // alert(hennepin == county);
   // alert(0 == false); // Because 0 false is converted to 0 and so is ''==false -> true | operands of different types are converted to 0 if empty
   // alert(0 === false); //causes no conversion
   // let numberCoco; // doesn't get converted to 0
   // alert('' == 0);
   // alert(0 == null); // returns false, the null operator doesn't get converted
   // alert(null >= 0); // returns true because when using comparison, it converts to a number
   // alert(null > 0); //returns false 
   // alert(undefined == 0); //undefined compared to any number is false
   // alert(undefined < 1); //returns false because undefined is converted to NaN
   // alert(null == undefined); //couple, only these two equal each other except for ===

   // Conditionals - if, else, if else https://www.w3schools.com/js/js_if_else.asp
   // let greetingsDay = '';
   // if (new Date().getHours() < 10) {
   //    greetingsDay = 'Good Morning Today!';
   // } else if (new Date().getHours() < 20) {
   //    greetingsDay = 'Good noon Today!';
   // }
   // else {
   //    greetingsDay = 'Good night!';
   // }
   // alert(greetingsDay);

   // Logical Operators 
   // alert(a || b); || (OR) 
   // alert(true || false) // true overcomes everything except when both operands are false
   // alert(false || false || true); // returns true
   // 1 - true , 0 - false
   // box office hours
   // let hour = 10;
   // let day = 'saturday';
   // let isWeekend = false;
   // if (day.startsWith('s')) {
   //    isWeekend = true;
   // }
   // if (hour < 9 || hour > 17 || isWeekend) {
   //    alert('box office is closed');
   // } else {
   //    alert('Welcome!');
   // }

   // Using ||
   // if (1 || 0) {
   //    alert('worthy!');
   // }
   // alert(0 || 1 || 1);
   // alert(undefined || null || 'bruh');
   // alert('bruh' || undefined || null);
   // let firstName = '';
   // let lastName = '';
   // let nickname = 'SuperCoder';
   // alert(firstName || lastName || nickname || 'Anonymous'); //Checks each for false and returns the last variable if all are false
   // true || alert('no printed');
   // false || alert('printed');
   // alert(false || true) //will always reutrn true if it is in a ||

   // Using &&
   // alert(true && false); //returns false, will always return false with false in && statement
   // alert(true && true); //returns true
   // if(1 && 0) {
   //    alert('This won\'t return');
   // }
   // alert(1 && 0); // returns the first false
   // alert(null && 5);
   // alert(1 && 5);
   // alert(1 && 2 && null && 3); //returns null
   // alert(1 && 2 && 3); returns the last expression 
   // && is higher than ||
   // alert(a && b || c && d) //basically (a&&b) || (c&&d)

   // Using ! oppsosite basically/not. ! is the highest and will always goes before && ||
   // alert(!true);
   // alert(!0);
   // alert(!!true); //undos the !, basically used to convert statements to booleans
   // alert(!!'Not an empty string'); 
   // alert(!!null);
   // alert(Boolean('this is not a string'));
   // alert(Boolean(null));

   // Practice problems
   // alert(null || true || 2); // returns true
   // alert(Boolean(-1)); //0 is false, anything besides that is true
   // alert(alert(1) || 2 || alert(3)) //returns 1 and 2
   // alert(1 && null && 2); //returns null because it's the first false
   // alert(alert(1) && alert(2)); //returns 1 and then undefined
   // alert(alert(1) && false);
   // alert(Boolean(alert(0)));
   // alert(0 && 1);
   // alert((alert(false) && false && 'hi')); //will always alert the first alert because it reads from left to right, then realize it's a false function and will alert an undefined
   // alert(null || 2 && 3 || 4); //returns 3 because && comes before || -> returns the first true which is 3 because && returns the last number which is 3
   // alert( 2 && 1 && 4); returns 4 because it's an and, it will return the last true because it looks for false
   // alert(2 || 3 || 4); //returns 2 because it's the first true
   // let myAge = 12;
   // if (myAge >= 14 && myAge <= 90) {
   //    alert('You are between 14 && 90');
   // }
   // if (myAge <= 14 && myAge >=90) {
   //    alert('You are younger than 14 && older than 90 using <= variant')
   // } else {
   //    alert('Hi');
   // }
   // if (!(myAge >= 14) && !(myAge <= 90)) {
   //    alert('You are ! between 14 && 90 using ! variant');
   // } else {
   //    alert('Hi');
   // }
   // GENU = in between 14 and 90
   // GENP = younger than 14 or older than 90
   // if (myAge >= 14 && myAge <=90) {
   //    alert('you are apart of GENU');
   // } 
   // // Same two ways of doing it
   // else if(myAge < 14 || myAge > 90) {
   //    alert('you are part of GENP');
   // } else if(!(myAge>=14 && myAge <=90)) {
   //    alert('You are apart of GENP');
   // }
   // if (0 || 0) alert('hi'); if (1 || 0) runs

   // Check the login
   // let password = 'TheMaster';
   // let userInput = prompt('write your login');
   // if (userInput == 'Admin') {
   //    let inputPassword = prompt('password');

   //    if (inputPassword == password) {
   //       alert('Welcome!');
   //    } else if (inputPassword == '' || inputPassword == null) {
   //       alert('Canceled')
   //    } else {
   //       alert('Wrong Password');
   //    }
   // } else if (userInput == '' || userInput == null) {
   //    alert('Canceled');
   // } else {
   //    alert('I don\'t know you');
   // }
         // Used to check what [Esc] Returns
         //  let alertPrompt = prompt('Enter you name');
         // alert(alertPrompt);

   // Check weather
   let temperature = 76;
   let weather = document.querySelector('select');
   let paraWeather = document.getElementById('clotheWear');
   weather.addEventListener('change', changeClothes);
   function changeClothes() {
      const weatherChoice = weather.value;
      if (weatherChoice === 'cold') {
         paraWeather.textContent = 'WINTER JACKET';
      } else if(weatherChoice ==='chilly') {
         paraWeather.textContent = 'You can wear long sleeve';
      } else if(weatherChoice ==='warm') {
         if (temperature <= 70) {
            paraWeather.textContent = `It is ${temperature} outside, which is a billy chilly`;
         } else if (temperature > 71) {
         paraWeather.textContent = `You can wear short sleeve, ${temperature}`;
      }
      } else if(weatherChoice ==='hot') {
         paraWeather.textContent = 'T-SHIRTS';
      } else {
         paraWeather.textContent = '';
      }
   }

   // Play
   // let cheddar = 'cheese';
   // if(cheddar) {
   //    alert('curious');
   // } else {
   //    alert('false curious');
   // }
         // Test to see if strings are true or false
         // if ('hi' && 0) {
         //    alert("TRUE!");
         // }
   // let shoppingDone = false;
   // if (shoppingDone) {
   //    alert('Allowance = $50');
   // } else {
   //    alert('Allowance = $10');
   // }
   // let loggedIn = true;
   // let passcode = '123';
   // let newMember = 'Welcome! To your First Day @ APPLE';
   // if (passcode == '02MR_gkt' || loggedIn) {
   //    alert('Welcome back');
   // } else {
   //    alert(newMember);
   // }

   // Introductory to switch , first time using switch , have used if else statements in java higihschool class
   let getPhone = document.querySelector('#iphone');
   let writePhone = document.querySelector('#phoneGen');

   getPhone.addEventListener('change', changePhone);

   function changePhone() {
      const userPhone = getPhone.value;
      switch (userPhone) {
         case '1':
            writePhone.textContent = 'You have the newest iphone';
            break;
         case '2':
            writePhone.textContent = 'You have the second newest phone';
            break;
         case '3':
            writePhone.textContent = 'You have the third gen phone';
            break;
         default: 
            writePhone.textContent = '';
      }
   }
   // Followed walkthrough given by MDN
   
   // Ternary operator 
   // let isBirthday = true;
   // const greetingAndy = isBirthday
   // ?'Happy birthday Andy! - hope you have a good 20th birthday'
   // : 'Good morning Andy!'; //fun fact this exampple was given 5 minutes before my actual birthday
   // alert(greetingAndy);

   // Background color change white/black
   let colorMode = document.querySelector('#theme');
   let htmlDoc = document.querySelector('html');

   function updateColor(bgColor, txtColor) {
      htmlDoc.style.backgroundColor = bgColor;
      htmlDoc.style.color = txtColor;
   }
   colorMode.addEventListener('change', () => colorMode.value === 'black'
   ? updateColor('black', 'white')
   : updateColor('white', 'black')
   );

   // Conditionals 1,2,3,4
   // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals

   // Finish conditional 1
   // <img width="500" alt="image" src="https://user-images.githubusercontent.com/101077165/206245386-868a3610-946b-4419-95d4-c550579499c9.png">
   // Finish conditional 2
   // <img width="500" alt="image" src="https://user-images.githubusercontent.com/101077165/206251557-facaf7cf-32ad-41a8-a868-8b5bc43389eb.png">
   // Finish conditionals 3 -> Checked out the answer key to see how they did it. Was confused how to use && in cash switch
   // <img width="500" alt="image" src="https://user-images.githubusercontent.com/101077165/206256369-464af46e-7276-42d7-8c4b-a70b02f72134.png">
   


}



