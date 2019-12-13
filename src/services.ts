const axios = require('axios');

console.log("hello world");

function axiosGET() {
  alert("works");
  axios.get("http://localhost:3000/articles/1").then(function(response:any) {
  console.log(response.data.content)
  });            //https://swapi.co/api/people/1/
}

document.getElementById("but").addEventListener('click', axiosGET);


