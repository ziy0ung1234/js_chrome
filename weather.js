const COORDS = "coords";

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

    }
}


function init () {
    loadCoords();
}

init();