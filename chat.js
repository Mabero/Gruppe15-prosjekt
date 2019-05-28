function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var inputElement = document.getElementById("input");
var msgElement = document.getElementById("msg");


var btnElement = document.getElementById("btn-1");

btnElement.addEventListener("click", function() {
	if(inputElement.value === "hei"){
		msg.innerText ="hdhdhhd";
	}
       });


