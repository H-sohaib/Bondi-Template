let navButton = document.querySelector("#i");
let nav = document.querySelector("header nav");
let stat = false;

navButton.addEventListener("click", () => {
  stat ? (stat = false) : (stat = true);
  if (stat) {
    nav.style.height = "300px";
    navButton.style.cssText = "margin: 9px 0 auto auto;";
  } else {
    nav.style.height = "66px";
  }
});

// portfolio filter *************************************************************
let button = Array.from(document.querySelectorAll("#buttons li"));
let boxes = document.querySelectorAll("#filter .box");
// console.log(boxes);

button.forEach((li) => {
  li.onclick = () => {
    removeactive(button, li, "activeF");
    switch (li.innerHTML) {
      case "ALL":
        showallbox(boxes);
        break;
      case "Apps":
        showallbox(boxes);
        boxes.forEach((box) => {
          if (box.getAttribute("data-type") != "Apps") {
            box.style.display = "none";
          }
        });
        break;
      case "Photography":
        showallbox(boxes);
        boxes.forEach((box) => {
          if (box.getAttribute("data-type") != "Photography") {
            box.style.display = "none";
          }
        });
        break;
      case "Design":
        showallbox(boxes);
        boxes.forEach((box) => {
          if (box.getAttribute("data-type") != "Design") {
            box.style.display = "none";
          }
        });
        break;
      case "Code":
        showallbox(boxes);
        boxes.forEach((box) => {
          if (box.getAttribute("data-type") != "Code") {
            box.style.display = "none";
          }
        });
        break;
    }
  };
});

function removeactive(array, li, className = "active") {
  array.forEach((li) => {
    li.classList.remove(className);
  });
  li.classList.add(className);
}

function showallbox(boxes = boxes) {
  boxes.forEach((box) => {
    box.style.display = "block";
  });
}
