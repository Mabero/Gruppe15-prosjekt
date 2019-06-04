function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Funksjonen som velger fra dropdown menyen hvilket medlem som er tillagt kortet.

function addMember(check) {
    var showMember = document.createElement("div");
    var whichMember = document.createElement("div");

    container.appendChild(showMember);
    showMember.appendChild(whichMember);

    showMember.setAttribute("id", "showMember");
    showMember.setAttribute("class", "showMember");
    showMember.style.height = "50px";
    showMember.style.width = "50px";
    showMember.style.backgroundColor = "#f2f2f2";
    showMember.style.borderRadius = "50%";


    whichMember.setAttribute("id", "whichMember");
    whichMember.textContent = check;
    whichMember.style.fontSize = "40px";
    whichMember.align = "center";

    console.log(check);
}