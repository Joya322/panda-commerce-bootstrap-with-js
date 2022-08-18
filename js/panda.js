//task-2
const allH2 = document.getElementsByTagName("h2");
for (const h2 of allH2) {
  h2.style.color = "lightblue";
}

//task-3
document.getElementById("backpack").style.backgroundColor = "tomato";

//task-4

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

//task-5

document.getElementById("console-log").addEventListener("click", function () {
  console.log("Nike 360 button is clicked");
});

//task-6

const removeButtons = document.getElementsByClassName("remove-btn");
for (const removeButton of removeButtons) {
  removeButton.addEventListener("click", function () {
    removeButton.style.display = "none";
  });
}

// task-7

document
  .getElementById("exampleInputEmail1")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const targetButton = document.getElementById("disable-enable-btn");
    if (text === "email") {
      targetButton.removeAttribute("disabled");
    } else {
      targetButton.setAttribute("disabled", true);
    }
  });

//task-8

const changedImage = document.getElementById("changed-image");
changedImage.addEventListener("mouseenter", function () {
  changedImage.src = "./images/shoes/changedPicture.png";
});

//task-9
const subscribeBody = document.getElementById("subscribe");
subscribeBody.addEventListener("dblclick", function (event) {
    subscribeBody.style.backgroundColor = "steelblue";
    
});

document.getElementById("heading").addEventListener("dblclick", function (event) {
    event.stopPropagation();
});
document.getElementById("para").addEventListener("dblclick", function (event) {
    event.stopPropagation();
});
document.getElementById("form").addEventListener("dblclick", function (event) {
    event.stopPropagation();
});
