document.getElementById("calendarButton").addEventListener("click", testing);

function testing() {
  alert("Kalender")
}


let textnode = document.createTextNode(myFunction);

function myFunction() {
  document.getElementById("frm1").submit();
  var el = document.querySelector('frm1');
  var newEl = document.createElement('p');
  newEl.innerHTML = document.getElementById("frm1")();
  el.parentNode.replaceChild(newEl, el);
}