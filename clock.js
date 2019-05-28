const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");


function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const hour = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();