const axios = require('axios');

let getInfoButton = document.getElementById("but");
let cardHeader1 = document.getElementById("card__header1");
let cardShortDescription1 = document.getElementById("card__short-description1");
let cardImage1 = document.getElementById("card__image1");
let cardHeader2 = document.getElementById("card__header2");
let cardShortDescription2 = document.getElementById("card__short-description2");
let cardImage2 = document.getElementById("card__image2");

console.log("hello world");

function GetInfo() {      //gets info from json-server
  alert("Info uploaded!");
  axios.get("http://localhost:3000/articles").then(function(response:any) {
  UpdateInfo(response.data);
  });          
}

function UpdateInfo(data:any) {   //updates info on the page
 // for (let i=0; i<data.length; i++) {    
  cardHeader1.innerText = data[0].title;      //header of 1st article goes to webpage
  cardShortDescription1.innerText = data[0].shortDescription; 
  cardImage1.setAttribute("src", data[0].image);  //image1 loads to webpage
  cardHeader2.innerText = data[1].title;
  cardShortDescription2.innerText = data[1].shortDescription;
  cardImage2.setAttribute("src", data[1].image);
  
}

getInfoButton.addEventListener('click', GetInfo);




