//document.body.onload = addElement;



function createDiv() {
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

//var cardList = [
//    {
//        title: document.getElementbyId("inputTitle"),
//        description: document.getElementById("inputDesc"),
//    }
//];

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







  /* function disableButton(){
				document.getElementById("btn").style.visibility = "hidden";
			}



/* let cards = [

    {
         let input-cardName = document.getElementById("input-cardName");
         let input-cardDesc = document.getElementById("input-cardDesc");,

         name: input-cardName.value,
         description: input-cardDesc.value,

         if (input-cardName == NULL) {
           alert("Please input card title")
         },

         if (input-cardDesc == NULL) {
           alert("Please input description")
         }
    }




    // createCard 1.0.
    {
        function createCard () {

        document.body.onload = addElement;
        let input-cardTitle = document.getElementById("input-cardTitle");
        let input-cardDesc = document.getElementById("input-cardDesc");

        // create a new div element
        let newDiv = document.createElement("div");
        // Gives the div a class/id
        newDiv.setAttribute("id", "Div1");
        newDiv.setAttribute("style", "background-color: red;");
        // Creates textnodes for title and description
        let cardTitle = document.createTextNode(input-cardTitle.value);
        let description = document.createTextNode(input-cardDesc.value);
        cardTitle.setAttribute("","");
        description.setAttribute("","");
        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        let currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);

        // If statement to avoid empty cards
        if (input-cardTitle == NULL) {
          alert("Please input card title")
        },

        if (input-cardDesc == NULL) {
          alert("Please input description")
        }


        function setDueDate() {
          var nowDate = newDate();
          var dueDate = document.getElementById("input-date");


        }


  };


   }




    },

    {
    },

    {
    },

    {
    },

    {
    },

    {
    },

    {
    },

];




let team = [
    { id: 1, name:},
    { id: 2, name:},
    { id: 3, name:},
    { id: 4, name:},
    { id: 5, name:},
];

let team = [
    { id: 1, name:},
    { id: 2, name:},
    { id: 3, name:},
    { id: 4, name:},
    { id: 5, name:},
];

let team = [
    { id: 1, name:},
    { id: 2, name:},
    { id: 3, name:},
    { id: 4, name:},
    { id: 5, name:},
];

let team = [
    { id: 1, name:},
    { id: 2, name:},
    { id: 3, name:},
    { id: 4, name:},
    { id: 5, name:},
];




let assignments = [

]; */
