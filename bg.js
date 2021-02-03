const body = document.querySelector("body");

const Ing_Number = 3;



function paintImages(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber +1 }.jpg`;  //+1:  Math.random()가 0을 줄 수 있어서 필요
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random()* Ing_Number);
    return number;
}

function init () {
    const randomNumber = genRandom();
    paintImages(randomNumber);
}

init();