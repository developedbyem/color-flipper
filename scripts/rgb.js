const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randNum = `rgba(${getRandNumber()},${getRandNumber()},${getRandNumber()})`;

  color.innerHTML = `${randNum}`;
  document.body.style.backgroundColor = `${randNum}`;
});

function getRandNumber() {
  return Math.floor(Math.random() * 256);
}
