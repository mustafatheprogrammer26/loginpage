let userEmail = document.getElementById("email").value;
let userPassword = document.getElementById("password").value;

let login = document.getElementById("btn");

login.addEventListener("click", () => {
  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  if (userEmail == "mustafa778822@gmail.com" && userPassword == 201145) {
    window.location.href = "https://www.instagram.com/accounts/login/?hl=en";
  } else {
    alert("Please try again");
  }
});