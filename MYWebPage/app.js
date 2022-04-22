document.getElementById("Thor").addEventListener("click", function () {
  //alert("message");
  let buttonOne = document.getElementById("buttonOne");
  let Thor = document.createElement("img");
  Thor.src = "./pics/thor.jpg";
  Thor.width = "150";
  let solutions = document.getElementById("afterclick");
  solutions.innerHTML = "<img src='./pics/thor.jpg' /> ";
});
document.getElementById("Wolverine").addEventListener("click", function () {
  //alert("message");
  let buttonTwo = document.getElementById("buttonTwo");
  let Wolverine = document.createElement("img");
  Wolverine.src = "./pics/wolverine.jpg";
  Wolverine.width = "150";
  let solutions = document.getElementById("afterclick");
  solutions.innerHTML = "<img src='./pics/wolverine.jpg' /> ";
});
document.getElementById("DeadPool").addEventListener("click", function () {
  //alert("message");
  let buttonThree = document.getElementById("buttonThree");
  let DeadPool = document.createElement("img");
  DeadPool.src = "./pics/deadpool.png";
  DeadPool.width = "150";
  let solutions = document.getElementById("afterclick");
  solutions.innerHTML = "<img src='./pics/deadpool.png' /> ";
});
document.getElementById("Magneto").addEventListener("click", function () {
  //alert("message");
  let buttonFour = document.getElementById("buttonFour");
  let Magneto = document.createElement("img");
  Magneto.src = "./pics/magneto616.jpg";
  Magneto.width = "150";
  let solutions = document.getElementById("afterclick");
  solutions.innerHTML = "<img src='./pics/magneto616.jpg' /> ";
});
