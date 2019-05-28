var taskInput = document.getElementById("addNode");
var addButton = document.getElementsById("input")[0];

var createNewTaskElement = function(addNode) {
  //Create List Item
  var newNodeDiv = document.createElement("div");

  return newNodeDiv;
}

var addIdea = function() {
  console.log("Adding idea...");
  var newNodeDiv = createNewTaskElement(taskInput.value);
  incompleteTasksHolder.appendChild(newNodeDiv);
  bindTaskEvents(newNodeDiv, taskCompleted);  
  
  taskInput.value = "";   
}

addButton.addEventListener("click", addIdea);

document.getElementById("newNodeDiv").innerHTML = "Paragraph changed!";