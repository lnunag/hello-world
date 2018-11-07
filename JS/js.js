function sayConsole() {
  console.log("Hello, World!");
}
function sayPopup() {
  alert("Hello, World!");
}
function sayBrowser() {
		var p = document.getElementById("Hello");
    p.innerHTML = "Hello, World!";
}
function sayStranger() {
    var person = prompt("Please enter your name");
    alert("Hello, " + person + "!");
}
