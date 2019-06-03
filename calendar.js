// Funksjon som viser hvilken dato det er i dag, og displayer den først i flexen.

var d = new Date();


function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}


for (i = d.getDate(); i < daysInMonth(d.getMonth(), d.getFullYear()); i++) {
    const node = document.createElement("div");
    node.innerHTML = i;
    document.getElementById("daysContainer").appendChild(node);
}




// Månedsnavn for å ha over kalenderen. Sier ifra hvilken måned du er i.
var m = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = months[m.getMonth()];






// Åpner en task med en pop-up

function openForm() {
    document.getElementById("project1").style.display = "block";
    document.getElementById("project1").style.transition = "2s all ease-out";
}

function closeForm() {
    document.getElementById("project1").style.display = "none";
    document.getElementById("project1").style.transition = "2s all ease-out";
}