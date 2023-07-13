let bodyBtn = document.getElementById("body-btn");
let mainWingBtn = document.getElementById("main-wing-btn");
let subWingBtn = document.getElementById("sub-wing-btn");
let upperBeakBtn = document.getElementById("upper-beak-btn");
let lowerBeakBtn = document.getElementById("lower-beak-btn");
let clawBtn = document.getElementById("claw-btn");
let tailWingBtn = document.getElementById("tail-wing-btn");
let headWingBtn = document.getElementById("head-wing-btn");
let eyePatchBtn = document.getElementById("eye-patch-btn");
let eyeBtn = document.getElementById("eye-btn");

bodyBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelectorAll(".body-clr").forEach((item) => {
    item.style.backgroundColor = color;
  });
  document.querySelector(".wing-color2-inner").style.borderTopColor = color;
});

mainWingBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelector(".wing-color1").style.backgroundColor = color;
});

subWingBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelector(".wing-color2").style.borderTopColor = color;
});

upperBeakBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelector(".beak-upper").style.backgroundColor = color;
});

lowerBeakBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelector(".beak-lower").style.backgroundColor = color;
});

clawBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelector(".leg").style.backgroundColor = color;
});

tailWingBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelectorAll(".tail-wing").forEach((item) => {
    item.style.backgroundColor = color;
  });
});

headWingBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelector(".feather").style.backgroundColor = color;
});

eyePatchBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelector(".eye-patch").style.backgroundColor = color;
});

eyeBtn.addEventListener("click", () => {
  let color = document.getElementById("color-picker").value;
  document.querySelector(".eye").style.backgroundColor = color;
});
