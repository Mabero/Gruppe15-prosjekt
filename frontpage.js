document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const dropDown = document.getElementById("")

registerBtn.addEventListener('click', function() {
   // alert("funkaa")
    if(dropDown.style.display === "block") {
        dropDown.style.display = "none"
    } else {
        dropDown.style.display = "block"
    }
    
})*/