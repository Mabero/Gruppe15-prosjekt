document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const loginBtn = document.getElementById("loginBtn");
const loginFail = document.getElementById("loginFail");

const registerBtn = document.getElementById("registerBtn");
const registerName = document.getElementById("registerName");
const registerPassword = document.getElementById("registerPassword");
const registerSuccess = document.getElementById("registerSuccess");
const registerFail = document.getElementById("registerFail");


let users = [
{
    username: "mats",
    password: "matspassord"
},
{
    username: "stian",
    password: "stianpassord"
},
{
    username: "bjarne",
    password: "bjarnepassord"
},
{
    username: "martin",
    password: "martinpassord"
},
{
    username: "fazal",
    password: "fazalpassord"
},
{
    username: "even",
    password: "evenpassord"
}
];

registerBtn.addEventListener("click", function(){
    for(i = 0; i < users.length; i++) {
        if(registerName.value === users[i].username){
            registerFeedback.innerHTML = "Username is already taken"
            return false;
        } else if (registerName.innerHTML !== users[i].username){
            users.push(
                {
                    username: registerName.value,
                    password: registerName.value
                }
            )
            console.log(users)
            registerFeedback.innerHTML = "Successfully registered user"
            return false;
        }
    }
});

loginBtn.addEventListener("click", function(){
    for(i = 0; i < users.length; i++) {
        if (inputUsername.value === users[i].username && inputPassword.value === users[i].password){
            location.href = "https://qph.fs.quoracdn.net/main-qimg-5c0199ca5b3ef206be5ae41fcce5f1f2.webp"
            return false;
        } else {
            loginFeedback.innerHTML = "Wrong username or password"
        }
    }
})
/*
const dropDown = document.getElementById("")

registerBtn.addEventListener('click', function() {
   // alert("funkaa")
    if(dropDown.style.display === "block") {
        dropDown.style.display = "none"
    } else {
        dropDown.style.display = "block"
    }
    
})*/