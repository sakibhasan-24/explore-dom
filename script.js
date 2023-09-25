console.log("connected!");
const firstDom = document.getElementsByTagName("h1");
// console.log(firstDom[0].innerText);

// get all tag name,it returns an array [h1,h1]
const typeOfAccess = document.getElementsByTagName("li");

for (const type of typeOfAccess) {
  console.log(type.innerText);
}

// get element by id
// get elements by class name
// get elements/element by queryselector/querySelectorall
