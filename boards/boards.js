const boardsBtn = document.getElementById("boardsBtn");
const boardsContainer = document.getElementById("boardsContainer");

let boards = [];
let boardsObjs = [];
let iframes = [];
let backBtns = [];
let boardHeaders = [];
let inputFields = [];

boardsBtn.addEventListener("click", function () {

    /*======= CREATING ELEMENTS =========*/
    const newA = document.createElement("a");
    const removeA = document.createElement("a");
    const newDiv = document.createElement("div");
    const newInputField = document.createElement("input");
    const ifrm = document.createElement("iframe");
    const backBtn = document.createElement("a");
    const boardHeader = document.createElement("h1");

    /*======= BOARD CONTAINER =========*/
    boardsContainer.appendChild(newDiv);
    boardsContainer.appendChild(boardsBtn);
    boardsContainer.appendChild(backBtn);

    /*======= SETTING CLASSES =========*/
    newInputField.className = "inputField"
    ifrm.className = "iframe"
    boardHeader.className = "boardHeader"


    /*======= BOARD DIVS =========*/
    newDiv.className = "board";
    newA.className = "boardA";
    removeA.className = "removeA";

    newDiv.appendChild(newInputField);
    newDiv.appendChild(removeA);
    newDiv.appendChild(newA);

    newInputField.placeholder = "Enter board name ..."
    inputFields.push(newInputField);

    newA.textContent = "Go to board"
    removeA.textContent = "Remove board";

    //newA.href = "javascript:hideShowFrame()"
    //removeA.href = "javascript:removeBoard()";

    newA.after(removeA);
    newDiv.after(boardsBtn);

    boards.push(newDiv);

    /*======= BACK BUTTON =========*/
    backBtn.className = "backButtons";
    backBtn.textContent = "Go back"
    backBtn.href = "javascript:hideShowFrame()";
    backBtn.style.display = "none";
    backBtns.push(backBtn);


    /*======= BOARD HEADER =========*/
    boardsContainer.appendChild(boardHeader);
    boardHeaders.push(boardHeader);

    /*======= IFRAMES =========*/
    document.body.appendChild(ifrm);
    ifrm.setAttribute("src", "../cardsNstuff.html");
    iframes.push(ifrm);

    for (i = 0; i < iframes.length; i++) {
        ifrm.id = "iframe" + i;
        backBtn.id = "backBtn" + i;
        boardHeader.id = "boardHeader" + i;
        newInputField.id = "inputField" + i;
    }

    for (i = 0; i < boards.length; i++) {
        boards[i].setAttribute("id", "board" + i);
        boards[i].childNodes[2].setAttribute("onclick", "removeBoard(" + i + ")")
        boards[i].childNodes[1].setAttribute("onclick", "hideShowFrame(" + i + ")")
    };
    /*
        for (i = 0; i < boards.length; i++) {
            document.getElementById("board" + i).addEventListener("keyup", function (event) {
                const key = event.which || event.keyCode;
                if (key === 13) {
                    const boardObj = {
                        name: newInputField.value,
                    }
                    boardsObjs.push(boardObj);
                }
            });
        }
        */
})

function removeBoard(i) {
    const board = document.getElementById("board" + i)
    board.remove();

    const iframe = document.getElementById("iframe" + i);
    iframe.remove();

    const backBtn = document.getElementById("backBtn" + i)
    backBtn.remove();

    const boardHeader = document.getElementById("boardHeader" + i)
    boardHeader.remove();
}

function hideShowFrame(nr) {
    if (nr === undefined) {
        for (i = 0; i < iframes.length; i++) {
            iframes[i].style.display = "none";
            backBtns[i].style.display = "none";
            boardHeaders[i].style.display = "none";
        }
        return;
    }
    iframes[nr].style.display = "block";
    backBtns[nr].style.display = "block";
    boardHeaders[nr].style.display = "block";
    boardHeaders[nr].textContent = inputFields[nr].value;
}

/*======= TOP MENU IFRAMES =========*/

const profileFrame = document.getElementById("profileIfrm");
const profileBtn = document.getElementById("profileBtn");
const boardsMain = document.getElementById("boardsMain");

const calendarFrame = document.getElementById("calendarIfrm");
const calendarBtn = document.getElementById("calendarBtn");

profileBtn.addEventListener("click", function() {
    profileFrame.style.zIndex = 10;
    profileFrame.style.display = "block";
    document.body.style.overflow = "hidden";

    profileBtn.classList.add("currentLink")
    boardsMain.classList.remove("currentLink")

    hideShowFrame();
})

boardsMain.addEventListener("click", function() {
    profileFrame.style.display = "none";
    calendarFrame.style.display = "none"
    boardsMain.classList.add("currentLink");
    profileBtn.classList.remove("currentLink");
    calendarBtn.classList.remove("currentLink");

})

calendarBtn.addEventListener("click", function() {
    calendarFrame.style.zIndex = 10;
    calendarFrame.style.display = "block";
    document.body.style.overflow = "hidden";

    calendarBtn.classList.add("currentLink")
    boardsMain.classList.remove("currentLink")

    hideShowFrame();
})