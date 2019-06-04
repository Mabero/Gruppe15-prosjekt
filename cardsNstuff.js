const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

var flagCounter = 0;
var cardCounter = 0;

boardsBtn.addEventListener("click", function(){
  var newDiv = document.createElement("div")
  var newContent = document.createTextNode("test")
  var newCardBtn = document.getElementById("newCardBtn")
  newDiv.className = "tavle";
  newDiv.appendChild(newContent);
  tavleContainer.appendChild(newDiv);
  newDiv.after(boardsBtn);
  newCardBtn.after(newCard);
  return newDiv;
});

function createCard(nr) {
  var newCard = document.createElement("div");
  var popUpBtn = document.createElement("button");
  var text = document.createElement("INPUT");
  var flagDiv = document.createElement("div");
  var span = document.createElement("span");
  var flagSpan = document.createElement("span");
  var prioDiv = document.createElement("div");
  var flagged = 0;
  const stars = [document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]

  flagSpan.innerHTML = "⚑";
  flagSpan.onclick = function changeColor() {
    if (flagged == 0) {
      flagSpan.style.color = "#f06969"
      flagged = 1
      console.log(1)
      return false;
    }
    else {
      flagSpan.style.color = "#fff"
      flagged = 0
      console.log(0)
      return false;
    }
  }
  console.log(flagCounter);

  stars.forEach((star, i) => {
    star.setAttribute("id", nr + "s" + i);
    star.setAttribute("onclick", "changeColor1(i)");
    star.setAttribute("style","display: inline");
    star.innerHTML = "☆"
    console.log(star);
    prioDiv.appendChild(star);
  })

  function changeColor1(nr) {
    console.log(nr)
    for(var i = 1; i <= 5; i++) {
      if(i <= nr) {
        document.getElementById('s' + i).style.color = "gold"
        document.getElementById('s'+ i).innerHTML = "★"
      } else {
        document.getElementById('s' + i).style.color = "gold"
        document.getElementById('s'+i).innerHTML = "☆"
      }
    }
  }

  text.setAttribute("id","input");
  flagDiv.setAttribute("id", "flag" + flagCounter);
  text.setAttribute("type", "text");
  text.setAttribute("class", "textInput");
  flagDiv.appendChild(flagSpan);
  document.getElementById("tavle" + nr).appendChild(newCard);
  popUpBtn.setAttribute("onclick", "createPopUp()");

  newCard.appendChild(text);
  newCard.appendChild(prioDiv);
  newCard.setAttribute("draggable","true");
  newCard.setAttribute("ondragstart","drag(event)");
  newCard.appendChild(popUpBtn);
  newCard.appendChild(flagDiv);
  newCard.id = 'card';
  newCard.className = 'card';
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

// Lager pop up modal window med div funksjoner.
function createPopUp() {
  var modalDiv = document.createElement("div");
  var headerDiv = document.createElement("div");
  var exitSpan = document.createElement("span");
  var title = document.createElement("h1");
  var chckbx = document.createElement("input");
  var chckbxDiv = document.createElement("div");
  var chckbxBtn = document.createElement("button");
  var uploadBtn = document.createElement("button");
  var fileTextSpan = document.createElement("span");
  var fileInput = document.createElement("input");
  var descDiv = document.createElement("div");
  var textArea = document.createElement("TEXTAREA");
  var descBtn = document.createElement("button");
  var addFile = document.createElement("INPUT");

  fileInput.setAttribute("type","file");
  fileTextSpan.setAttribute("id","fileBtn");

  chckbx.setAttribute("id","prod");
  chckbx.setAttribute("type", "text");

  addFile.setAttribute("type", "file");
  addFile.setAttribute("class","chckbxBtn")

  descDiv.setAttribute("class", "description")

  textArea.setAttribute("name","tekst");
  textArea.placeholder = "Type description here";
  textArea.setAttribute("class", "descArea");

  descBtn.setAttribute("class", "descBtn");
  descBtn.innerHTML = "Add";
  descBtn.onclick = function text2 (){
    var inputText = document.getElementsByName("tekst")[0].value;
    var newText = document.createElement("p");
    descDiv.appendChild(newText);
    newText.textContent = inputText;
  }



  var i = 1;
  chckbxBtn.onclick = function createCheckBox(obj) {
    if (obj.value !== "") {

      var checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", "prodName" + i);
      checkbox.setAttribute("value", obj.value);
      checkbox.setAttribute("name", "products");
      checkbox.setAttribute("style", "display: block");

      var label = document.createElement("label");
      label.setAttribute("for", "prodName" + i);

      label.appendChild(document.createTextNode(obj.value));

      chckbxDiv.appendChild(checkbox);
      chckbxDiv.appendChild(label);

      obj.value = "";
      document.getElementById(obj.id).focus();

      i = i + 1;
    }
  }
  chckbxBtn.setAttribute("class", "chckbxBtn");
  chckbxBtn.innerHTML = "Create task";
  chckbxDiv.setAttribute("class","chckbxDiv");
  chckbx.placeholder = "Add task";
  textArea.setAttribute("class", "textArea");
  exitSpan.innerHTML = "&times;";
  headerDiv.setAttribute("class", "headerDiv");
  modalDiv.setAttribute("class", "modal");
  exitSpan.setAttribute("class", "close");
  modalDiv.appendChild(exitSpan);
  modalDiv.appendChild(headerDiv)
  document.body.appendChild(modalDiv)
  descDiv.appendChild(textArea)
  modalDiv.appendChild(chckbxDiv)
  modalDiv.appendChild(descDiv)
  chckbxDiv.appendChild(chckbx)
  chckbxDiv.appendChild(chckbxBtn)
  descDiv.appendChild(descBtn)
  modalDiv.appendChild(addFile);

  headerDiv.innerHTML = document.getElementById("input").value;

  exitSpan.onclick = function() {
    modalDiv.style.display = "none";

    window.onclick = function(event) {
      if (event.target == document.body) {
        modalDiv.style.display = "none";
      }
    }
  }
}



// Drag and drop funksjoner
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
