// target the h1 element from the html

// const h1 = document.querySelector('h1');

const H1 = document.getElementById("header");

console.log("H1", H1);
// H1.innerHTML = '<p> this is a paragraph </p>';
// H1.innerText = "Hello world";
const para = document.createElement("p");
para.innerText = "This is a created para";
H1.appendChild(para);

para.onclick = function () {
  alert("You clicked on the paragraph");
};

H1.addEventListener("mouseenter", function (e) {
  H1.style.color = "red";
  console.log("Mouse entered", e.screenX, e.screenY);
});

// H1.style.color = 'red';

document.body.addEventListener("mouseleave", function (e) {
  H1.style.color = "black";
  console.log("Body mouseLeave", e.screenX, e.screenY);
});

console.log("Document URI", document.documentURI);

// Create a cookie

document.cookie = "name:Ayush;";
