//  | explain what EACH LINE does in this JavaScript Document.
// \ /
//  .
var chBtn = document.querySelector("#chBtn");
chBtn.addEventListener("click", changeName) 
function changeName() {
    if (this.style.backgroundColor == "white") this.style.backgroundColor = "green";
    else this.style.backgroundColor = "white";
    User.changeName(prompt("Enter a new name"))
}
const User = {
  fName: "John",
  lName: "Lennon",
  changeName: function(a) {
      this.lName = a
  }
};
function sayHello(x) {
  if (x.style.backgroundColor == "white") x.style.backgroundColor = "green";
  else x.style.backgroundColor = "white";
  alert(User.lName + " says hello")
}
