// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");
let name = document.getElementById("name");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  let list = "";
  nameCountSpan.innerHTML = babyData.length;
  for (let i = 0; i < babyData.length; i++){
    list += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: "+ babyData[i].gender + ")"+ " <br> ";
  }
  name.innerHTML = list;
  
}

// Display Names by Gender
function searchGender() {
  let list = "";
  let numNames = 0;
  let person = prompt("Please enter gender (Boy/Girl):");
  if (person === "Boy"){
    for (let i = 0; i < babyData.length; i++){
      if (babyData[i].gender === "Boy"){
        list += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: "+ babyData[i].gender + ")"+ " <br> ";
        numNames++;
      }
  }
  } else{
    for (let i = 0; i < babyData.length; i++){
      if (babyData[i].gender === "Girl"){
        list += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: "+ babyData[i].gender + ")"+ " <br> ";
        numNames++;
      }
    }
  }
  nameCountSpan.innerHTML = numNames ;
  name.innerHTML = list;
}

// Display Names within a Range of Ranks
function searchRank() {
  let list = "";
  let numNames = 0;
  let minimum = prompt("Please enter minimum rank:");
  let maximum = prompt("Please enter maximum rank:");
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].rank >= minimum && babyData[i].rank <= maximum ) {
      list += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: " + babyData[i].gender + ")" + " <br> ";
      numNames++;
    }
  }
  nameCountSpan.innerHTML = numNames;
  name.innerHTML = list;
}

// Display Names with Starting Letter
function searchStartingLetter() {
  let list = "";
  let numNames = 0;
  let start = prompt("Please enter starting letter:");
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].name.startsWith(start)) {
      list += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: " + babyData[i].gender + ")" + " <br> ";
      numNames++;
    }
  }
  nameCountSpan.innerHTML = numNames;
  name.innerHTML = list;
}

// Display Names with a Specific Length
function searchLength() {
  let list = "";
  let numNames = 0;
  let len = prompt("Please enter name length:");
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].name.length == len) {
      list += babyData[i].name.bold() + " (Rank: " + babyData[i].rank + ", Gender: " + babyData[i].gender + ")" + " <br> ";
      numNames++;
    }
  }
  nameCountSpan.innerHTML = numNames;
  name.innerHTML = list;
}