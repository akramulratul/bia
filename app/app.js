// const imagesArea = document.querySelector("display-item");
// document.getElementById("first-button").addEventListener("click", function () {
//   let displayItems = document.getElementById("display-item");
//   let div = document.createElement("div");
//   div.classList.add("row");
//   imagesArea.style.display = "none";
//   div.innerHTML = `<div class="col-lg-4 grid justify-items-center">
//   <img class="justify-content-center" src="images/1.svg" alt="" />
//   <div class="mt-3">
//     <img class="" src="images/LEVEL1.png" alt="" />
//   </div>
//   </div>
//   <div class="col-lg-4 grid justify-items-center">
//   <img class="" src="images/2.svg" alt="" />
//   <div class="mt-3">
//     <img class="" src="images/LEVEL2.png" alt="" />
//   </div>
//   </div>
//   <div class="col-lg-4 grid justify-items-center">
//   <img src="images/3.svg" alt="" />
//   <div class="mt-3">
//     <img src="images/LEVEL3.png" alt="" />
//   </div>
//   </div>`;
//   displayItems.appendChild(div);
// });
const buttonOne = document.getElementById("button-one");
const buttonTwo = document.getElementById("button-two");
const buttonThree = document.getElementById("button-three");
document.getElementById("first-button").addEventListener("click", function () {
  buttonTwo.style.display = "none";
  buttonThree.style.display = "none";
  buttonOne.style.display = "block";
});
document.getElementById("second-button").addEventListener("click", function () {
  buttonTwo.style.display = "block";
  buttonOne.style.display = "none";
  buttonThree.style.display = "none";
});
document.getElementById("third-button").addEventListener("click", function () {
  buttonOne.style.display = "none";
  buttonTwo.style.display = "none";
  buttonThree.style.display = "block";
});
