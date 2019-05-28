function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    if ( ev.target.className == "list")  {
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}

function allowDrop1(ev) {
    ev.preventDefault();
}

function drag1(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop1(ev) {
    ev.preventDefault();
    if ( event.target.className == "listWrap" ) {
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}