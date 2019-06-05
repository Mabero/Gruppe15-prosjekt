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
    id: 1,
    username: "mats",
    password: "mats"
},
{
    id: 2,
    fullname: "Stian Greiner Haaker",
    username: "stian",
    password: "stian"
},
{
    id: 3,
    username: "bjarne",
    password: "bjarne"
},
{
    id: 4,
    username: "martin",
    password: "martin"
},
{
    id: 5,
    username: "fazal",
    password: "fazal"
},
{
    id: 6,
    username: "even",
    password: "even"
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
                    password: registerPassword.value
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
            document.cookie = inputUsername.value + "; expires=0; path=/";
            location.href = "/git/boards/boards.html"
            return false;
        } else {
            loginFeedback.innerHTML = "Wrong username or password"
        }
    }
})
