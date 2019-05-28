const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const USER_LS = "currentUser";
const SHOW_CN = "showing";

function paintGreeting(text) {
    const greeting = document.querySelector(".js-greeting");

    form.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        // she is not
        paintGreeting("not user, sorry");
    } else {
        // she is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();