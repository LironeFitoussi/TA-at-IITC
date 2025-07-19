console.log("main.js");

const API_KEY = "8bd79b9e7af8f971991a764da9f27057"

fetch(`https://api.openweathermap.org/data/2.5/weatherlat=39.099724&lon=-94.578331&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));