const button = document.getElementById("thisButton");

button.addEventListener("click", function() {
  document.getElementById("message").innerText = "You clicked the button!";
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("message").style.color = "purple";
});
