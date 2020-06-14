const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings"),
initBtn = document.querySelector('.js-initBtn');

const USER_LS = "currentUser",  // ***
SHOWING_CN = "showing";

function nameReset() {
  localStorage.clear();
  greeting.classList.remove(SHOWING_CN);
  initBtn.classList.remove(SHOWING_CN);
  input.value = "";
  form.classList.add(SHOWING_CN);
 
}

function showResetBtn() {
  initBtn.classList.add(SHOWING_CN);
}

function handleSubmit(event) {  // ***
  event.preventDefault();
  const nameValue = input.value;
  showGreeting(nameValue);
  showResetBtn();
  saveName(nameValue);
  
}

function saveName(text) { 
  localStorage.setItem(USER_LS, text);  // ****
}

function askForName() {
  input.value = "";
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);

}

function showGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Welcome, ${text}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    askForName();
  } else {
    showGreeting(currentUser);
    showResetBtn();
  }
}

function init() {
  loadName();
}

init();