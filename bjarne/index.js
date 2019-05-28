var test1 = document.getElementsByClassName("list");

if test1 {
    function allowDrop(ev) {
        ev.preventDefault();
    }
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev)
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}