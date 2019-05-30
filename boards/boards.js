const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

let boards = [];

boardsBtn.addEventListener("click", function(){
    const newA = document.createElement("a");
    const removeA = document.createElement("a");
    const newDiv = document.createElement("div");
    const newInputField = document.createElement("input");

    newInputField.placeholder = "Enter board name ..."
    newDiv.className = "board";
    newDiv.appendChild(newInputField);
    boardsContainer.appendChild(newDiv);

    newA.textContent = "Go to board"
    removeA.textContent = "Remove board";

    newDiv.appendChild(removeA);
    newDiv.appendChild(newA);

    newA.href = "https://www.vg.no"
    newA.className = "boardA";
    removeA.className = "removeA";
    removeA.href = "javascript:removeBoard()";

    newA.after(removeA);
    newDiv.after(boardsBtn);

    boardsContainer.appendChild(boardsBtn);
    boards.push(newDiv)
    for(i = 0; i < boards.length; i++) {
        boards[i].setAttribute("id", "board" + i);
        boards[i].childNodes[2].setAttribute("onclick", "removeBoard("+ i +")")
    }
})

function removeBoard(i) {
    const board = document.getElementById("board" + i)
    board.remove();
}



