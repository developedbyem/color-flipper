const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randNum = colors[getRandNumber()];

  color.innerHTML = `${randNum}`;
  document.body.style.backgroundColor = `${randNum}`;
});

function getRandNumber() {
  return Math.floor(Math.random() * colors.length);
}
