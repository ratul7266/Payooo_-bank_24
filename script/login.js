console.log("conneting");

document.getElementById("login-btn").addEventListener("click", function () {
  // input number
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;

  // input pin
  const pinInput = document.getElementById("input-pin");
  const pinNumber = pinInput.value;

  // match input
  if (contactNumber == "01972610566" && pinNumber == "7266") {
    alert("Login Sucess");

    // window.location.replace("/home.html")
    window.location.assign("https://ratul7266.github.io/");
  } else {
    alert("Something is Wrong || Login failed || Error 404!!!");
    return;
  }
});
