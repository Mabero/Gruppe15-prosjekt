const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

var newDiv;
var newContent;
var newCardBtn;

boardsBtn.addEventListener("click", function(){
    newDiv = document.createElement("div")
    newContent = document.createTextNode("test")
    newCardBtn = document.getElementById("newCardBtn")
    newDiv.className = "tavle";
    newDiv.appendChild(newContent);
    tavleContainer.appendChild(newDiv);
    newDiv.after(boardsBtn);
    newCardBtn.after(newCard);
    return newDiv;
});

 function createCard(nr) {
   var newCard = document.createElement("div");
   var text = document.createElement("INPUT");
   var button = document.createElement("button");
   text.setAttribute("type", "text");
   text.setAttribute("class", "textInput");
   button.setAttribute("class", "popUpBtn");
   newCard.id = 'card';
   newCard.className = 'card';
   newCard.appendChild(button);
   newCard.appendChild(text);
   document.getElementById("tavle" + nr).appendChild(newCard);
   newCard.setAttribute("draggable","true");
   newCard.setAttribute("ondragstart","drag(event)");

   newCard.style.height = "100px";
   newCard.style.width = "200px";
   newCard.style.color = '#f2f2f2';
   newCard.style.backgroundColor = "#4F6096";
   newCard.style.borderRadius = "20px";
   newCard.style.border = "solid black";
   newCard.style.opacity = "0.9";
   newCard.style.margin = "10px";
   }

   function createPopup(){
  var popup = open("", "Popup", "width=300,height=200");
  var txtOk = popup.document.createElement("TEXTAREA");
  var aOk = popup.document.createElement("a");
  aOk.innerHTML = "Click here";

  popup.document.body.appendChild(txtOk);
  popup.document.body.appendChild(aOk);
  }




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
    if ( ev.target.className == "tavle" && dragget == "card" )  {
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(dragged);
        console.log("yes");
    }
}

function drop1(ev) {
    ev.preventDefault();
    if ( ev.target.className == "listWrap" && dragget == "tavle" ) {

        var data = ev.dataTransfer.getData("text");
        source.innerHTML = ev.target.innerHTML;
        ev.target.innerHTML = "";
        ev.target.appendChild(dragged);
        console.log("wrap");
    }
}
