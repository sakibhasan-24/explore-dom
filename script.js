// console.log("connected!");
const firstDom = document.getElementsByTagName("h1");

// event
const mathValue = document.getElementById("math-value");
const inputValue = document.getElementById("input-number");
const answer = document.getElementById("answer");
const check = document.getElementById("check");

const valueOfRandom = Math.trunc(Math.random() * 30);
let counter = 0;
check.addEventListener("click", function () {
  const input = Number(inputValue.value);
  counter++;
  if (input < 0 || input > 30) {
    answer.innerText = "invalid";
  } else if (input < valueOfRandom) {
    answer.innerText = "Boost Your Input";
  } else if (input > valueOfRandom) {
    answer.innerText = "rest Your Input";
  } else if (input === valueOfRandom) {
    answer.innerText = "winning......................";
    mathValue.innerText = valueOfRandom;
  }
});

// end of events
// console.log(firstDom[0].innerText);

// get all tag name,it returns an array [h1,h1]
const typeOfAccess = document.getElementsByTagName("li");

for (const type of typeOfAccess) {
  // console.log(type.innerText);
  type.style.fontSize = "30px";
}
document.getElementById;
// get element by id
// get elements by class name
// get elements/element by queryselector/querySelectorall

// html collection
const htmlCollection = document.getElementsByClassName("parent");
const arr = [1, 2, 3, 3];
// console.log(typeof arr);
// console.log(Boolean(Array.isArray(htmlCollection))); //false
// console.log(Boolean(Array.isArray(arr))); //true
// console.log(typeof htmlCollection);
// console.log(htmlCollection);
// console.log(htmlCollection[0].childNodes);
// const nodeCollection = document.querySelectorAll(".node");
// console.log(nodeCollection[0].children);

/* 
html collections
we can acheive html collection through getElementsByTagName,Id name,and class name.
it gives us an html collection.it is an array like objects.so we can not apply for each method here.if we want then we need to convert collection an array.html collections also return us text,comment,attribute as a node collection by childNodes.we can access through attribute name,index number,named property.html collection is a live collection,if we add another elements it will automatically update


*/
const add = document.getElementById("add");
const comment = document.getElementById("comment");
const place = document.getElementById("deleting-add");
const deleteAll = document.getElementById("delete-all");
const text = document.getElementsByClassName("text");
const deleteText = document.getElementById("delete-input-field");
const deleteBtn = document.getElementById("deleteText");
// console.log(deleteText);
add.addEventListener("click", function () {
  const p = document.createElement("p");
  const commentValue = comment.value;
  p.innerText = commentValue;
  p.classList.add("text");
  place.appendChild(p);
  deleteAll.style.display = "inline-block";
  p.addEventListener("click", function () {
    p.style.display = "none";
  });
});
// console.log(place);
const deleteValue = deleteText.value;
deleteText.addEventListener("keyup", function (e) {
  // console.log(e.target.value);
  const value = e.target.value;
  for (const i of text) {
    if (i.innerText === value) {
      deleteBtn.removeAttribute("disabled");
      break;
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
  }
});
// delete all
deleteAll.addEventListener("click", function () {
  place.style.display = "none";
});
function pur() {
  console.log("hello");
}

// delete by keybpard button
