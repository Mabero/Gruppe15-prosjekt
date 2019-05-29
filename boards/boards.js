const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

boardsBtn.addEventListener("click", function(){
    let newDiv = document.createElement("div")
    let newContent = document.createTextNode("test")
    newDiv.className = "board";
    cards.push(newDiv)
    newDiv.appendChild(newContent);
    boardsContainer.appendChild(newDiv);
    newDiv.after(boardsBtn);
})

let cards = [];

let list = document.get