const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

// diverse counters
var flagCounter = 0;

var cardBtnsArray = [];
let counterList = 3;




const stars = []
let cardCounter = 0;

// ======================== CREATE CARD ======================== //
function createCard(nr) {
  //DOM elementer
  var newCard = document.createElement("div");
  var flagDiv = document.createElement("div");
  var popUpBtn = document.createElement("button");
  var text = document.createElement("INPUT");
  var flagDiv = document.createElement("div");
  var xspan = document.createElement("span");
  var flagSpan = document.createElement("span");
  var prioDiv = document.createElement("div");
  var flagged = 0;

  const starContainer = document.createElement("div");
  starContainer.id = "starContainer";
  newCard.appendChild(starContainer);


  stars.onclick = function changeColor1(nr) {
    
    for (var i = 1; i <= 5; i++) {
      if (i <= nr) {
        document.getElementById('star' + i).style.color = "gold"
        document.getElementById('star' + i).innerHTML = "★"
      } else {
        document.getElementById('star' + i).style.color = "gold"
        document.getElementById('star' + i).innerHTML = "☆"
      }
    }
  }

  /*
  var span = document.createElement("span");
  var flagSpan = document.createElement("span");
  var prioDiv = document.createElement("div");
  var flagged = 0;


  const starContainer = document.createElement("div");
  starContainer.id = "starContainer";
  newCard.appendChild(starContainer);

  */

  //Flagg og onclick funskjon som endrer fargen på flagget.
  flagSpan.innerHTML = "⚑";
  flagSpan.onclick = function changeColor() {
    if (flagged == 0) {
      flagSpan.style.color = "#f06969"
      flagged = 1
      return false;
    } else {
      flagSpan.style.color = "#d3d3d3"
      flagged = 0
      return false;
    }
  }

  //plasserer <span> som flagget er plassert i riktig div.
  flagDiv.setAttribute("id", "flag" + flagCounter);
  flagDiv.setAttribute("class", "flagDiv");
  flagDiv.appendChild(flagSpan);


  xspan.setAttribute("class", "closeCard");
  xspan.innerHTML = "&times;";
  xspan.setAttribute("onclick", "removeCard(i)")


  popUpBtn.setAttribute("id", "popUpBtn");
  popUpBtn.setAttribute("class", "popUpBtns");
  popUpBtn.textContent = "✎ Edit";

  //Det her gidder jeg ikke å kommentere.
  text.setAttribute("id", "input");
  text.setAttribute("type", "text");
  text.setAttribute("class", "textInput");
  text.placeholder = "Enter task ...";

  //Append child kort til riktig tavle.
  document.getElementById("tavle" + nr).appendChild(newCard);

  //onclick funksjon (modal) på knapp.
  popUpBtn.setAttribute("onclick", "createPopUp()");

  /* Styler og setter daddy (new card) til alle elementene som
  skal være på kortet. */
  newCard.appendChild(xspan);
  newCard.appendChild(text);
  newCard.setAttribute("draggable", "true");
  newCard.setAttribute("ondragstart", "drag(event)");
  newCard.appendChild(popUpBtn);
  newCard.appendChild(prioDiv);
  newCard.setAttribute("draggable", "true");
  newCard.setAttribute("ondragstart", "drag(event)");
  newCard.appendChild(flagDiv);
  newCard.appendChild(popUpBtn);

  cardCounter++;

  newCard.id = 'card' + cardCounter;
  newCard.className = 'card';




  // f l a g c o u n t e r
  flagCounter = flagCounter + 1;


  for (i = 0; i < 5; i++) {
    const star = document.createElement("p");
    starContainer.appendChild(star);
    star.className = "stars";
    star.id = "star" + i;
    stars.push(star[i]);
    document.getElementById("star" + i).innerHTML = "☆";
    document.getElementById("star" + i).onclick = starchange;
    //document.getElementById('star' + 1).style.color = "gold"
    //star[i].style.color = "gold"
    //star[i].innerHTML = "★"
  }

  /*const star1 = document.getElementById("star1");
  star1.innerHTML = "★";
  star1.onclick = starchange;*/
  function starchange() {
    for (var i = 0; i < stars.length; i++) {

      const star = document.getElementById('star' + i);
      star.classList.add = "fav";

      if (star.className = "fav") {
        star.innerHTML = "★";
        star.classList.remove = "fav";
      } else if (star.className = "nofav") {
        star.innerHTML = "☆"
      }

    }
  }

  /*
  stars.onclick = function changeColor1(nr) {

  for (var i = 1; i <= 5; i++) {
  if (i <= nr) {
  document.getElementById('star' + i).style.color = "gold"
  document.getElementById('star' + i).innerHTML = "★"
} else {
document.getElementById('star' + i).style.color = "gold"
document.getElementById('star' + i).innerHTML = "☆"
}

}

}*/
}
// ======================== /CREATE CARD ======================== //

