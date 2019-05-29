



var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];
var array7 = [];
var array8 = [];


console.log(array1);


function createDiv() {
  var newDiv = document.createElement('div');
  var textTitle = document.createElement("textarea");
  var button = document.createElement('button');

  array1.push(newDiv);

  console.log(array1);

  textTitle.setAttribute("class","inputTitle");
  button.setAttribute("id", "progressButton");
  button.setAttribute("onclick", "createDiv2()"); 

  
  document.body.appendChild(newDiv);
  newDiv.appendChild(textTitle);
  newDiv.appendChild(button);


  // Div styling
  newDiv.setAttribute("class", "test-div");
  newDiv.style.height = "150px";
  newDiv.style.width = "150px";
  newDiv.style.color = 'white';
  newDiv.style.backgroundColor = "rgba(150, 70, 150, 0.9)";
  newDiv.style.borderRadius = "20px";
  newDiv.style.border = "solid black";
  newDiv.style.opacity = "0.7";
  newDiv.style.borderRadius = "50%";


  //Text box styling
  textTitle.style.left ="30%";
  textTitle.style.top ="20%";
  textTitle.style.width = "40px";
  textTitle.style.position = "relative";


  // Button styling
  button.style.height = "40px";
  button.style.width = "40px";
  button.style.top = "0%";
  button.style.left = "40%";
  button.style.position = "relative";
  button.style.borderRadius ="50%";
  button.style.opacity = "0.90";
  button.textContent = "+";
  button.textContent.fontsize ="100px";
  button.style.background = "#ff00bf46";
};




// Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div


console.log(array2);


function createDiv2() {
  var newDiv2 = document.createElement('div');
  var textTitle2 = document.createElement("textarea");
  var button2 = document.createElement('button');

  array2.push(newDiv2);

  console.log(array2);

  textTitle2.setAttribute("class","inputTitle");
  button2.setAttribute("id", "progressButton");
  button2.setAttribute("onclick", "createDiv3()"); 

  
  document.body.appendChild(newDiv2);
  newDiv2.appendChild(textTitle2);
  newDiv2.appendChild(button2);


  // Div styling
  newDiv2.setAttribute("class", "test-div");
  newDiv2.style.height = "110px";
  newDiv2.style.width = "110px";
  newDiv2.style.color = 'white';
  newDiv2.style.backgroundColor = "rgba(50, 70, 250, 0.9)";
  newDiv2.style.borderRadius = "20px";
  newDiv2.style.border = "solid yellow";
  newDiv2.style.opacity = "0.7";
  newDiv2.style.borderRadius = "50%";


  //Text box styling
  textTitle2.style.left ="30%";
  textTitle2.style.top ="20%";
  textTitle2.style.width = "40px";
  textTitle2.style.position = "relative";


  // button2 styling
  button2.style.height = "40px";
  button2.style.width = "40px";
  button2.style.top = "0%";
  button2.style.left = "40%";
  button2.style.position = "relative";
  button2.style.borderRadius ="50%";
  button2.style.opacity = "0.90";
  button2.textContent = "+";
  button2.textContent.fontsize ="100px";
  button2.style.background = "#ff00bf46";
};


// Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div


console.log(array3);


function createDiv3() {
  var newDiv3 = document.createElement('div');
  var textTitle3 = document.createElement("textarea");
  var button3 = document.createElement('button');

  array3.push(newDiv3);

  console.log(array3);

  textTitle3.setAttribute("class","inputTitle");
  button3.setAttribute("id", "progressButton");

  
  document.body.appendChild(newDiv3);
  newDiv3.appendChild(textTitle3);
  newDiv3.appendChild(button3);


  // Div styling
  newDiv3.setAttribute("class", "test-div");
  newDiv3.style.height = "90px";
  newDiv3.style.width = "90px";
  newDiv3.style.color = 'white';
  newDiv3.style.backgroundColor = "rgba(50, 250, 90, 0.9)";
  newDiv3.style.borderRadius = "20px";
  newDiv3.style.border = "solid red";
  newDiv3.style.opacity = "0.7";
  newDiv3.style.borderRadius = "50%";


  //Text box styling
  textTitle3.style.left ="30%";
  textTitle3.style.top ="20%";
  textTitle3.style.width = "40px";
  textTitle3.style.position = "relative";


  // button3 styling
  button3.style.height = "40px";
  button3.style.width = "40px";
  button3.style.top = "0%";
  button3.style.left = "40%";
  button3.style.position = "relative";
  button3.style.borderRadius ="50%";
  button3.style.opacity = "0.90";
  button3.textContent = "+";
  button3.textContent.fontsize ="100px";
  button3.style.background = "#ff00bf46"  
};










