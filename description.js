


function text2 (){
    var inputText = document.getElementsByName("tekst")[0].value;
    var newText = document.createElement("p");
    document.body.appendChild(newText);
    newText.textContent = inputText;
}
