
function createBoard(){
  var boardDiv = document.createElement("div");
  boardDiv.setAttribute("class","board");
  boardDiv.style.width = "1000px";
  boardDiv.style.height = "200px";
  boardDiv.style.background = "rgba(150,100,150,09)";
  boardDiv.style.color = "white";

  document.getElementById("board").appendChild(boardDiv);
}

function createCard() {
    var newDiv = document.createElement('div');
    var textTitle = document.createElement("textarea");
    var button = document.createElement('button');
    document.body.appendChild(newDiv);
    newDiv.appendChild(textTitle);
    newDiv.appendChild(button);

    newDiv.style.height = "100px";
    newDiv.style.width = "200px";
    newDiv.style.color = 'white';
    newDiv.style.backgroundColor = "rgba(150, 70, 150, 0.9)";
    newDiv.style.borderRadius = "20px";
    newDiv.style.border = "solid black";
    newDiv.style.opacity = "0.7";
    newDiv.style.margin = "10px";

    newDiv.setAttribute("class","card");
    textTitle.setAttribute("class","inputTitle");
    newDiv.setAttribute("draggable","true")
    newDiv.setAttribute("ondragstart","drag(event)")
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


var cardList = [];
