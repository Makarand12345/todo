let counter = 0;

function onDelete(e) {
  document.getElementById(e.target.id).remove();
}

function onMouseIn(e) {
  console.log("focussing");
  document.getElementById(e.target.id).style.color = "black";
}

function onMouseOut(e) {
  console.log("focussing");
  document.getElementById(e.target.id).style.color = "grey";
}

function onAdd() {
  const inputBox = document.getElementById("inputBox");
  const taskContainer = document.getElementById("taskContainer");

  if (inputBox.value.length === 0) {
    alert("Task cannot be empty!");
    return;
  }

  const taskItem = document.createElement("p");
  taskItem.innerHTML = inputBox.value;
  taskItem.id = counter++;
  taskItem.addEventListener("click", onDelete);
  taskItem.addEventListener("mouseover", onMouseIn);
  taskItem.addEventListener("mouseout", onMouseOut);
  taskItem.style.cursor = "pointer";

  taskContainer.appendChild(taskItem);

  inputBox.value = "";
  inputBox.focus();
}
