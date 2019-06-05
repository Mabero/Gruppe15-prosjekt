var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];

// teller for unik id på kort
var counter = 1;
// teller for hoved noden
var z = 0;
// teller for den første laget
var x0 = 0; var x1 = 0; var x2 = 0; var x3 = 0;
// teller for den andre laget, øvert venstre
var y0 = 0; var y1 = 0; var y2 = 0;
// teller for den andre laget, nederst venstre
var y3 = 0; var y4 = 0; var y5 = 0;
// teller for den andre laget, øverst høyre
var y6 = 0; var y7 = 0; var y8 = 0;
// // teller for den andre laget, nedest høyre
var y9 = 0; var y10 = 0; var y11 = 0;


function createDiv() {
  if (z < 4) {
    var newDiv = document.createElement('div');
    var textTitle = document.createElement("input");
    var button = document.createElement('button');
    var fixBox = document.getElementById("fixBox");
    var line = document.createElement("svg");

    array1.push(newDiv);


    textTitle.setAttribute("class", "inputTitle");
    textTitle.setAttribute("placeholder", "Idea");
    button.setAttribute("id", "progressButton");

    if (z == 0) {
      button.setAttribute("onclick", "createDiv2(0)");
    } if (z == 1) {
      button.setAttribute("onclick", "createDiv2(1)");
    } if (z == 2) {
      button.setAttribute("onclick", "createDiv2(2)");
    } if (z == 3) {
      button.setAttribute("onclick", "createDiv2(3)");
    }

    fixBox.appendChild(newDiv);
    newDiv.appendChild(textTitle);
    newDiv.appendChild(button);
    fixBox.appendChild(line);

    // Div styling
    newDiv.setAttribute("id", "div" + counter)
    newDiv.setAttribute("class", "test-div");
    newDiv.style.height = "150px";
    newDiv.style.width = "150px";
    newDiv.style.color = 'white';
    newDiv.style.backgroundColor = "rgba(150, 70, 150, 0.9)";
    newDiv.style.border = "solid black";
    newDiv.style.opacity = "0.7";
    newDiv.style.borderRadius = "50%";
    newDiv.style.position = "absolute";
    newDiv.style.margin = "1em";


    //Text box styling
    textTitle.style.left = "0%";
    textTitle.style.top = "0%";
    textTitle.style.width = "40px";

    // Button styling
    button.style.height = "40px";
    button.style.width = "40px";
    button.style.top = "-5%";
    button.style.right = "0%";
    button.style.position = "absolute";
    button.style.borderRadius = "50%";
    button.style.opacity = "0.90";
    button.textContent = "+";
    button.textContent.fontsize = "100px";
    button.style.background = "#ff00bf46";

    // 
    line.style.stroke = "#000000"

    if (z == 0) {
      newDiv.style.left = "-75%";
      newDiv.style.top = "-50%";
      line.style.height = "200px";
      line.style.width = "200px";
      line.setAttribute("x1", "-75px");
      line.setAttribute("y1", "-75px");
      line.setAttribute("x2", "0");
      line.setAttribute("y2", "0");
    } if (z == 1) {
      newDiv.style.left = "-75%";
      newDiv.style.bottom = "-50%";
    } if (z == 2) {
      newDiv.style.right = "-75%";
      newDiv.style.top = "-50%";
    } if (z == 3) {
      newDiv.style.right = "-75%";
      newDiv.style.bottom = "-50%";
    }

    z = z + 1;
    counter = counter + 1;
  }
  else {
    alert("fire er Maks");
  }
};

// Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div


