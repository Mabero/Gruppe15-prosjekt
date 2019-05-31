const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

var newDiv;
var newContent;
var newCardBtn;

boardsBtn.addEventListener("click", function(){
    newDiv = document.createElement("div")
    newContent = document.createTextNode("test")
    newCardBtn = document.getElementById("newCardBtn")
    newDiv.className = "board";
    cards.push(newDiv);
    newDiv.appendChild(newContent);
    boardsContainer.appendChild(newDiv);
    newDiv.after(boardsBtn);
    newCardBtn.after(cardDiv);
    return newDiv;
})

/* function createCard() {
    var cardDiv = document.createElement('div');
    var textTitle = document.createElement("textarea");
    newDiv.appendChild(cardDiv);
    cardDiv.appendChild(textTitle);
    cardDiv.appendChild(button);
    cardDiv.className = "card";
    textTitle.className = "inputTitle";
    cardDiv.setAttribute("draggable","true");
    cardDiv.setAttribute("ondragstart","drag(event)");

    cardDiv.style.height = "100px";
    cardDiv.style.width = "200px";
    cardDiv.style.color = '#f2f2f2';
    cardDiv.style.backgroundColor = "#4F6006";
    cardDiv.style.borderRadius = "20px";
    cardDiv.style.border = "solid black";
    cardDiv.style.opacity = "0.7";
    cardDiv.style.margin = "10px";

}; */

 function createCard(nr) {
   var newCard = document.createElement('div');
   newCard.id = 'card';
   newCard.className = 'card';
   document.getElementById("tavle" + nr).appendChild(newCard);

   newCard.style.height = "100px";
   newCard.style.width = "200px";
   newCard.style.color = '#f2f2f2';
   newCard.style.backgroundColor = "#4F6096";
   newCard.style.borderRadius = "20px";
   newCard.style.border = "solid black";
   newCard.style.opacity = "0.9";
   newCard.style.margin = "10px";

   parentElement = newCard.parentElement;
   if (newCard.id == parentElement.id) {

   }
};


 var dragget;
var source;
var dragged;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
    dragget = event.target.className;
    dragged = event.target;
    source = ev.target.parentElement;
}

function drop(ev) {
    ev.preventDefault();
    if ( ev.target.className == "list" && dragget == "card" )  {
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(dragged);
        console.log("yes");
    }
}

function drop1(ev) {
    ev.preventDefault();
    if ( event.target.className == "listWrap" && dragget == "list" ) {

        var data = ev.dataTransfer.getData("text");
        source.innerHTML = ev.target.innerHTML;
        ev.target.innerHTML = "";
        ev.target.appendChild(dragged);
    }
}


/*
let cards = []; */
