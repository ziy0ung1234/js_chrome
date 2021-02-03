const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


let toDos = [];  //여러개 이기 때문에 array사용

function deliteToDo (event) {
    /** console.log(event.target.parentNode); 
     -> console.dir : JSON과 같은 구조로 전달 , parentNode**/
    
     const btn = event.target;
     const li = btn.parentNode;
     toDoList.removeChild(li);
     const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
     });
     todos = cleanToDos //todos는 예전 것 cleanToDos는 새로운 것
     saveToDos();
}

function saveToDos () {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
    /** setItem(keyName, keyValue)
        JSON.stringfy : 자바스크립트 obj를 string으로 바꿔줌**/
}

function paintToDo (text) {
    const li = document.createElement("li"); //createElement 문서에 html 요소 추가
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1; // <li id="i"></li> 에서 i+1 계속 생성
    delBtn.innerText = "❌" // emoji: command+control+space
    delBtn.addEventListener("click", deliteToDo);
    span.innerText = text;
    li.appendChild(span); //한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId 
    };
    toDos.push(toDoObj);
    saveToDos(); //반드시 .push()선언 이후에 작성해야함, 먼저 작성하면 toDos 값이 비어있어서 소용없음
}

function handleSubmit(event) {
    event.preventDefault ();
    const currentvalue = toDoInput.value;
    paintToDo(currentvalue);
    toDoInput.value = ""; // "": input 으로부터의 텍스트를 지움, 엔터누르면 섭밋처럼 보임
}

function loadToDos() {
    const loadToDos= localStorage.getItem(TODOS_LS);
    if (loadToDos !== null) {
        // console.log(loadToDos); -> localStorage에 있는 정보
        const parsedToDos = JSON.parse(loadToDos);
        //console.log(parsedToDos); -> object로 전환
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        }); //foreach: 배열의 요소들을 반복하여 작업 수행 가능
    } //이경우 else 조건은 의미 없음
}/** toDos를 가져온 뒤, 정보를 자바스크립트 obj로 변환(parse), 
    각각에 대해 paintToDo 라는 이름의 function 실행(todo.text에 대해) **/

    function init () {
    loadToDos ();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();

