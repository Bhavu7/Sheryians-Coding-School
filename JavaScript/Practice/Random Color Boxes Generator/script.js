let btn = document.querySelector("button");
let body = document.body;

btn.addEventListener("click", function () {
  let boxEle = document.createElement("div");

  let positionX = Math.floor(Math.random() * 100);
  let positionY = Math.floor(Math.random() * 100);

  let getRedColor = Math.floor(Math.random() * 256);
  let getGreenColor = Math.floor(Math.random() * 256);
  let getBlueColor = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${getRedColor},${getGreenColor},${getBlueColor})`;

  let randomDeg = Math.floor(Math.random() * 361);

  boxEle.style.width = "50px";
  boxEle.style.height = "50px";
  boxEle.style.borderRadius = "8px";
  boxEle.style.backgroundColor = randomColor;
  boxEle.style.position = "absolute";
  boxEle.style.rotate = randomDeg + "deg";
  boxEle.style.top = positionY + "vh";
  boxEle.style.left = positionX + "vw";

  body.appendChild(boxEle);
});
