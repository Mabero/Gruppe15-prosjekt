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
        ev.target.appendChild(document.getElementById(data));
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