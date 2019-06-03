var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];


console.log(array1);


function createDiv() {
  var newDiv = document.createElement('div');
  var textTitle = document.createElement("input");
  var button = document.createElement('button');


  var inputText = document.querySelector(".nodeText").value;
  var commitText = document.createElement("p");
  var pos = document.getElementById("mainNode");
  commitText.textContent = inputText;

  

  array1.push(newDiv);

  

  console.log(array1);

  textTitle.setAttribute("class","inputTitle");
  textTitle.setAttribute("placeholder", "Idea");
  button.setAttribute("id", "progressButton");
  button.setAttribute("onclick", "createDiv2()"); 

  
  nodeContainer.appendChild(newDiv);
  newDiv.appendChild(textTitle);
  newDiv.appendChild(button);
  pos.appendChild(commitText);
  nodeContainer.appendChild(pos);





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
  newDiv.style.left = "30%";
  newDiv.style.position = "relative";
  newDiv.style.margin = "1em";


  //Text box styling
  textTitle.style.left ="0%";
  textTitle.style.top ="0%";
  textTitle.style.width = "40px";
  textTitle.style.position = "relative";

  commitText.style.left = "0%";
  commitText.style.top = "-260px";
  commitText.style.position = "relative";


  // Button styling
  button.style.height = "40px";
  button.style.width = "40px";
  button.style.top = "-100px";
  button.style.left = "70%";
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
  var textTitle2 = document.createElement("input");
  var button2 = document.createElement('button');
  

  array2.push(newDiv2);

  console.log(array2);

  textTitle2.setAttribute("class","inputTitle");
  textTitle2.setAttribute("placeholder", "Idea");
  button2.setAttribute("id", "progressButton");
  button2.setAttribute("onclick", "createDiv3()"); 

  
  nodeContainer.appendChild(newDiv2);
  newDiv2.appendChild(textTitle2);
  newDiv2.appendChild(button2);


  // Div styling
  newDiv2.setAttribute("class", "test-div");
  newDiv2.style.height = "110px";
  newDiv2.style.width = "110px";
  newDiv2.style.color = 'white';
  newDiv2.style.backgroundColor = "rgba(50, 70, 250, 0.9)";
  newDiv2.style.borderRadius = "20px";
  newDiv2.style.border = "solid purple";
  newDiv2.style.opacity = "0.7";
  newDiv2.style.borderRadius = "50%";
  newDiv2.style.left = "25%";
  newDiv2.style.position = "relative";
  newDiv2.style.margin = "1em";


  //Text box styling
  textTitle2.style.left ="0%";
  textTitle2.style.top ="0%";
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
  var textTitle3 = document.createElement("input");
  var button3 = document.createElement('button');

  array3.push(newDiv3);

  console.log(array3);

  textTitle3.setAttribute("class","inputTitle");
  textTitle3.setAttribute("placeholder", "Idea");
  button3.setAttribute("id", "progressButton");
  button3.setAttribute("onclick", "createDiv4()");

  
  nodeContainer.appendChild(newDiv3);
  newDiv3.appendChild(textTitle3);
  newDiv3.appendChild(button3);


  // Div styling
  newDiv3.setAttribute("class", "test-div");
  newDiv3.style.height = "90px";
  newDiv3.style.width = "90px";
  newDiv3.style.color = 'white';
  newDiv3.style.backgroundColor = "rgba(50, 250, 90, 0.9)";
  newDiv3.style.borderRadius = "20px";
  newDiv3.style.border = "solid blue";
  newDiv3.style.opacity = "0.7";
  newDiv3.style.borderRadius = "50%";
  newDiv3.style.left = "20%";
  newDiv3.style.position = "relative";
  newDiv3.style.margin = "1em";
  


  //Text box styling
  textTitle3.style.left ="0%";
  textTitle3.style.top ="0%";
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


// Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div

console.log(array4);


function createDiv4() {
  var newDiv4 = document.createElement('div');
  var textTitle4 = document.createElement("input");
  var button4 = document.createElement('button');

  array4.push(newDiv4);

  console.log(array4);

  textTitle4.setAttribute("class","inputTitle");
  textTitle4.setAttribute("placeholder", "Idea");
  button4.setAttribute("id", "progressButton");

  
  nodeContainer.appendChild(newDiv4);
  newDiv4.appendChild(textTitle4);
  newDiv4.appendChild(button4);


  // Div styling
  newDiv4.setAttribute("class", "test-div");
  newDiv4.style.height = "80px";
  newDiv4.style.width = "80px";
  newDiv4.style.color = 'white';
  newDiv4.style.backgroundColor = "rgba(250, 250, 90, 0.9)";
  newDiv4.style.borderRadius = "20px";
  newDiv4.style.border = "solid green";
  newDiv4.style.opacity = "0.7";
  newDiv4.style.borderRadius = "50%";
  newDiv4.style.left = "15%";
  newDiv4.style.position = "relative";
  newDiv4.style.margin = "1em";
  newDiv4.style.bottom = "20%";


  //Text box styling
  textTitle4.style.left ="0%";
  textTitle4.style.top ="-20%";
  textTitle4.style.width = "40px";
  textTitle4.style.position = "relative";


  // button4 styling
  button4.style.height = "40px";
  button4.style.width = "40px";
  button4.style.top = "0%";
  button4.style.left = "40%";
  button4.style.position = "relative";
  button4.style.borderRadius ="50%";
  button4.style.opacity = "0.90";
  button4.textContent = "+";
  button4.textContent.fontsize ="100px";
  button4.style.background = "#ff00bf46";
  button4.style.opacity = "0";
};


array1[0] = array2;


