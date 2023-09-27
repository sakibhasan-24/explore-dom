// console.log("connected!");
const firstDom = document.getElementsByTagName("h1");

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
console.log(htmlCollection);
console.log(htmlCollection[0].childNodes);
// const nodeCollection = document.querySelectorAll(".node");
// console.log(nodeCollection[0].children);

/* 
html collections
we can acheive html collection through getElementsByTagName,Id name,and class name.
it gives us an html collection.it is an array like objects.so we can not apply for each method here.if we want then we need to convert collection an array.html collections also return us text,comment,attribute as a node collection by childNodes.we can access through attribute name,index number,named property.html collection is a live collection,if we add another elements it will automatically update


*/
