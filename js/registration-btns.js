function displayRegistration() {
  document.getElementById("registration-div").style.display = "block";
  document.getElementById("oilChange-div").style.display = "none";
  document.getElementById("tireRotation-div").style.display = "none";

  document.getElementById("registration-btn").classList.add("active");
  document.getElementById("oilChange-btn").classList.remove("active");
  document.getElementById("tireRotation-btn").classList.remove("active");
}

function displayOilChange() {
  document.getElementById("registration-div").style.display = "none";
  document.getElementById("oilChange-div").style.display = "block";
  document.getElementById("tireRotation-div").style.display = "none";

  document.getElementById("registration-btn").classList.remove("active");
  document.getElementById("oilChange-btn").classList.add("active");
  document.getElementById("tireRotation-btn").classList.remove("active");
}

function displayTireRotation() {
  document.getElementById("registration-div").style.display = "none";
  document.getElementById("oilChange-div").style.display = "none";
  document.getElementById("tireRotation-div").style.display = "block";

  document.getElementById("registration-btn").classList.remove("active");
  document.getElementById("oilChange-btn").classList.remove("active");
  document.getElementById("tireRotation-btn").classList.add("active");
}
