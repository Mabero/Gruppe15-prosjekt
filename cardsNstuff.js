const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

var newDiv;
var newContent;
var newCardBtn;

var flagCounter = 0;
var cardCounter = 0;

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
   var modalBtn = document.createElement("button");
   var modalDiv = document.createElement("div");
   var flagDiv = document.createElement("div");
   var span = document.createElement("span");
   var flagSpan = document.createElement("span");
   var prioDiv = document.createElement("div");
   const stars = [document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]

   stars.forEach((star, i) => {
     star.setAttribute("id", nr + "s" + i);
     star.setAttribute("onclick", "changeColor1(i)");
     star.innerHTML = "☆"
     console.log(star);
     prioDiv.appendChild(star);
   })





   flagSpan.innerHTML = "⚑";
      var flagged = 0;
   flagSpan.onclick = function changeColor() {
       if (flagged == 0) {
         flagSpan.style.color = "#f06969"
         flagged = 1
         console.log(1)
         return false;
       }
       else {
         flagSpan.style.color = "#000000"
         flagged = 0
         console.log(0)
         return false;
       }
   }
    console.log(flagCounter);

    function changeColor1(nr) {
        console.log(nr)
        for(var i = 1; i <= 5; i++) {
            if(i <= nr) {
                document.getElementById('star' + i).style.color = "gold"
                document.getElementById('star'+i).innerHTML = "★"
            } else {
                document.getElementById('star' + i).style.color = "gold"
                document.getElementById('star'+i).innerHTML = "☆"
            }
        }
    }

   flagDiv.setAttribute("id", "flag" + flagCounter);
   modalDiv.setAttribute("id","myModal");
   modalDiv.setAttribute("class","modal");
   modalBtn.setAttribute("id","myBtn");
   text.setAttribute("type", "text");
   text.setAttribute("class", "textInput");
   newCard.id = 'card';
   newCard.className = 'card';
   newCard.appendChild(flagDiv);
   flagDiv.appendChild(flagSpan);
   newCard.appendChild(modalBtn);
   modalDiv.appendChild(span);
   newCard.appendChild(text);
   newCard.appendChild(prioDiv);
   document.getElementById("tavle" + nr).appendChild(newCard);
   newCard.setAttribute("draggable","true");
   newCard.setAttribute("ondragstart","drag(event)");

   // Get the modal
   var modal = document.getElementById("myModal");

   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks on the button, open the modal
   modalBtn.onclick = function() {
     modal.style.display = "block";
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }

   newCard.style.height = "100px";
   newCard.style.width = "200px";
   newCard.style.color = '#f2f2f2';
   newCard.style.backgroundColor = "#4F6096";
   newCard.style.borderRadius = "20px";
   newCard.style.border = "solid black";
   newCard.style.opacity = "0.9";
   newCard.style.margin = "10px";

   flagCounter = flagCounter + 1;
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
