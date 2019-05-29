function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";  
}

var inputElement = document.getElementById("input");
var outputElement = document.getElementById("output");
var btnElement = document.getElementById("btn-1");

btnElement.addEventListener("click", function(event){
    
    event.preventDefault();
    outputElement.innerHTML += "<br/>User: " + inputElement.value
     inputElement.value = "";
    });



    
    