function createDiv2(nr) {

  var newDiv2 = document.createElement('div');
  var textTitle2 = document.createElement("input");
  var button2 = document.createElement('button');


  array2.push(newDiv2);

  textTitle2.setAttribute("class", "inputTitle");
  textTitle2.setAttribute("placeholder", "Idea");
  button2.setAttribute("id", "progressButton");

  if (nr == 0) {
    if (x0 == 0) {
      button2.setAttribute("onclick", "createDiv3(0)");
    } if (x0 == 1) {
      button2.setAttribute("onclick", "createDiv3(1)");
    } if (x0 == 2) {
      button2.setAttribute("onclick", "createDiv3(2)");
    }
  }
  if (nr == 1) {
    if (x1 == 0) {
      button2.setAttribute("onclick", "createDiv3(3)");
    } if (x1 == 1) {
      button2.setAttribute("onclick", "createDiv3(4)");
    } if (x1 == 2) {
      button2.setAttribute("onclick", "createDiv3(5)");
    }
  }
  if (nr == 2) {
    if (x2 == 0) {
      button2.setAttribute("onclick", "createDiv3(6)");
    } if (x2 == 1) {
      button2.setAttribute("onclick", "createDiv3(7)");
    } if (x2 == 2) {
      button2.setAttribute("onclick", "createDiv3(8)");
    }
  }
  if (nr == 3) {
    if (x3 == 0) {
      button2.setAttribute("onclick", "createDiv3(9)");
    } if (x3 == 1) {
      button2.setAttribute("onclick", "createDiv3(10)");
    } if (x3 == 2) {
      button2.setAttribute("onclick", "createDiv3(11)");
    }
  }



  fixBox.appendChild(newDiv2);
  newDiv2.appendChild(textTitle2);
  newDiv2.appendChild(button2);


  // Div styling
  newDiv2.setAttribute("id", "div" + counter)
  newDiv2.setAttribute("class", "test-div");
  newDiv2.style.height = "110px";
  newDiv2.style.width = "110px";
  newDiv2.style.color = 'white';
  newDiv2.style.backgroundColor = "rgba(50, 70, 250, 0.9)";
  newDiv2.style.borderRadius = "20px";
  newDiv2.style.border = "solid purple";
  newDiv2.style.opacity = "0.7";
  newDiv2.style.borderRadius = "50%";
  newDiv2.style.margin = "1em";


  //Text box styling
  textTitle2.style.left = "0%";
  textTitle2.style.top = "0%";
  textTitle2.style.width = "40px";
  textTitle2.style.position = "absolute";


  // button2 styling
  button2.style.height = "40px";
  button2.style.width = "40px";
  button2.style.top = "-10%";
  button2.style.right = "-10%";
  button2.style.position = "absolute";
  button2.style.borderRadius = "50%";
  button2.style.opacity = "0.90";
  button2.textContent = "+";
  button2.textContent.fontsize = "100px";
  button2.style.background = "#ff00bf46";

  if (nr == 0) {
    if (x0 == 0) {
      newDiv2.style.left = "-125%"
      newDiv2.style.top = "-100%"
    } if (x0 == 1) {
      newDiv2.style.left = "-150%"
      newDiv2.style.top = "-25%"
    } if (x0 == 2) {
      newDiv2.style.left = "-50%"
      newDiv2.style.top = "-125%"
    } if (x0 > 2) {
      alert("max 3 here")
      return
    }
    x0 = x0 + 1;
  }

  if (nr == 1) {
    if (x1 == 0) {
      newDiv2.style.left = "-125%";
      newDiv2.style.bottom = "-100%"
    } if (x1 == 1) {
      newDiv2.style.left = "-150%"
      newDiv2.style.bottom = "-25%"
    } if (x1 == 2) {
      newDiv2.style.left = "-50%"
      newDiv2.style.bottom = "-125%"
    } if (x1 > 2) {
      alert("max 3 here")
      return
    }
    x1 = x1 + 1;
  }
  if (nr == 2) {
    if (x2 == 0) {
      newDiv2.style.right = "-125%";
      newDiv2.style.top = "-100%"
    } if (x2 == 1) {
      newDiv2.style.right = "-150%"
      newDiv2.style.top = "-25%"
    } if (x2 == 2) {
      newDiv2.style.right = "-50%"
      newDiv2.style.top = "-125%"
    } if (x2 > 2) {
      alert("max 3 here")
      return
    }
    x2 = x2 + 1;
  }


  if (nr == 3) {
    if (x3 == 0) {
      newDiv2.style.right = "-125%";
      newDiv2.style.bottom = "-100%"
    } if (x3 == 1) {
      newDiv2.style.right = "-150%"
      newDiv2.style.bottom = "-25%"
    } if (x3 == 2) {
      newDiv2.style.right = "-50%"
      newDiv2.style.bottom = "-125%"

    } if (x3 > 2) {
      alert("max 3 here")
      return
    }
    x3 = x3 + 1;
  }

  counter = counter + 1;
};



// Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div


