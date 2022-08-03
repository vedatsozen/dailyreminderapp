function adddate() {

const newContainerDiv = document.createElement("newdiv");
document.getElementById("container").appendChild(newContainerDiv)
const myDate = document.getElementById("dateid").value;
const newTask = document.getElementById("taskid").value;
const newDateDiv = document.createElement("div");
const newDiv = document.createElement("div");
const newButton = document.createElement("button");
newContainerDiv.appendChild(newDiv);
newContainerDiv.appendChild(newDateDiv);
newContainerDiv.appendChild(newButton);
newButton.innerHTML = "Sil";
newContainerDiv.classList.add("containerclass");
newDiv.classList.add("taskclass");
newButton.classList.add("buttonclass");
newDiv.innerHTML = newTask;
newDateDiv.classList.add("dateclass");
newDateDiv.innerHTML = myDate;

newButton.addEventListener("click", function() {

newContainerDiv.remove();

    
});

}





