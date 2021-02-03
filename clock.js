const clockContainer = document.querySelector(".js-clock");
const colckTitle = clockContainer.querySelector("h1");
colckTitle.style.fontSize = "150px";
colckTitle.style.margin = "0";
colckTitle.style.padding = "0";


function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    colckTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}`: minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}    // 시간설정시 17:3:4 를 17:03:04로 맞추기 위해 설정한 것


//init 초기화세팅
    function init() {
        getTime();
        setInterval(getTime, 1000)
    }
    init();