const root = document.getElementById("root");
root.innerHTML = `<div class="spinWheel"><div class="pointer">  <img src="./IMG/point.png" alt="point" id="point" /></div><div class="wheel">  <div class="wheelContainer">    <img src="./IMG/spinwheel.png" alt="wheel" id="wheel" />      </div></div></div><div class="container"><div class="prizebox" id="prizebox"></div></div> <img src="./IMG/spinbutton.png" alt="button" id="btn" /><footer> <a href="https://mragaryanalex.github.io/LuckyWheel/">github.com</a></footer>`;
const spin = document.getElementById("btn");
const wheel = document.getElementById("wheel");
const prizeBox = document.getElementById("prizebox");
let value;
let step = 0;
let freeSpin = 5;
const prizeArr = [0, 400, 0, 200, 0, 300, 0, 100];
let stepAngle = 360 / prizeArr.length;

function rotate() {
  var loced = false;
  let currentStep = getRandomNumber(0, prizeArr.length);
  let currentAngle = currentStep * stepAngle;
  console.log(currentAngle);
  step += 5 * 360;
  prizeElement = document.createElement("div");
  prizeElement.innerHTML = prizeArr[currentStep];
  prizeElement.classList.add("box");
  wheel.style.transform = `rotate(${currentAngle + step}deg)`;
}

function getRandomNumber(min, max) {
  if (max === undefined) return Math.floor(Math.random() * min);
  return Math.floor(Math.random() * (max - min) + min);
}
var locked = false;
spin.addEventListener("click", () => {
  if (locked) return;
  locked = true;
  rotate();
  setTimeout(function () {
    prizeBox.append(prizeElement);
    locked = false;
  }, 2000);
});
