// Åpne pop up chaten
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Hente verdier
var inputElement = document.getElementById("input");
var outputElement = document.getElementById("output");
var btnElement = document.getElementById("btn-1");


// Få brukern til å sende meldingen sin og kalle brukern for user
btnElement.addEventListener("click", function(event){
    
    event.preventDefault();
    outputElement.innerHTML += "<br/>User: " + inputElement.value
     inputElement.value = "";
    });