function createDiv3(nr) {
  var newDiv3 = document.createElement('div');
  var textTitle3 = document.createElement("input");
  var button3 = document.createElement('button');

  array3.push(newDiv3);


  textTitle3.setAttribute("class", "inputTitle");
  textTitle3.setAttribute("placeholder", "Idea");
  button3.setAttribute("id", "progressButton");

  if (nr == 0) {
    if (y0 == 0) {
      button3.setAttribute("onclick", "createDiv4(0)");
    } if (y0 == 1) {
      button3.setAttribute("onclick", "createDiv4(1)");
    }
  }
  if (nr == 1) {
    if (y1 == 0) {
      button3.setAttribute("onclick", "createDiv4(2)");
    } if (y1 == 1) {
      button3.setAttribute("onclick", "createDiv4(3)");
    }
  }
  if (nr == 2) {
    if (y2 == 0) {
      button3.setAttribute("onclick", "createDiv4(4)");
    } if (y2 == 1) {
      button3.setAttribute("onclick", "createDiv4(5)");
    }
  }
  if (nr == 3) {
    if (y3 == 0) {
      button3.setAttribute("onclick", "createDiv4(6)");
    } if (y3 == 1) {
      button3.setAttribute("onclick", "createDiv4(7)");
    }
  }
  if (nr == 4) {
    if (y4 == 0) {
      button3.setAttribute("onclick", "createDiv4(8)");
    } if (y4 == 1) {
      button3.setAttribute("onclick", "createDiv4(9)");
    }
  }
  if (nr == 5) {
    if (y5 == 0) {
      button3.setAttribute("onclick", "createDiv4(11)");
    } if (y5 == 1) {
      button3.setAttribute("onclick", "createDiv4(12)");
    }
  }
  if (nr == 6) {
    if (y6 == 0) {
      button3.setAttribute("onclick", "createDiv4(13)");
    } if (y6 == 1) {
      button3.setAttribute("onclick", "createDiv4(14)");
    }
  }
  if (nr == 7) {
    if (y7 == 0) {
      button3.setAttribute("onclick", "createDiv4(15)");
    } if (y7 == 1) {
      button3.setAttribute("onclick", "createDiv4(15)");
    }
  }
  if (nr == 8) {
    if (y8 == 0) {
      button3.setAttribute("onclick", "createDiv4(16)");
    } if (y8 == 1) {
      button3.setAttribute("onclick", "createDiv4(17)");
    }
  }
  if (nr == 9) {
    if (y9 == 0) {
      button3.setAttribute("onclick", "createDiv4(18)");
    } if (y9 == 1) {
      button3.setAttribute("onclick", "createDiv4(19)");
    }
  }
  if (nr == 10) {
    if (y10 == 0) {
      button3.setAttribute("onclick", "createDiv4(20)");
    } if (y10 == 1) {
      button3.setAttribute("onclick", "createDiv4(21)");
    }
  }
  if (nr == 11) {
    if (y11 == 0) {
      button3.setAttribute("onclick", "createDiv4(22)");
    } if (y11 == 1) {
      button3.setAttribute("onclick", "createDiv4(23)");
    }
  }



  fixBox.appendChild(newDiv3);
  newDiv3.appendChild(textTitle3);
  newDiv3.appendChild(button3);


  // Div styling
  newDiv3.setAttribute("id", "div" + counter)
  newDiv3.setAttribute("class", "test-div");
  newDiv3.style.height = "90px";
  newDiv3.style.width = "90px";
  newDiv3.style.color = 'white';
  newDiv3.style.backgroundColor = "rgba(50, 250, 90, 0.9)";
  newDiv3.style.borderRadius = "20px";
  newDiv3.style.border = "solid blue";
  newDiv3.style.opacity = "0.7";
  newDiv3.style.borderRadius = "50%";
  newDiv3.style.position = "absolute";
  newDiv3.style.margin = "1em";



  //Text box styling
  textTitle3.style.left = "0%";
  textTitle3.style.top = "0%";
  textTitle3.style.width = "40px";
  textTitle3.style.position = "absolute";


  // button3 styling
  button3.style.height = "40px";
  button3.style.width = "40px";
  button3.style.top = "0%";
  button3.style.left = "40%";
  button3.style.position = "absolute";
  button3.style.borderRadius = "50%";
  button3.style.opacity = "0.90";
  button3.textContent = "+";
  button3.textContent.fontsize = "100px";
  button3.style.background = "#ff00bf46"

  if (nr == 0) {
    if (y0 == 0) {
      newDiv3.style.left = "-140%"
      newDiv3.style.top = "-160%"
    } if (y0 == 1) {
      newDiv3.style.left = "-180%"
      newDiv3.style.top = "-110%"
    } if (y0 > 1) {
      alert("max 2 here")
      return
    }
    y0 = y0 + 1;
  }

  if (nr == 1) {
    if (y1 == 0) {
      newDiv3.style.left = "-200%"
      newDiv3.style.top = "-60%"
    } if (y1 == 1) {
      newDiv3.style.left = "-200%"
      newDiv3.style.top = "-0%"
    } if (y1 > 1) {
      alert("max 2 here")
      return
    }
    y1 = y1 + 1;
  }

  if (nr == 2) {
    if (y2 == 0) {
      newDiv3.style.left = "-0%"
      newDiv3.style.top = "-180%"
    } if (y2 == 1) {
      newDiv3.style.left = "-70%"
      newDiv3.style.top = "-180%"
    } if (y2 > 1) {
      alert("max 2 here")
      return
    }
    y2 = y2 + 1;
  }



  if (nr == 3) {
    if (y3 == 0) {
      newDiv3.style.left = "-140%"
      newDiv3.style.bottom = "-160%"
    } if (y3 == 1) {
      newDiv3.style.left = "-180%"
      newDiv3.style.bottom = "-110%"
    } if (y3 > 1) {
      alert("max 2 here")
      return
    }
    y3 = y3 + 1;
  }

  if (nr == 4) {
    if (y4 == 0) {
      newDiv3.style.left = "-200%"
      newDiv3.style.bottom = "-60%"
    } if (y4 == 1) {
      newDiv3.style.left = "-200%"
      newDiv3.style.bottom = "-0%"
    } if (y4 > 1) {
      alert("max 2 here")
      return
    }
    y4 = y4 + 1;
  }

  if (nr == 5) {
    if (y5 == 0) {
      newDiv3.style.left = "-0%"
      newDiv3.style.bottom = "-180%"
    } if (y5 == 1) {
      newDiv3.style.left = "-70%"
      newDiv3.style.bottom = "-180%"
    } if (y5 > 1) {
      alert("max 2 here")
      return
    }
    y5 = y5 + 1;
  }

  if (nr == 6) {
    if (y6 == 0) {
      newDiv3.style.right = "-140%"
      newDiv3.style.top = "-160%"
    } if (y6 == 1) {
      newDiv3.style.right = "-180%"
      newDiv3.style.top = "-110%"
    } if (y6 > 1) {
      alert("max 2 here")
      return
    }
    y6 = y6 + 1;
  }

  if (nr == 7) {
    if (y7 == 0) {
      newDiv3.style.right = "-200%"
      newDiv3.style.top = "-60%"
    } if (y7 == 1) {
      newDiv3.style.right = "-200%"
      newDiv3.style.top = "-0%"
    } if (y7 > 1) {
      alert("max 2 here")
      return
    }
    y7 = y7 + 1;
  }

  if (nr == 8) {
    if (y8 == 0) {
      newDiv3.style.right = "-0%"
      newDiv3.style.top = "-180%"
    } if (y8 == 1) {
      newDiv3.style.right = "-70%"
      newDiv3.style.top = "-180%"
    } if (y8 > 1) {
      alert("max 2 here")
      return
    }
    y8 = y8 + 1;
  }

  if (nr == 9) {
    if (y9 == 0) {
      newDiv3.style.right = "-140%"
      newDiv3.style.bottom = "-160%"
    } if (y9 == 1) {
      newDiv3.style.right = "-180%"
      newDiv3.style.bottom = "-110%"
    } if (y9 > 1) {
      alert("max 2 here")
      return
    }
    y9 = y9 + 1;
  }

  if (nr == 10) {
    if (y10 == 0) {
      newDiv3.style.right = "-200%"
      newDiv3.style.bottom = "-60%"
    } if (y10 == 1) {
      newDiv3.style.right = "-200%"
      newDiv3.style.bottom = "-0%"
    } if (y10 > 1) {
      alert("max 2 here")
      return
    }
    y10 = y10 + 1;
  }

  if (nr == 11) {
    if (y11 == 0) {
      newDiv3.style.right = "-0%"
      newDiv3.style.bottom = "-180%"
    } if (y11 == 1) {
      newDiv3.style.right = "-70%"
      newDiv3.style.bottom = "-180%"
    } if (y11 > 1) {
      alert("max 2 here")
      return
    }
    y11 = y11 + 1;
  }

  counter = counter + 1;
};

// Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div Next div


function createDiv4(nr) {
  var newDiv4 = document.createElement('div');
  var textTitle4 = document.createElement("input");
  var button4 = document.createElement('button');

  array4.push(newDiv4);



  textTitle4.setAttribute("class", "inputTitle");
  textTitle4.setAttribute("placeholder", "Idea");
  button4.setAttribute("id", "progressButton");


  fixBox.appendChild(newDiv4);
  newDiv4.appendChild(textTitle4);
  newDiv4.appendChild(button4);


  // Div styling
  newDiv4.setAttribute("id", "div" + counter)
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
  newDiv4.style.position = "absolute";
  newDiv4.style.margin = "1em";
  newDiv4.style.bottom = "20%";


  //Text box styling
  textTitle4.style.left = "0%";
  textTitle4.style.top = "-20%";
  textTitle4.style.width = "40px";
  textTitle4.style.position = "absolute";


  // button4 styling
  button4.style.height = "40px";
  button4.style.width = "40px";
  button4.style.top = "0%";
  button4.style.left = "40%";
  button4.style.position = "absolute";
  button4.style.borderRadius = "50%";
  button4.style.opacity = "0.90";
  button4.textContent = "+";
  button4.textContent.fontsize = "100px";
  button4.style.background = "#ff00bf46";
  button4.style.opacity = "0";

  counter = counter + 1;
};

