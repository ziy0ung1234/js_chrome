const weather = document.querySelector(".js-weather");


const COORDS = "coords";
const API_KEY = "your API Code here.";

function getWeather (latitude, longitude) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const temperate = json.main.temp;
            const place = json.name;
            weather.innerText = `🌡${temperature.toFixed(1)}℃  🇰🇷${place}`;
        });
}


function saveCoords (coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        /**latitude: latitude,
        longitude: longitude   ->같기 때문에 한번씩 써줌 **/
        latitude,
        longitude
    }; //{} obj선언 [] array선언, 세미콜론 안에다 붙이는거 아님!!!!
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError () {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords () {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init () {
    loadCoords();
}

init();