function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Funksjonen som velger fra dropdown menyen hvilket medlem som er tillagt kortet.

function addMember(check) {
  var showMember = document.createElement("div");
  var whichMember = document.createElement("div");

  modalDiv.appendChild(showMember);
  showMember.appendChild(whichMember);

  showMember.setAttribute("id", "showMember");
  showMember.setAttribute("class", "showMember");
  showMember.style.height = "50px";
  showMember.style.width = "50px";
  showMember.style.backgroundColor = "#f2f2f2";
  showMember.style.borderRadius = "50%";


  whichMember.setAttribute("id", "whichMember");
  whichMember.textContent = check;
  whichMember.style.fontSize = "40px";
  whichMember.align = "center";

  console.log(check);
}


function removeCard(nr) {
  const card = document.getElementById("card" + nr)
  card.remove()
};

// Lager pop up modal window med div funksjoner.
function createPopUp(nr) {
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
  var dueDateDiv = document.createElement("div");
  var dueDateLabel = document.createElement("label");
  var dueDateInput = document.createElement("input");
  var dueP = document.createElement("p");
  var textnode = document.createTextNode("Deadline");


  var dropDownDiv = document.createElement("div");
  var dropDownMenu = document.createElement("div");
  var dropdownbtn0 = document.createElement("button");
  var dropdownbtn1 = document.createElement("button");
  var dropdownbtn2 = document.createElement("button");
  var dropdownbtn3 = document.createElement("button");
  var dropdownbtn4 = document.createElement("button");
  var dropdownbtn5 = document.createElement("button");
  var dropdownbtn6 = document.createElement("button");
  var memberDiv = document.createElement("div");

  memberDiv.setAttribute("class", "mDiv");
  dropDownDiv.setAttribute("class", "dropdown");
  dropdownbtn0.setAttribute("class", "dropbtn");
  dropdownbtn0.onclick = function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  dropdownbtn0.innerHTML = "Medlemmer";
  dropDownMenu.setAttribute("id", "myDropdown");
  dropDownMenu.setAttribute("class", "dropdownContent");

  dropdownbtn1.setAttribute("id", "member1");
  dropdownbtn1.setAttribute("id", "member2");
  dropdownbtn1.setAttribute("id", "member3");
  dropdownbtn1.setAttribute("id", "member4");
  dropdownbtn1.setAttribute("id", "member5");
  dropdownbtn1.setAttribute("id", "member6");

  dropdownbtn1.setAttribute("class", "memberButton");
  dropdownbtn2.setAttribute("class", "memberButton");
  dropdownbtn3.setAttribute("class", "memberButton");
  dropdownbtn4.setAttribute("class", "memberButton");
  dropdownbtn5.setAttribute("class", "memberButton");
  dropdownbtn6.setAttribute("class", "memberButton");


  /* Her ble det litt rotete. Siden alt er inni en modal måtte vi kalle på funksjoner
  rett etter hver knapp. Denne funksjonen lager en runding og første bokstav på
  hvilket medlem som er lagt til. */
  dropdownbtn1.onclick = function addMember() {
    var showMember = document.createElement("div");
    var whichMember = document.createElement("div");

    memberDiv.appendChild(showMember);
    showMember.appendChild(whichMember);

    showMember.setAttribute("id", "showMember");
    showMember.setAttribute("class", "showMember");
    showMember.style.height = "50px";
    showMember.style.width = "50px";
    showMember.style.backgroundColor = "#f2f2f2";
    showMember.style.borderRadius = "50%";
    showMember.style.margin = "5px";


    whichMember.setAttribute("id", "whichMember");
    whichMember.textContent = "B";
    whichMember.style.fontSize = "40px";
    whichMember.align = "center";
  }
  dropdownbtn2.onclick = function addMember() {
    var showMember = document.createElement("div");
    var whichMember = document.createElement("div");

    memberDiv.appendChild(showMember);
    showMember.appendChild(whichMember);

    showMember.setAttribute("id", "showMember");
    showMember.setAttribute("class", "showMember");
    showMember.style.height = "50px";
    showMember.style.width = "50px";
    showMember.style.backgroundColor = "#f2f2f2";
    showMember.style.borderRadius = "50%";
    showMember.style.margin = "5px";


    whichMember.setAttribute("id", "whichMember");
    whichMember.textContent = "M";
    whichMember.style.fontSize = "40px";
    whichMember.align = "center";
  }
  dropdownbtn3.onclick = function addMember() {
    var showMember = document.createElement("div");
    var whichMember = document.createElement("div");

    memberDiv.appendChild(showMember);
    showMember.appendChild(whichMember);

    showMember.setAttribute("id", "showMember");
    showMember.setAttribute("class", "showMember");
    showMember.style.height = "50px";
    showMember.style.width = "50px";
    showMember.style.backgroundColor = "#f2f2f2";
    showMember.style.borderRadius = "50%";
    showMember.style.margin = "5px";


    whichMember.setAttribute("id", "whichMember");
    whichMember.textContent = "F";
    whichMember.style.fontSize = "40px";
    whichMember.align = "center";
  }
  dropdownbtn4.onclick = function addMember() {
    var showMember = document.createElement("div");
    var whichMember = document.createElement("div");

    memberDiv.appendChild(showMember);
    showMember.appendChild(whichMember);

    showMember.setAttribute("id", "showMember");
    showMember.setAttribute("class", "showMember");
    showMember.style.height = "50px";
    showMember.style.width = "50px";
    showMember.style.backgroundColor = "#f2f2f2";
    showMember.style.borderRadius = "50%";
    showMember.style.margin = "5px";


    whichMember.setAttribute("id", "whichMember");
    whichMember.textContent = "M";
    whichMember.style.fontSize = "40px";
    whichMember.align = "center";
  }
  dropdownbtn5.onclick = function addMember() {
    var showMember = document.createElement("div");
    var whichMember = document.createElement("div");

    memberDiv.appendChild(showMember);
    showMember.appendChild(whichMember);

    showMember.setAttribute("id", "showMember");
    showMember.setAttribute("class", "showMember");
    showMember.style.height = "50px";
    showMember.style.width = "50px";
    showMember.style.backgroundColor = "#f2f2f2";
    showMember.style.borderRadius = "50%";
    showMember.style.margin = "5px";


    whichMember.setAttribute("id", "whichMember");
    whichMember.textContent = "S";
    whichMember.style.fontSize = "40px";
    whichMember.align = "center";
  }
  dropdownbtn6.onclick = function addMember() {
    var showMember = document.createElement("div");
    var whichMember = document.createElement("div");

    memberDiv.appendChild(showMember);
    showMember.appendChild(whichMember);

    showMember.setAttribute("id", "showMember");
    showMember.setAttribute("class", "showMember");
    showMember.style.height = "50px";
    showMember.style.width = "50px";
    showMember.style.backgroundColor = "#f2f2f2";
    showMember.style.borderRadius = "50%";
    showMember.style.margin = "5px";


    whichMember.setAttribute("id", "whichMember");
    whichMember.textContent = "E";
    whichMember.style.fontSize = "40px";
    whichMember.align = "center";
  }

  dropdownbtn1.innerHTML = "Bjarne";
  dropdownbtn2.innerHTML = "Mats";
  dropdownbtn3.innerHTML = "Fazal";
  dropdownbtn4.innerHTML = "Martin";
  dropdownbtn5.innerHTML = "Stian";
  dropdownbtn6.innerHTML = "Even";

  modalDiv.appendChild(dropDownDiv);
  dropDownDiv.appendChild(dropdownbtn0);
  dropDownDiv.appendChild(dropDownMenu);
  dropDownMenu.appendChild(dropdownbtn1);
  dropDownMenu.appendChild(dropdownbtn2);
  dropDownMenu.appendChild(dropdownbtn3);
  dropDownMenu.appendChild(dropdownbtn4);
  dropDownMenu.appendChild(dropdownbtn5);
  dropDownMenu.appendChild(dropdownbtn6);


  dueP.setAttribute("class", "dueDateP");
  dueP.appendChild(textnode);

  dueDateLabel.setAttribute("class", "dueDateLabel");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("class", "dueDate")

  dueDateDiv.setAttribute("class", "dueDateDiv");

  // &times; lager (x) til pop up vindu.
  exitSpan.innerHTML = "&times;";
  exitSpan.setAttribute("class", "close");

  fileInput.setAttribute("type", "file");
  fileTextSpan.setAttribute("id", "fileBtn");

  chckbx.setAttribute("id", "prod");
  chckbx.setAttribute("type", "text");

  addFile.setAttribute("type", "file");
  addFile.setAttribute("class", "addFileButton")

  descDiv.setAttribute("class", "description")

  textArea.setAttribute("name", "tekst");
  textArea.placeholder = "Type description here";
  textArea.setAttribute("class", "descArea");

  descBtn.setAttribute("class", "descBtn");
  descBtn.innerHTML = "Add Description";
  descBtn.onclick = function text2() {
    var inputText = document.getElementsByName("tekst")[0].value;
    var newText = document.createElement("p");
    descDiv.appendChild(newText);
    newText.textContent = inputText;
  }

  var i = 1;

  chckbxBtn.addEventListener("click", function(e) { createCheckBox(prod)});

  function createCheckBox(obj){
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
      label.style.color = "#f2f2f2";

      chckbxDiv.appendChild(checkbox);
      chckbxDiv.appendChild(label);

      obj.value = "";
      document.getElementById(obj.id).focus();

      i = i + 1;
    }
  };


  chckbxBtn.setAttribute("class", "chckbxBtn");
  chckbxBtn.innerHTML = "Create task";
  chckbxDiv.setAttribute("class", "chckbxDiv");
  chckbx.placeholder = "Add task";

  //Gir class til textarea
  textArea.setAttribute("class", "textArea");

  //gir class til headerDiv
  headerDiv.setAttribute("class", "headerDiv");

  //Gir class til modal vindu (pop up)
  modalDiv.setAttribute("class", "modal");

  // set daddy (dueDateDiv) til kalenderstuff.
  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);

  //set daddy (document.body) til pop up vindu (modalDiv).
  document.body.appendChild(modalDiv)

  //set daddy (descDiv) til textarea og button.
  descDiv.appendChild(textArea)
  descDiv.appendChild(descBtn)

  //set daddy (chckbxDiv) til checkbox og checkboxbutton
  chckbxDiv.appendChild(chckbx)
  chckbxDiv.appendChild(chckbxBtn)

  // set daddy (modalDiv) til alt innhold i pop up
  modalDiv.appendChild(headerDiv);
  modalDiv.appendChild(exitSpan);
  modalDiv.appendChild(dueP);
  modalDiv.appendChild(dueDateDiv);
  modalDiv.appendChild(descDiv)
  modalDiv.appendChild(chckbxDiv)
  modalDiv.appendChild(addFile);
  modalDiv.appendChild(memberDiv);


  headerDiv.innerHTML = document.getElementById("input").value;

  exitSpan.onclick = function () {
    modalDiv.style.display = "none";
  }

  // unfinished business
  /*  window.onclick = function(event) {
  if (event.target == modalDiv) {
  modalDiv.style.display = "none";
}
} */
}
// ======================== /POP UP ======================== //





// Drag and drop funksjoner

Sortable.create(tavle1, {
  group: 'shared'
});

Sortable.create(tavle2, {
  animation: 150,
  group: 'shared'
});

Sortable.create(tavle3, {
  animation: 150,
  group: 'shared'
});


Sortable.create(tavle4, {
  animation: 150,
  group: 'shared'
});

Sortable.create(tavle5, {
  animation: 150,
  group: 'shared'
});
