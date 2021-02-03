const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");
//querySelector: 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 '첫 번째' Element를 반환합니다

const userLS = "currentUser",
    showingCN = "showing";

function saveName (text) {
    localStorage.setItem(userLS,text);
} //현재 도메인의 로컬 Storage 객체에 접근한 후, Storage.setItem()을 사용해 항목 하나를 추가합니다.

function handleSubmit(event) {
    event.preventDefault();
    const currentvalue = input.value;
    paintGreeting(currentvalue);
    saveName(currentvalue);
}

function askForName () {
    form.classList.add(showingCN);
    form.addEventListener("submit", handleSubmit);
} //addEventListener가 특정 이벤트 발생 시 특정 함수를 실행 ,addEventListener("이벤트 종류", '함수이름')

function paintGreeting(text) {
    form.classList.remove(showingCN);
    greeting.classList.add(showingCN);
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(userLS);
    if(currentUser === null){
        askForName();
    } else {
       paintGreeting(currentUser);
    }
}

function init() {
    loadName ();
}

init();