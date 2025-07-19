console.log("Main");
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    const loc = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    console.log(position)    
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude + "Time: " + Date(position.timestamp);
  getWeather(position.coords)
}

function getWeather(positionData) {
    const API_KEY = "ee97b04a747bf9d781756c80e59bb04f"
    // console.log(latlon);
    const { latitude: LAT, longitude: LON } = positionData
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}


getLocation()

// console.log(navigator);

// console.log(navigator.geolocation);

