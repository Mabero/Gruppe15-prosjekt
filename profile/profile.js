const header = document.getElementById("header");
const lvlNr = document.getElementById("lvlNr");

lvlNr.innerHTML = Math.floor((Math.random() * 50) + 1);

header.textContent = "Hey, " + document.cookie;